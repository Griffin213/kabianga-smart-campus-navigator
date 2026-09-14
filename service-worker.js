// ==========================================
// UNIVERSITY OF KABIANGA
// SMART CAMPUS NAVIGATOR
// SERVICE WORKER
// ==========================================

const CACHE_NAME = "uok-campus-v40";

const urlsToCache = [
    "./",
    "index.html",
    "home.html",
    "prince-ai.html",
    "prince-ai.js",
    "knowledge.js",
    "script.js",
    "style.css",
    "logo.jpg",
    "welcome.jpg"
];


// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", event => {

    console.log(
        "✅ UOK Service Worker v40 installing..."
    );

    // Activate the new service worker immediately
    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                console.log(
                    "📦 Caching UOK application files..."
                );

                return cache.addAll(urlsToCache);

            })

    );

});


// ==========================================
// ACTIVATE
// ==========================================

self.addEventListener("activate", event => {

    console.log(
        "✅ UOK Service Worker v40 activated."
    );

    event.waitUntil(

        caches.keys()

            .then(cacheNames => {

                return Promise.all(

                    cacheNames.map(cacheName => {

                        if (
                            cacheName !== CACHE_NAME
                        ) {

                            console.log(
                                "🗑️ Deleting old cache:",
                                cacheName
                            );

                            return caches.delete(
                                cacheName
                            );

                        }

                    })

                );

            })

            .then(() => {

                return self.clients.claim();

            })

    );

});


// ==========================================
// FETCH
// ==========================================

self.addEventListener("fetch", event => {

    const request = event.request;
    const url = request.url;


    // ======================================
    // ONLY HANDLE HTTP/HTTPS REQUESTS
    // ======================================

    if (
        !url.startsWith("http://") &&
        !url.startsWith("https://")
    ) {

        return;

    }


    // ======================================
    // DO NOT CACHE EXTERNAL SERVICES
    // ======================================

    if (
        url.includes("firebase") ||
        url.includes("firestore.googleapis.com") ||
        url.includes("googleapis.com") ||
        url.includes("gstatic.com")
    ) {

        return;

    }


    // ======================================
    // ALWAYS GET IMPORTANT APP FILES
    // FROM NETWORK FIRST
    // ======================================

    if (
        url.includes("home.html") ||
        url.includes("index.html") ||
        url.includes("prince-ai.html") ||
        url.includes("prince-ai.js") ||
        url.includes("knowledge.js") ||
        url.includes("script.js") ||
        url.includes("style.css") ||
        url.includes("service-worker.js")
    ) {

        event.respondWith(

            fetch(request)

                .then(response => {

                    if (
                        response &&
                        response.ok
                    ) {

                        const copy =
                            response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {

                                cache.put(
                                    request,
                                    copy
                                );

                            });

                    }

                    return response;

                })

                .catch(() => {

                    console.log(
                        "⚠️ Network unavailable. Using cached:",
                        url
                    );

                    return caches.match(
                        request
                    );

                })

        );

        return;

    }


    // ======================================
    // OTHER FILES
    // CACHE FIRST
    // ======================================

    event.respondWith(

        caches.match(request)

            .then(cachedResponse => {

                if (cachedResponse) {

                    return cachedResponse;

                }


                return fetch(request)

                    .then(networkResponse => {

                        if (
                            networkResponse &&
                            networkResponse.ok
                        ) {

                            const copy =
                                networkResponse.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {

                                    cache.put(
                                        request,
                                        copy
                                    );

                                });

                        }

                        return networkResponse;

                    });

            })

    );

});


// ==========================================
// FORCE ALL OPEN TABS TO UPDATE
// ==========================================

self.addEventListener("message", event => {

    if (
        event.data &&
        event.data.action === "SKIP_WAITING"
    ) {

        self.skipWaiting();

    }

});
