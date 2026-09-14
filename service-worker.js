const CACHE_NAME = "uok-campus-v32";

const urlsToCache = [
    "./",
    "index.html",
    "home.html",
    "style.css",
    "script.js",
    "prince-ai.js",
    "knowledge.js",
    "logo.jpg",
    "welcome.jpg"
];


// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", event => {

    console.log("UOK Service Worker v32 installing...");

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});


// ==========================================
// ACTIVATE
// ==========================================

self.addEventListener("activate", event => {

    console.log("UOK Service Worker v32 activated.");

    event.waitUntil(

        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames.map(cacheName => {

                    if (cacheName !== CACHE_NAME) {

                        console.log(
                            "Deleting old cache:",
                            cacheName
                        );

                        return caches.delete(cacheName);

                    }

                })

            );

        }).then(() => {

            return self.clients.claim();

        })

    );
});


// ==========================================
// FETCH
// ==========================================

self.addEventListener("fetch", event => {

    const url = event.request.url;


    // ======================================
    // ALWAYS GET THESE FROM NETWORK FIRST
    // ======================================

    if (
        url.includes("prince-ai.js") ||
        url.includes("knowledge.js") ||
        url.includes("service-worker.js")
    ) {

        event.respondWith(

            fetch(event.request)

                .then(response => {

                    const copy = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {

                            cache.put(
                                event.request,
                                copy
                            );

                        });

                    return response;

                })

                .catch(() => {

                    return caches.match(
                        event.request
                    );

                })

        );

        return;
    }


    // ======================================
    // DO NOT CACHE FIREBASE / GOOGLE SERVICES
    // ======================================

    if (
        url.includes("firebase") ||
        url.includes("firestore.googleapis.com") ||
        url.includes("gstatic.com") ||
        url.includes("googleapis.com")
    ) {

        return;

    }


    // ======================================
    // OTHER FILES
    // CACHE FIRST
    // ======================================

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                if (response) {

                    return response;

                }

                return fetch(event.request)

                    .then(networkResponse => {

                        const copy =
                            networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {

                                cache.put(
                                    event.request,
                                    copy
                                );

                            });

                        return networkResponse;

                    });

            })

    );

});
