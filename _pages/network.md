---
layout: page
title: Network
description: Running on Multiple CDN like {{site.staticaly.main_cdn}} around The Globe.
promo: true
permalink: /network
published: true
---

## Staticaly is Running on Multiple CDN like {{site.staticaly.main_cdn}} around The Globe

![Network Map](/static/images/features/staticaly_net.png)

{{site.data.about.staticaly}}

## Performance

Yes, Staticaly comes with modern technology, **Supports http2.0/http/https** and for Content-Encoding, we use **Brotli**.

## Statistics Usage

Wondering about Staticaly data? Visit [Our Statistics page](/stats)

## Supported Providers

Staticaly can proxy **raw files** with proper Content-Type headers from these providers and make it more faster.

**GitHub \| GitLab \| BitBucket**

## Cache

There are two versions of Staticaly: **Production and Development**. Below you will learn how to use Staticaly as a Production CDN and Development CDN.

*   **Production CDN**

    By default, Staticaly main CDN (**cdn.staticaly.com**), cache are set to **1 year** via `Cache-Control` header for every files except on the **master** branch, we set cache for **master** branch **for an hour** so new changes you push to GitHub will be reflected within minutes.

    But if you want to use Staticaly as a **Development CDN** you can add query string `?env=dev` for domain **cdn.staticaly.com** to tell CDN to not cache your files, you can learn more at Development CDN section below.

    The CDN caches files based on their permanent URL.

    Example:

    * [https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js](https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js)
    * [https://img.staticaly.com/i.imgur.com/9usQKZg.jpg](https://img.staticaly.com/i.imgur.com/9usQKZg.jpg)

*   **Development CDN** `?env=dev`

    You can use Staticaly as a Development CDN, it means Staticaly CDN will not cache files, new changes you push to GitHub will be reflected within seconds. Development CDN will works when you set up `?env=dev` query string on the URL.

    Example:

    * [https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js?env=dev](https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js?env=dev)

## Uptime

We keep users away from all downtime, for that we use Cedexis as our smart load balancing, when Cedexis works, he will check the healthiest CDN and provide it for you.
