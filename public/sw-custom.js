var cacheName = 'cache-v1'

var resourcesToPrecache = [
    './',
    './index.html',
    './js/dist.js'
]

self.addEventListener('install', e => {
    console.log('Install event => ', e)
    e.waitUntil( // install event happen before the cache is ready, and that would be bad. Fix - waitUntil!
        caches.open(cacheName) // open cacheName
        .then(cache => {
            return cache.addAll(resourcesToPrecache) // add all files to the cache
        })
    )

})

self.addEventListener('activate', e => {
    console.log('activate event => ', e)
})

self.addEventListener('fetch', e => {
    console.log('fetch intercepted for => ', e.request.url, e)
    e.respondWith( // waits for the innermost promise to resolve
        caches.match(e.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(e.request) // <- the cache-first strategy
        })
    )
})