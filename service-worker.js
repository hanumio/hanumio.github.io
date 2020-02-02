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

var precacheConfig = [["C:/ablog/hexo/public/2010ACM大赛题目（C语言）.html","75dd0611a893135ca78c299c7ad77f6d"],["C:/ablog/hexo/public/C 语言的布尔类型(true 与 false).html","aac5c819b5b45c84525c6b624d59e20e"],["C:/ablog/hexo/public/Gallery/index.html","5deb1865abffcc134c3cb469c45ce1f2"],["C:/ablog/hexo/public/Linux vi命令详解.html","7cf7631bfa7278748796007eb1054931"],["C:/ablog/hexo/public/Onedrive使用.html","23932cd509dcd3915d7efca3cbff6bc7"],["C:/ablog/hexo/public/about/index.html","0311b1fb336d3b88bfa0a94e9354f99e"],["C:/ablog/hexo/public/archives/2020/01/index.html","0cdddb527ae91957dbdccb59290719ab"],["C:/ablog/hexo/public/archives/2020/01/page/2/index.html","c949de0931091129895dfa372066037f"],["C:/ablog/hexo/public/archives/2020/index.html","4fe1e64baabe2dba137231679d5d5bfc"],["C:/ablog/hexo/public/archives/2020/page/2/index.html","8112661c207cee8400584860b06b327c"],["C:/ablog/hexo/public/archives/index.html","292629c974ed356b8619f1c9e464c02b"],["C:/ablog/hexo/public/archives/page/2/index.html","20783aa766ebf73922227c2a3221b839"],["C:/ablog/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/ablog/hexo/public/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["C:/ablog/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/ablog/hexo/public/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["C:/ablog/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/ablog/hexo/public/categories/index.html","e258053de477f78949a815cb6a86165a"],["C:/ablog/hexo/public/centos查看端口开放情况及如何开放.html","87d9b12475c313ec28db88c23e98c91e"],["C:/ablog/hexo/public/css/index.css","54016f0236bce7f339ec24f2000c9557"],["C:/ablog/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/ablog/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/ablog/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/ablog/hexo/public/img/avatar.png","4605042f3c7c7a0d028eda9d89addc79"],["C:/ablog/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/ablog/hexo/public/img/favicon.jpg","e953a549f3a1e63fa29b6e6996079810"],["C:/ablog/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/ablog/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/ablog/hexo/public/img/loading.gif","a850e5f72c4f42bb5d36135b8ee20b95"],["C:/ablog/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/ablog/hexo/public/index.html","ee3a037bd168f213dd4292d053d8a902"],["C:/ablog/hexo/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/ablog/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/ablog/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/ablog/hexo/public/link/index.html","e3cb26003b26bf88c5a3c0ed48f0aeac"],["C:/ablog/hexo/public/message/index.html","872e231dd4339adf18730a0ec26192e1"],["C:/ablog/hexo/public/movies/index.html","ec515fccad38af3733a39fe98c5cdc62"],["C:/ablog/hexo/public/music/index.html","604bb7117f833def200e90f9f238cd65"],["C:/ablog/hexo/public/page/2/index.html","a2f46baa81fe5060a42792c87a0c4df5"],["C:/ablog/hexo/public/tags/index.html","321097b9db1512f9c310cdf79ab6e8a3"],["C:/ablog/hexo/public/while(scanf(%d,&n),n)，while(scanf(%d,&n)！=EOF)，while(scanf(%d,&n)==1)和while(~scanf(%d,&n)）.html","7768ad975f3ebe43817d20e5626ea868"],["C:/ablog/hexo/public/《曾鸣智能商业20讲》.html","6fd4a4830f143a6a838761f25c493136"],["C:/ablog/hexo/public/【Linux安全设置】修改ROOT密码&修改SSH默认登录端口教程.html","9f2ac69b0ad3368c304f7688042a3f39"],["C:/ablog/hexo/public/为 Typecho 评论框加入七彩打字动画.html","69ac46f1e835d2f67bcce666306b211f"],["C:/ablog/hexo/public/如何在linux下创建一个可运行脚本？.html","6b56824a8849648381647046085a0d4b"],["C:/ablog/hexo/public/宝塔面板安装ZFAKA.html","6bc39bdb2484d564f278ff0b9a3ecb6f"],["C:/ablog/hexo/public/宝塔面板安装命令.html","33bdb8e209ef6f61ec92e0f20128f345"],["C:/ablog/hexo/public/进制转换C语言实现（十进制转换为任意进制）.html","38c25e9aeb3d9c7c080de6cf54397419"]];
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







