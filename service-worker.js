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

var precacheConfig = [["C:/ablog/hexo/public/Gallery/index.html","09c01735f18b5685a20a8cad7802196e"],["C:/ablog/hexo/public/about/index.html","83061d551f266536c3d3ffe41bae271c"],["C:/ablog/hexo/public/archives/2020/01/index.html","c4b1cabc5c70b0e98fdafcdc1e8314b4"],["C:/ablog/hexo/public/archives/2020/01/page/2/index.html","f2233a0f6533d68ffb7d8a75621a7b26"],["C:/ablog/hexo/public/archives/2020/index.html","89611a6ee21484998ff17b564f3fdfae"],["C:/ablog/hexo/public/archives/2020/page/2/index.html","ace2d23148f1e69c4257bcf0f923260a"],["C:/ablog/hexo/public/archives/20fd3ff2.html","2578e251f6eca0daf351d858e0bad15e"],["C:/ablog/hexo/public/archives/3752425c.html","9e787e2933a31ea0f73b9c4964e294ad"],["C:/ablog/hexo/public/archives/61c55686.html","11825efb594eee637dc7890fd673c5cc"],["C:/ablog/hexo/public/archives/748ece6f.html","3a00c6edae03dfd244ecd7e0d3c57c6d"],["C:/ablog/hexo/public/archives/85efaa1.html","96dc5415213663a004df762c6d77d0fa"],["C:/ablog/hexo/public/archives/8c1a1c7a.html","346f9f1677cd78db5c0a4682b6f8e422"],["C:/ablog/hexo/public/archives/91355b96.html","a9b63cd3dbacfe6c4b9bae6106891d7a"],["C:/ablog/hexo/public/archives/92ace29f.html","e7aeb73822ba52270823daeda01956c6"],["C:/ablog/hexo/public/archives/92ee741c.html","1318fadc975794ba540ff9b88720982f"],["C:/ablog/hexo/public/archives/936bb2de.html","7c5bb1fe8151a5edc4ea86690b4d3023"],["C:/ablog/hexo/public/archives/93db2012.html","509cb5c84978372512c2e07affecda95"],["C:/ablog/hexo/public/archives/df1ab73d.html","0977cb415db6dbae20793f4d76ae4d0b"],["C:/ablog/hexo/public/archives/e6c96c90.html","7d26451e4223801669ce4198239ea701"],["C:/ablog/hexo/public/archives/index.html","f704912e6a52dac70447ec2d625020d9"],["C:/ablog/hexo/public/archives/page/2/index.html","47085537619db49f48b55cdcbb2b6644"],["C:/ablog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/ablog/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/ablog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/ablog/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/ablog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/ablog/hexo/public/categories/index.html","a36464ff269ec6e0da8adff151110930"],["C:/ablog/hexo/public/css/index.css","54016f0236bce7f339ec24f2000c9557"],["C:/ablog/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/ablog/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/ablog/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/ablog/hexo/public/img/avatar.png","4605042f3c7c7a0d028eda9d89addc79"],["C:/ablog/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/ablog/hexo/public/img/favicon.jpg","e953a549f3a1e63fa29b6e6996079810"],["C:/ablog/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/ablog/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/ablog/hexo/public/img/loading.gif","a850e5f72c4f42bb5d36135b8ee20b95"],["C:/ablog/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/ablog/hexo/public/index.html","7be1239926bbd6d61f67f2b9552994a2"],["C:/ablog/hexo/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/ablog/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/ablog/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/ablog/hexo/public/link/index.html","d082e0c8b9f2f89fdde86efe4ff16ea6"],["C:/ablog/hexo/public/message/index.html","505d21634d116d7dde09cdc241a36fb3"],["C:/ablog/hexo/public/movies/index.html","c7b498d2b049d3534b3d4604a14268be"],["C:/ablog/hexo/public/music/index.html","7744e4abb0105fdaa08d9080ca439101"],["C:/ablog/hexo/public/page/2/index.html","2005fbbea200c1ead524863e9a97f61f"],["C:/ablog/hexo/public/tags/index.html","aac4b250a3e039a3500402b7387f6de5"]];
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







