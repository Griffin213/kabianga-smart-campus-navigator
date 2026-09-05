const {
    onDocumentCreated
} = require("firebase-functions/v2/firestore");

const {
    initializeApp
} = require("firebase-admin/app");

const {
    getFirestore
} = require("firebase-admin/firestore");

const {
    getMessaging
} = require("firebase-admin/messaging");


initializeApp();


const db = getFirestore();

const messaging = getMessaging();


// ==========================================
// NEW ANNOUNCEMENT → PUSH NOTIFICATION
// ==========================================

exports.sendAnnouncementNotification =

    onDocumentCreated(
        "announcements/{announcementId}",

        async (event) => {

            console.log(
                "📢 New announcement detected"
            );


            const snapshot = event.data;


            if (!snapshot) {

                console.log(
                    "❌ No announcement data found"
                );

                return;

            }


            const announcement =
                snapshot.data();


            const title =
                announcement.title ||
                "University of Kabianga";


            const body =
                announcement.message ||
                "You have a new campus announcement.";


            const announcementId =
                event.params.announcementId;


            console.log(
                "Announcement ID:",
                announcementId
            );


            console.log(
                "Title:",
                title
            );


            console.log(
                "Message:",
                body
            );


            // ==================================
            // GET ALL ACTIVE DEVICES
            // ==================================

            const tokenSnapshot =
                await db
                    .collection("notificationTokens")
                    .where("active", "==", true)
                    .get();


            if (tokenSnapshot.empty) {

                console.log(
                    "⚠️ No subscribed devices found."
                );

                return;

            }


            const tokens =
                tokenSnapshot.docs
                    .map(doc => doc.data().token)
                    .filter(token => token);


            console.log(
                `📱 Found ${tokens.length} subscribed devices`
            );


            if (tokens.length === 0) {

                console.log(
                    "⚠️ No valid FCM tokens."
                );

                return;

            }


            // ==================================
            // SEND IN BATCHES
            // ==================================

            let totalSuccess = 0;

            let totalFailure = 0;


            for (
                let i = 0;
                i < tokens.length;
                i += 500
            ) {


                const batch =
                    tokens.slice(i, i + 500);


                console.log(
                    `📡 Sending batch ${Math.floor(i / 500) + 1}`
                );


                const response =
                    await messaging
                        .sendEachForMulticast({

                            tokens: batch,

                            notification: {

                                title:
                                    title,

                                body:
                                    body

                            },

                            data: {

                                announcementId:
                                    announcementId,

                                title:
                                    title,

                                body:
                                    body,

                                url:
                                    "/kabianga-smart-campus-navigator/announcements.html"

                            }

                        });


                totalSuccess +=
                    response.successCount;


                totalFailure +=
                    response.failureCount;


                console.log(
                    `✅ Success: ${response.successCount}`
                );


                console.log(
                    `❌ Failed: ${response.failureCount}`
                );


                // ==================================
                // REMOVE INVALID TOKENS
                // ==================================

                const deletePromises = [];


                response.responses.forEach(
                    (result, index) => {

                        if (!result.success) {

                            const error =
                                result.error;


                            console.error(
                                "FCM error:",
                                error?.code
                            );


                            if (

                                error?.code ===
                                "messaging/registration-token-not-registered"

                                ||

                                error?.code ===
                                "messaging/invalid-registration-token"

                            ) {

                                const tokenToDelete =
                                    batch[index];


                                const tokenDoc =
                                    db
                                        .collection(
                                            "notificationTokens"
                                        )
                                        .doc(
                                            tokenToDelete
                                        );


                                deletePromises.push(
                                    tokenDoc.delete()
                                );

                            }

                        }

                    }
                );


                await Promise.all(
                    deletePromises
                );

            }


            // ==================================
            // UPDATE ANNOUNCEMENT
            // ==================================

            await db
                .collection("announcements")
                .doc(announcementId)
                .update({

                    notificationSent:
                        true,

                    notificationSentAt:
                        new Date().toISOString(),

                    notificationSuccess:
                        totalSuccess,

                    notificationFailure:
                        totalFailure

                });


            console.log(
                "================================"
            );


            console.log(
                "🎉 NOTIFICATION PROCESS COMPLETE"
            );


            console.log(
                `📱 Delivered: ${totalSuccess}`
            );


            console.log(
                `❌ Failed: ${totalFailure}`
            );


            console.log(
                "================================"
            );

        }
    );
