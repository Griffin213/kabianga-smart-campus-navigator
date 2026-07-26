const CACHE_NAME = "uok-campus-v5";

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

// Install Service Worker
self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
// Fetch latest files first
self.addEventListener("fetch", event => {

  // Don't cache Firebase requests
  if (
    event.request.url.includes("firestore.googleapis.com") ||
    event.request.url.includes("firebase") ||
    event.request.url.includes("gstatic")
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );

});

// Activate and remove old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => caches.delete(cache))
      );
    }).then(() => self.clients.claim())
  );
});
