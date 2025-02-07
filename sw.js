const CACHE_NAME = 'faith-first-v1';
const assets = [
  '/',
  '/index.html',
  '/bible-study.html',
  '/hymns.html',
  '/prayer-journal.html',
  '/community.html',
  '/styles.css',
  '/app.js',
  '/js/bible-controller.js',
  '/js/hymnal-api.js',
  '/js/audio-player.js',
  '/js/quiz-controller.js',
  '/assets/videos/worship-bg.mp4',
  '/faith-first.apk',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.10.2/cdn.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});
