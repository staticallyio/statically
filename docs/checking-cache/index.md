---
path: /docs/checking-cache/
title: "Checking Cache"
---

You might wondering if the content you access was already cached on CDN or not. To check cache you can use **curl** command.

`curl -I https://cdn.statically.io/:path_to_content`

You should use **curl** with `-k` if you get `curl: (60) SSL certificate problem` error.

`curl -I -k https://cdn.statically.io/:path_to_content`

## Example

`curl -I https://cdn.statically.io/gh/mrdoob/three.js/dev/build/three.js`

OR

`curl -I -k https://cdn.statically.io/gh/mrdoob/three.js/dev/build/three.js`

```
HTTP/2 200 
access-control-allow-origin: *
access-control-expose-headers: *
accept-ranges: bytes
age: 4
cache-control: public, max-age=86400
content-type: application/javascript; charset=utf-8
date: Sat, 03 Oct 2020 09:10:32 GMT
etag: "f0a5a3cfc241cc1f72d96c77cf1a362535e0fcf95ccb26f6c3d40f30812e99a7"
server: statically
strict-transport-security: max-age=31536000; includeSubDomains; preload
timing-allow-origin: *
vary: Accept-Encoding
x-cache: HIT
x-content-type-options: nosniff
x-served-by: cache-sin18049-SIN
content-length: 1228362
```

`X-Cache: HIT` means that the content has been cached on the CDN. Each CDN usually has a different indicator, please also check `CF-Cache` and `CDN-Cache` if it's listed.
