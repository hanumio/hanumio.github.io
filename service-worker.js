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

var precacheConfig = [["C:/ablog/hexo/public/2020/01/09/2010ACM大赛题目（C语言）/index.html","580d02c8d4e7c0702f51ab7e0eef4b50"],["C:/ablog/hexo/public/2020/01/09/C 语言的布尔类型(true 与 false)/index.html","df60e857010091fb6d57f39ac42a07c8"],["C:/ablog/hexo/public/2020/01/09/Linux vi命令详解/index.html","66aa58254d3a22f9336267735df1731c"],["C:/ablog/hexo/public/2020/01/09/Onedrive使用/index.html","f07d47d204ef94d5ba93676da53feabf"],["C:/ablog/hexo/public/2020/01/09/centos查看端口开放情况及如何开放/index.html","7a5a62ea7185e259f9c53000e04384cb"],["C:/ablog/hexo/public/2020/01/09/while(scanf(%d,&n),n)，while(scanf(%d,&n)！=EOF)，while(scanf(%d,&n)==1)和while(~scanf(%d,&n)）/index.html","38101ef71d1fa5097bb5f719a875695c"],["C:/ablog/hexo/public/2020/01/09/《曾鸣智能商业20讲》/index.html","8b6c516a10707b56ce1722f3ce150cc8"],["C:/ablog/hexo/public/2020/01/09/【Linux安全设置】修改ROOT密码&修改SSH默认登录端口教程/index.html","d134742fa8e40f8ef465fa8041de21bd"],["C:/ablog/hexo/public/2020/01/09/为 Typecho 评论框加入七彩打字动画/index.html","9806243ea11d05d1504112c90542823d"],["C:/ablog/hexo/public/2020/01/09/如何在linux下创建一个可运行脚本？/index.html","1f999295fe0396a687f2075adfbe35c7"],["C:/ablog/hexo/public/2020/01/09/宝塔面板安装ZFAKA/index.html","f02e6f20f9a2952e40df200b9f7921d3"],["C:/ablog/hexo/public/2020/01/09/宝塔面板安装命令/index.html","5650c9a6d17ea52b6536345b01ba5ba7"],["C:/ablog/hexo/public/2020/01/09/进制转换C语言实现（十进制转换为任意进制）/index.html","ed3324514695a1d87a8d4901c71dd023"],["C:/ablog/hexo/public/Gallery/index.html","8322446885f97eb42cd5bd9d2c18b841"],["C:/ablog/hexo/public/about/index.html","de37ee712d728c67fd8b73d6edb40b5d"],["C:/ablog/hexo/public/archives/2020/01/index.html","cf5ed5f8e8ac3b32ea1e9897e97e66c2"],["C:/ablog/hexo/public/archives/2020/01/page/2/index.html","1d488bf2d8b01b81a9893996be1871bb"],["C:/ablog/hexo/public/archives/2020/index.html","c2bba0c4bef33e508bc6b716399e8b1a"],["C:/ablog/hexo/public/archives/2020/page/2/index.html","203edfe58949e14d750f12fa6a179193"],["C:/ablog/hexo/public/archives/index.html","4bb317cbf291fda575755f519defd873"],["C:/ablog/hexo/public/archives/page/2/index.html","6c6961384d95383226fc9db9fa8f1f1f"],["C:/ablog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/ablog/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/ablog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/ablog/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/ablog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/ablog/hexo/public/categories/index.html","e8144ed975e139b0b7084a790bb80a93"],["C:/ablog/hexo/public/css/index.css","54016f0236bce7f339ec24f2000c9557"],["C:/ablog/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/ablog/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/ablog/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/ablog/hexo/public/img/avatar.png","4605042f3c7c7a0d028eda9d89addc79"],["C:/ablog/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/ablog/hexo/public/img/favicon.jpg","e953a549f3a1e63fa29b6e6996079810"],["C:/ablog/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/ablog/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/ablog/hexo/public/img/loading.gif","a850e5f72c4f42bb5d36135b8ee20b95"],["C:/ablog/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/ablog/hexo/public/index.html","b072b878a49da91c183a80002ee3addd"],["C:/ablog/hexo/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/ablog/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/ablog/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/ablog/hexo/public/link/index.html","20c53acc335db67deab8453ce7beb8af"],["C:/ablog/hexo/public/message/index.html","c76de6661102f752839ee5ec345a78a2"],["C:/ablog/hexo/public/movies/index.html","955656ccaa86cdae8c9ba932923091b6"],["C:/ablog/hexo/public/music/index.html","5fe918c31d88337608208fda92159645"],["C:/ablog/hexo/public/page/2/index.html","c9398e3ac6914422fbb127b579981fb9"],["C:/ablog/hexo/public/tags/index.html","095acb10a0d92b9aa524adf96969f02a"]];
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







