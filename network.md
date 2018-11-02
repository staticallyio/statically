Staticaly is Dedicated to Running on Multi CDN like CloudFlare, Fastly, and CDN77 and BunnyCDN
------------------

![Network Map](https://www.staticaly.com/static/images/features/staticaly_net.png)

About Staticaly
---------------

Learn more about Staticaly on [about page](https://www.staticaly.com/about).

Performance
-----------

Yes, Staticaly comes with modern technologies, don't worry, we got all setup, our platform is fully compitable with **http2.0 and https**, we use **Brotli** if your browser is accept it, and we serves your request from nearest datacenter.

Locations
---------

We have **We have 10 strategically located data centers + 4 CDN providers** that help us improve the platform performance.

Statistics Usage
----------------

Wondering about Staticaly stats? Visit [Our Statistics page](https://www.staticaly.com/stats)

Supported Providers
-------------------

Staticaly can serves **raw files** with proper Content-Type headers and make it more fast for you from these providers:

**GitHub \| GitLab \| BitBucket**

You may interested in our other features, please [learn more here](https://www.staticaly.com/about).

## Cache Behavior

There are two versions of Staticaly: **Production and Development**. Below you will learn how to use Staticaly as a Production CDN and Development CDN.

*   **Production CDN**

    By default, Staticaly Raw Files CDN cache are set to **1 year** via `Cache-Control` header for every files except on the **master** branch, we set cache for **master** branch **for 24 hours** so new changes you push to GitHub will be reflected within this time.

    But if you want to use Staticaly as a **Development CDN** you can add query string `?env=dev` to tell CDN to not cache your files, you can learn more at Development CDN section below.

    The CDN caches files based on their permanent URL.

    Example:

    * GitHub [https://cdn.staticaly.com/gh/jquery/jquery-dist/master/dist/jquery.min.js](https://cdn.staticaly.com/gh/jquery/jquery-dist/master/dist/jquery.min.js)
    * Imgpx [https://cdn.staticaly.com/img/i.imgur.com/9usQKZg.jpg](https://cdn.staticaly.com/img/i.imgur.com/9usQKZg.jpg)

*   **Development CDN** `?env=dev`

    You can use Staticaly as a Development CDN, it means Staticaly CDN will not cache files, new changes you push to GitHub will be reflected within seconds. Development CDN will works when you set up `?env=dev` query string on the URL.

    Example:

    * [https://cdn.staticaly.com/gh/jquery/jquery-dist/master/dist/jquery.min.js?env=dev](https://cdn.staticaly.com/gh/jquery/jquery-dist/master/dist/jquery.min.js?env=dev)

## Uptime

We keep users away from all downtime, we apply failover to each of our systems, for more information about Network Status, please check it in our [Status Page](https://status.marsble.com).
