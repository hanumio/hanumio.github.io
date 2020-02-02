/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/ablog/hexo/public/Gallery/index.html","eab493a35b86d25fee7d5dd5b4bef190"],["C:/ablog/hexo/public/about/index.html","d51e8f451baaf158421a05ba2013e3ad"],["C:/ablog/hexo/public/archives/2020/01/index.html","970f3b0c1ebbf8edb66c62355432674a"],["C:/ablog/hexo/public/archives/2020/01/page/2/index.html","7f35405bd1b5e0ab0a6dc10f4aff59d8"],["C:/ablog/hexo/public/archives/2020/index.html","129cfee79491a607bb345d188290c9ba"],["C:/ablog/hexo/public/archives/2020/page/2/index.html","da4edbe38abac7dac2c0605aab889344"],["C:/ablog/hexo/public/archives/20fd3ff2.html","3b7af38b6fe7deee87655d68ccee8955"],["C:/ablog/hexo/public/archives/3752425c.html","e146553c96ed2e6d5525f22ce90b801d"],["C:/ablog/hexo/public/archives/61c55686.html","eb821b82c0d21047b296250475a2905e"],["C:/ablog/hexo/public/archives/748ece6f.html","82595961a5ce07b39a17c724913230a8"],["C:/ablog/hexo/public/archives/85efaa1.html","a5ebdc142dab064c7d47c66ffcb73a2f"],["C:/ablog/hexo/public/archives/8c1a1c7a.html","c19ab8082b2000c7108d15e7a1648963"],["C:/ablog/hexo/public/archives/91355b96.html","f6ace99932ccdc78ee783674e8e5d825"],["C:/ablog/hexo/public/archives/92ace29f.html","b3c2f8fd0908a05be871f890c1487cb3"],["C:/ablog/hexo/public/archives/92ee741c.html","d404fe6c9cb39331b810455efbe71196"],["C:/ablog/hexo/public/archives/936bb2de.html","2c7143a50441919a9301c44e37478de8"],["C:/ablog/hexo/public/archives/93db2012.html","65dd693e7676b64711c076e56a925f14"],["C:/ablog/hexo/public/archives/df1ab73d.html","482000e0973c0c5da793b8e6ef8d36fa"],["C:/ablog/hexo/public/archives/e6c96c90.html","f51ac83ca529c5cba24eb3dfd58062a7"],["C:/ablog/hexo/public/archives/index.html","894f3f39bf603939c4b5bfd3172538b7"],["C:/ablog/hexo/public/archives/page/2/index.html","42e8ed24a77869bef5794eda82020e18"],["C:/ablog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/ablog/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/ablog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/ablog/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/ablog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/ablog/hexo/public/categories/index.html","1365303b8aec8841e588028f0e9ab0da"],["C:/ablog/hexo/public/css/index.css","54016f0236bce7f339ec24f2000c9557"],["C:/ablog/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/ablog/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/ablog/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/ablog/hexo/public/img/avatar.png","4605042f3c7c7a0d028eda9d89addc79"],["C:/ablog/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/ablog/hexo/public/img/favicon.jpg","e953a549f3a1e63fa29b6e6996079810"],["C:/ablog/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/ablog/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/ablog/hexo/public/img/loading.gif","a850e5f72c4f42bb5d36135b8ee20b95"],["C:/ablog/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/ablog/hexo/public/index.html","b5a2cc01f7033de2b727f51d0485b1a0"],["C:/ablog/hexo/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/ablog/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/ablog/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/ablog/hexo/public/link/index.html","c66cef7dd50ee8853a2646f0f2b1913d"],["C:/ablog/hexo/public/message/index.html","861b14875e87f98a22f3cc0a2379f47d"],["C:/ablog/hexo/public/movies/index.html","3ec78174516b7b17ce562cb2ed5f1c8d"],["C:/ablog/hexo/public/music/index.html","5aba1c9c82ea1cd40afb1dcdb5ba0f2a"],["C:/ablog/hexo/public/page/2/index.html","641b79dd12e655835099ea2e46465e29"],["C:/ablog/hexo/public/tags/index.html","aa9db596f1a48e53f1c973298a6ced12"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







