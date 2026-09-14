// ==========================================
// UNIVERSITY OF KABIANGA
// SMART CAMPUS NAVIGATOR
// SERVICE WORKER
// ==========================================

const CACHE_NAME = "uok-campus-v20";

const urlsToCache = [
    "./",
    "index.html",
    "home.html",
    "style.css",
    "script.js",
    "knowledge.js",
    "prince-ai.js",
    "logo.jpg",
    "welcome.jpg"
];

// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(error => {
                console.log("Cache installation error:", error);
            })
    );

});


// ==========================================
// FETCH
// IMPORTANT:
// NETWORK FIRST FOR HTML + JS + CSS
// ==========================================

self.addEventListener("fetch", event => {

    const request = event.request;

    // Do not interfere with Firebase/network requests
    if (
        request.url.includes("firestore.googleapis.com") ||
        request.url.includes("firebase") ||
        request.url.includes("gstatic")
    ) {
        return;
    }

    event.respondWith(

        fetch(request)
            .then(response => {

                // Save fresh response in cache
                if (
                    response &&
                    response.status === 200 &&
                    response.type !== "opaque"
                ) {

                    const responseClone = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(request, responseClone);
                        });

                }

                return response;

            })
            .catch(() => {

                // If internet fails, use cached version
                return caches.match(request);

            })

    );

});


// ==========================================
// ACTIVATE
// DELETE ALL OLD CACHES
// ==========================================

self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
            .then(cacheNames => {

                return Promise.all(

                    cacheNames.map(cacheName => {

                        if (cacheName !== CACHE_NAME) {
                            return caches.delete(cacheName);
                        }

                    })

                );

            })
            .then(() => self.clients.claim())

    );

});
