---
layout: page
title: Network
description: Running on 153+ data centers around the world.
promo: true
permalink: /network
---

## Running on {{site.staticaly.datacenter_num}}+ around The Globe

> Welcome to the Staticaly Network, learn more about networking

**Staticaly is a Free, Reliable and Open Source CDN Library with Advanced features** so you can load your project more easier. Staticaly also allow you to serves raw files from [Supported Providers](#supported-providers) with **Super Fast Global Content Delivery Network provided by CloudFlare**.

Yes, Staticaly comes with modern technology, **Supports http2.0/http/https**.

![Network Map](/static/images/network_152.png)

## Statistics Usage

<p class="lead">Wondering about Staticaly data? Visit <a href="/stats">Our Statistics page</a></p>

## Supported Providers

<p class="lead">Staticaly can proxy <strong>raw files</strong> from these providers and make it more faster</p>

**GitHub \| GitLab \| BitBucket**

## Cache

Staticaly cache behavior terbagi menjadi dua bagian, yaitu **Production** dan **Development** di bawah ini anda akan mempelajari bagaimana menggunakan Staticaly sebagai Production CDN dan Development CDN.

*   **Production CDN**

    By default on Staticaly main CDN (**cdn.staticaly.com**), files cache are set to **1 year** via `Cache-Control` header for every **Branch**, because Staticaly only support for production environment. But if you want to use Staticaly as a **Development CDN** you can add query string `?env=dev` for domain **cdn.staticaly.com**, you can learn more at [Development CDN](#development-cdn) section below.

    The CDN caches files based on their permanent URL. CDN will ignore query string like `?ver=1234` and if query string provided, it will be fallback to the main files.

    *   Example: `https://cdn.staticaly.com/jquery`

    *   And if query string like `?ver=1234` is set to `https://cdn.staticaly.com/jquery?ver=1234`, the CDN will give you content from `https://cdn.staticaly.com/jquery`.

    *   Except for simple versioning for jQuery `https://cdn.staticaly.com/jquery/3.3.1`, in this case you will be retrieve the exact version of jQuery content.

*   **Development CDN** `?env=dev`

    You can use Staticaly as a Development CDN, it means Staticaly CDN will cache files only for **24 hour**. Development CDN will works when you set up `?env=dev` query string on the URL.

    *   Example: `https://cdn.staticaly.com/jquery?env=dev`

*   **Checker**

    For testing purpose only, you may check the Header Response of Staticaly CDN with Header Checker Tools provided by Marsble.

    *   [https://developers.marsble.com/tools/headers](https://tools.marsble.com/headers)
