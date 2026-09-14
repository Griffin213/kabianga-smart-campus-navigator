const CACHE_NAME = "uok-campus-v30";

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

self.addEventListener("install", event => {

    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames.map(cacheName => {

                    if (cacheName !== CACHE_NAME) {

                        return caches.delete(cacheName);

                    }

                })

            );

        }).then(() => {

            return self.clients.claim();

        })

    );
});


self.addEventListener("fetch", event => {

    // Always get JavaScript files from the network first.
    // This prevents Prince AI from using an old cached JS file.

    if (
        event.request.url.includes("prince-ai.js") ||
        event.request.url.includes("knowledge.js") ||
        event.request.url.includes("service-worker.js")
    ) {

        event.respondWith(

            fetch(event.request)
                .then(response => {

                    const copy = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, copy);
                        });

                    return response;

                })
                .catch(() => {

                    return caches.match(event.request);

                })

        );

        return;
    }


    // Firebase / Google services should not be cached.

    if (
        event.request.url.includes("firestore.googleapis.com") ||
        event.request.url.includes("firebase") ||
        event.request.url.includes("gstatic")
    ) {

        return;
    }


    // Other files: cache first, then network.

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request);

            })

    );

});
