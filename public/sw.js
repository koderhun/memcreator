if (!self.define) {
  let e,
    s = {}
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = c), (e.onload = s), document.head.appendChild(e)
        } else (e = c), importScripts(c), s()
      }).then(() => {
        let e = s[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, n) => {
    const r =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[r]) return
    let t = {}
    const i = (e) => c(e, r),
      o = {module: {uri: r}, exports: t, require: i}
    s[r] = Promise.all(a.map((e) => o[e] || i(e))).then((e) => (n(...e), t))
  }
}
define(['./workbox-80ca14c3'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/memcreator/_next/app-build-manifest.json',
          revision: '648a4aa6bc0e9f6eea5c9f8c331ac4fb',
        },
        {
          url: '/memcreator/_next/static/LeusNd3YfJKrmUZAEU6kF/_buildManifest.js',
          revision: 'c79d94c10fd54ce778ee9870955b56b1',
        },
        {
          url: '/memcreator/_next/static/LeusNd3YfJKrmUZAEU6kF/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/memcreator/_next/static/chunks/428-15cb0d0bba29bfcd.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/457-426440086de7db62.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/506-94658e307b1be39f.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/8100ded3-be47703dbcbb9000.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/abfc1a8b-bb06f1db79571a60.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/app/_not-found-4e99fabd78570437.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/app/layout-15d1ac2f3add6d0a.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/app/page-9b8b9431eae2f7fa.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/d4b9cd2b-b10b502d133ff352.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/framework-510ec8ffd65e1d01.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/main-850bb5fb2c9bce85.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/main-app-aaf89fdc9558554f.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/pages/_app-988b4c7b4e287415.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/pages/_error-d163e6502c841135.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/memcreator/_next/static/chunks/webpack-ddf20cc86475d1e5.js',
          revision: 'LeusNd3YfJKrmUZAEU6kF',
        },
        {
          url: '/memcreator/_next/static/css/6856f12096167e24.css',
          revision: '6856f12096167e24',
        },
        {
          url: '/memcreator/_next/static/css/bf3c6eb655ab3c8f.css',
          revision: 'bf3c6eb655ab3c8f',
        },
        {
          url: '/memcreator/favicon.ico',
          revision: 'bb8a604dfa5f666e3558b496480c414f',
        },
        {
          url: '/memcreator/favicon.png',
          revision: '4c63c033c9a2fa1f4dfa1211626736a3',
        },
        {
          url: '/memcreator/manifest.json',
          revision: '0ae9341047191287cba88525d0d1f8ab',
        },
        {
          url: '/memcreator/pwa/apple-touch-icon.png',
          revision: 'faef520512634ed5728bc0891c14c574',
        },
        {
          url: '/memcreator/pwa/icons/icon-128x128.png',
          revision: '2b4a1373890908f72e4427e618231aec',
        },
        {
          url: '/memcreator/pwa/icons/icon-144x144.png',
          revision: 'a89f3293987ca9cf58f2d70cf3c4bca3',
        },
        {
          url: '/memcreator/pwa/icons/icon-152x152.png',
          revision: '836258ccd0541f92b97c86fc94244b60',
        },
        {
          url: '/memcreator/pwa/icons/icon-192x192.png',
          revision: 'd41d8cd98f00b204e9800998ecf8427e',
        },
        {
          url: '/memcreator/pwa/icons/icon-384x384.png',
          revision: 'd41d8cd98f00b204e9800998ecf8427e',
        },
        {
          url: '/memcreator/pwa/icons/icon-512x512.png',
          revision: 'b5c617fa8127aa46149442b3798e4bcc',
        },
        {
          url: '/memcreator/pwa/icons/icon-72x72.png',
          revision: '436d981c0d855f48a94782a90ee6ca66',
        },
        {
          url: '/memcreator/pwa/icons/icon-96x96.png',
          revision: 'c2a9086e663e343e3f4c02aeae23630b',
        },
        {
          url: '/memcreator/pwa/safari-pinned-tab.svg',
          revision: 'f750ae273de53cb0b42cd030f777a508',
        },
        {
          url: '/memcreator/pwa/site.webmanifest',
          revision: '9e98cc04794bc72faf67196399862367',
        },
      ],
      {ignoreURLParametersMatching: []},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/memcreator',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 31536e3}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 4, maxAgeSeconds: 604800}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 64, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 16, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({url: e}) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 86400}),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({url: e}) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({maxEntries: 32, maxAgeSeconds: 3600}),
        ],
      }),
      'GET',
    )
})
