const CACHE_NAME = 'js-lab-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './resume.html',
  './hobby.html',
  './converter.html',
  './grading.html',
  './change.html',
  './distance.html',
  './dragdrop.html',
  './Memberlist.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
