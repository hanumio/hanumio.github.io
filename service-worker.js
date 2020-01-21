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

var precacheConfig = [["C:/ablog/hexo/public/2020/01/09/2010ACM大赛题目（C语言）/index.html","96b9787c3732e2c208a74bc7e88e4bda"],["C:/ablog/hexo/public/2020/01/09/C 语言的布尔类型(true 与 false)/index.html","96bac4431b17dd90ac064025c6335eaf"],["C:/ablog/hexo/public/2020/01/09/Linux vi命令详解/index.html","809f93fcc80bf717a6cb3ba293f5c8e8"],["C:/ablog/hexo/public/2020/01/09/Onedrive使用/index.html","bd9a914645322bdb298d3c9e8ffe9cec"],["C:/ablog/hexo/public/2020/01/09/centos查看端口开放情况及如何开放/index.html","309e1ab3b3b4d090a430e74cc8decf85"],["C:/ablog/hexo/public/2020/01/09/while(scanf(%d,&n),n)，while(scanf(%d,&n)！=EOF)，while(scanf(%d,&n)==1)和while(~scanf(%d,&n)）/index.html","3e60fe47b186f34c711d60d55cce69b0"],["C:/ablog/hexo/public/2020/01/09/《曾鸣智能商业20讲》/index.html","b1affbf17da40a760b6e2ecbf76ba2a4"],["C:/ablog/hexo/public/2020/01/09/【Linux安全设置】修改ROOT密码&修改SSH默认登录端口教程/index.html","55537200b17636dc4890f042f693e470"],["C:/ablog/hexo/public/2020/01/09/为 Typecho 评论框加入七彩打字动画/index.html","a2bd6a6c0dcbad347f43c3c60a097913"],["C:/ablog/hexo/public/2020/01/09/如何在linux下创建一个可运行脚本？/index.html","3aada45ec1fc5df7cd08f0fcccb444fe"],["C:/ablog/hexo/public/2020/01/09/宝塔面板安装ZFAKA/index.html","40579e02b896add46f2aa8401fd259b1"],["C:/ablog/hexo/public/2020/01/09/宝塔面板安装命令/index.html","010b65310ed42225084601117619f1cd"],["C:/ablog/hexo/public/2020/01/09/进制转换C语言实现（十进制转换为任意进制）/index.html","896b8a4b4fa1edcb4384543ca17e83f4"],["C:/ablog/hexo/public/2020/01/20/hello-world/index.html","78206411cf7669a507e06df17698b7d7"],["C:/ablog/hexo/public/about/index.html","b398440e64bc115c9ea9e750589cf9d6"],["C:/ablog/hexo/public/archives/2020/01/index.html","d701d4b5fbbdb9c1a5b03918de5ad887"],["C:/ablog/hexo/public/archives/2020/01/page/2/index.html","e9cd2b3ad752f89e85ff6b889c956cf1"],["C:/ablog/hexo/public/archives/2020/index.html","fe8305eca286a53e6b495caaf5551017"],["C:/ablog/hexo/public/archives/2020/page/2/index.html","09e002dc081ca876b544fce22a5f7fd4"],["C:/ablog/hexo/public/archives/index.html","1b3de11b810386b1381157e7267ff46a"],["C:/ablog/hexo/public/archives/page/2/index.html","edbd5667899d4fe8b8855f1614ba8cd9"],["C:/ablog/hexo/public/categories/index.html","c231609c52fd82114507aa97cc484bcb"],["C:/ablog/hexo/public/css/index.css","54016f0236bce7f339ec24f2000c9557"],["C:/ablog/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/ablog/hexo/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["C:/ablog/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/ablog/hexo/public/img/avatar.png","4605042f3c7c7a0d028eda9d89addc79"],["C:/ablog/hexo/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/ablog/hexo/public/img/favicon.jpg","e953a549f3a1e63fa29b6e6996079810"],["C:/ablog/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/ablog/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/ablog/hexo/public/img/loading.gif","a850e5f72c4f42bb5d36135b8ee20b95"],["C:/ablog/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/ablog/hexo/public/index.html","8b56c6534a9ef38d9f2a5ed4901eb060"],["C:/ablog/hexo/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/ablog/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/ablog/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/ablog/hexo/public/link/index.html","b93c7a3a1efacfca5d17837e391d5e48"],["C:/ablog/hexo/public/page/2/index.html","c53484ef091711af90d1988160fbd5dd"],["C:/ablog/hexo/public/tags/index.html","bd00620b07c102d9c329319fd7f0e96c"]];
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







