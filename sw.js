const CACHE_NAME = 'em0rom-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  // Add your panel images here if you want them cached offline
  'https://upload.wikimedia.org/wikipedia/en/e/e9/Super_Mario_64.png',
  'https://i.ytimg.com/vi/d8OMec763vA/sddefault.jpg',
  'https://i.ytimg.com/vi/Asv9JcEY_6s/maxresdefault.jpg',
  'https://images.launchbox-app.com//59bc3404-2b83-44f3-a8c2-749bc7dc6807.png',
  'https://silverballmuseum.com/wp-content/uploads/2016/06/pac-man.jpg',
  'https://i.ytimg.com/vi/a_ppMVWwztU/maxresdefault.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
