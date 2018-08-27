---
layout: page
title: Network
description: Running on 153+ data centers around the world.
promo: true
permalink: /network
published: true
---

## Running on {{site.staticaly.datacenter_num}}+ around The Globe

> Welcome to the Staticaly Network, learn more about networking

**Staticaly is a Free, Reliable and Open Source CDN Library with Advanced features** so you can load your project more easier. Staticaly also allow you to serves raw files from [Supported Providers](#supported-providers) with **Super Fast Global Content Delivery Network provided by CloudFlare**.

Yes, Staticaly comes with modern technology, **Supports http2.0/http/https**.

![Network Map](/static/images/features/network_152.png)

## Statistics Usage

<p class="lead">Wondering about Staticaly data? Visit <a href="/stats">Our Statistics page</a></p>

## Supported Providers

<p class="lead">Staticaly can proxy <strong>raw files</strong> from these providers and make it more faster</p>

**GitHub \| GitLab \| BitBucket**

## Cache

There are two versions of Staticaly: **Production and Development**. Below you will learn how to use Staticaly as a Production CDN and Development CDN.

*   **Production CDN**

    By default on Staticaly main CDN (**cdn.staticaly.com**), files cache are set to **1 year** via `Cache-Control` header for every **Branch**, because Staticaly only support for production environment. But if you want to use Staticaly as a **Development CDN** you can add query string `?env=dev` for domain **cdn.staticaly.com**, you can learn more at Development CDN section below.

    The CDN caches files based on their permanent URL. CDN will ignore query string like `?ver=1234` and if query string provided, it will be fallback to the main files.

    *   Example: `https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js`

    *   And if query string like `?ver=1234` is set to `https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js?ver=1234`, the CDN will give you content from `https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js`.

*   **Development CDN** `?env=dev`

    You can use Staticaly as a Development CDN, it means Staticaly CDN will cache files only for **24 hour**. Development CDN will works when you set up `?env=dev` query string on the URL.

    *   Example: `https://cdn.staticaly.com/jquery/jquery-dist/master/dist/jquery.min.js?env=dev`
