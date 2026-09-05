const CACHE_NAME = "uok-campus-v11";

const urlsToCache = [
    "./",
    "index.html",
    "home.html",
    "announcements.html",
    "style.css",
    "script.js",
    "firebase.js",
    "announcements.js",
    "notifications.js",
    "prince-ai.js",
    "knowledge.js",
    "logo.jpg"
];


// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", event => {

    console.log("⚙️ UOK Service Worker installing...");

    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                console.log("📦 Caching UOK application files");

                return cache.addAll(urlsToCache);

            })
            .catch(error => {

                console.error(
                    "❌ Cache installation error:",
                    error
                );

            })

    );

});


// ==========================================
// ACTIVATE
// ==========================================

self.addEventListener("activate", event => {

    console.log("✅ UOK Service Worker activated");

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {

                        console.log(
                            "🗑️ Removing old cache:",
                            key
                        );

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});


// ==========================================
// FETCH
// ==========================================

self.addEventListener("fetch", event => {

    event.respondWith(

        fetch(event.request)

            .then(response => {

                return response;

            })

            .catch(() => {

                return caches.match(event.request);

            })

    );

});
