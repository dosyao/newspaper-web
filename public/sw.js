if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("fallback-_2fHXDUvFSDXWGhBdWd0a.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_2fHXDUvFSDXWGhBdWd0a/_buildManifest.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/_2fHXDUvFSDXWGhBdWd0a/_middlewareManifest.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/_2fHXDUvFSDXWGhBdWd0a/_ssgManifest.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/175.9cb3fd033bea1b56.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/182.27265afa4988ecea.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/245.f944190db648ccc8.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/291.2f65cba4cff8b761.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/309.42310925f0e343a8.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/518-660cf008e149302e.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/55.ee8ed8f470a12341.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/664.adf0de5eb5ec62a6.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/675-a60a28558586d8d8.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/685.272390c24fabd91a.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/716-547a7d2f097492ad.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/974.dd7f62de4ae863a4.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/983.74dce344793f8292.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/framework-629abaa81d20e615.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/main-bbe006a44d236c37.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/404-839c716c66f5696b.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/_app-68f67dbb668794c6.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/_offline-ed512ff9cb89509d.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/about-995dd0fba163aec8.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/blog-ed2df7ff5fa8d144.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/blog/%5BpostSlug%5D-04dd3f3ce438a753.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/blog/category/%5BcategorySlug%5D-2d608b438eac06a1.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/blog/category/page/%5BpageNumber%5D-419128b673b4c2dc.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/blog/page/%5BpageNumber%5D-c2575c512aa6f2e8.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/contact-170dc2a4076ec92c.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/pages/index-51e9446ac39e83c8.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/chunks/webpack-8b77124faf1d5c0c.js",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/css/024178f9268b0c0d.css",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/css/309b310ff35366b4.css",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/css/37d366e42a03a4cc.css",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/css/640e1128e60fc71f.css",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/css/646a49bbfefaf2b5.css",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_next/static/css/b7c704cfabd33172.css",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/_offline",revision:"_2fHXDUvFSDXWGhBdWd0a"},{url:"/data/info-pages/about.js",revision:"a0d6bbc1ecbbcdafd3c57ce1ae60d6ff"},{url:"/data/info-pages/contact.js",revision:"900b96b243602267d2906a24848b3321"},{url:"/icons/android-chrome-192x192.png",revision:"459dac2113348dfadd8e0a96e4f39dc9"},{url:"/icons/android-chrome-512x512.png",revision:"1dd09f49a871135445f7bd7946c66676"},{url:"/icons/apple-touch-icon.png",revision:"7d8281986da8db9c1b5413570ecc1f83"},{url:"/icons/favicon-16x16.png",revision:"12b1cab2ce8a716a075f33cffcc9bc97"},{url:"/icons/favicon-32x32.png",revision:"096850f15c19cf78da22a61a7fc60b53"},{url:"/icons/favicon.ico",revision:"aaa3368a9b5804c3f3cbd6b6f8e17dcc"},{url:"/icons/safari-pinned-tab.svg",revision:"40c9bc99e963fb841cd147f0374682fe"},{url:"/manifest.json",revision:"ccdb9eb61ef9975455a748c713f77062"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));