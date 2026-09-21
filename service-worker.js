// ==========================================
// UNIVERSITY OF KABIANGA
// SMART CAMPUS NAVIGATOR
// SERVICE WORKER
// VERSION 43
// ==========================================

const CACHE_NAME = "uok-campus-v43";


// ==========================================
// FILES TO CACHE
// ==========================================

const urlsToCache = [

    "./",

    "./index.html",
    "./campuses.html",
    "./main-campus.html",

    "./prince-ai.html",
    "./prince-ai.js",
    "./knowledge.js",

    "./script.js",
    "./smart-search.js",
    "./announcements.js",
    "./notifications.js",

    "./firebase.js",
    "./style.css",

    "./manifest.json",

    "./logo.jpg",
    "./welcome.jpg",
    "./main-campus.jpg",
    "./kapkatet-campus.jpg"

];


// ==========================================
// INSTALL
// ==========================================

self.addEventListener("install", event => {

    console.log(
        "✅ UOK Service Worker v42 installing..."
    );

    // Activate immediately
    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                console.log(
                    "📦 Caching UOK application files..."
                );

                return cache.addAll(urlsToCache);

            })

            .catch(error => {

                console.error(
                    "❌ Cache installation failed:",
                    error
                );

            })

    );

});


// ==========================================
// ACTIVATE
// ==========================================

self.addEventListener("activate", event => {

    console.log(
        "✅ UOK Service Worker v42 activated."
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

                        return null;

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


    // ======================================
    // ONLY HANDLE GET REQUESTS
    // ======================================

    if (
        request.method !== "GET"
    ) {

        return;

    }


    const url = new URL(
        request.url
    );


    // ======================================
    // ONLY HANDLE THIS WEBSITE
    // ======================================

    if (
        url.origin !== self.location.origin
    ) {

        return;

    }


    // ======================================
    // HTML / NAVIGATION
    // NETWORK FIRST
    // ======================================

    if (

        request.destination === "document"

        ||

        url.pathname.endsWith(".html")

        ||

        url.pathname.endsWith("/")

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
                        "⚠️ Network unavailable. Using cached page."
                    );

                    return caches.match(
                        request
                    );

                })

        );

        return;

    }


    // ======================================
    // STATIC FILES
    // CACHE FIRST
    // ======================================

    event.respondWith(

        caches.match(request)

            .then(cachedResponse => {

                if (
                    cachedResponse
                ) {

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
// FORCE UPDATE
// ==========================================

self.addEventListener(
    "message",
    event => {

        if (
            event.data &&
            event.data.action ===
            "SKIP_WAITING"
        ) {

            self.skipWaiting();

        }

    }
);


console.log(
    "🚀 UOK Service Worker v42 loaded successfully."
);
