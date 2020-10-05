---
path: /docs/whitelisting-statically/
title: "Whitelisting Statically"
---

If you are running a firewall on your network, it is possible that Statically cannot work optimally because its getting blocked. Please add the `User-Agent` below to whitelist on your network to allow Statically from accessing your website.

| Service                       | User Agent                    |
| ------------------------------|-------------------------------|
| Staticzap                     | Statically-Staticzap/2.0      |
| Images                        | Statically-Images/2.0         |
| Screenshot                    | Mozilla/5.0 (Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Statically-Screenshot/1.0 (+https:\//statically.io/screenshot/) |
| Screenshot (Mobile)           | Mozilla/5.0 (Linux Android 5.0 SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36 Statically-Screenshot-Mobile/1.0 (+https:\//statically.io/screenshot/) |
| Screenshot (PDF)              | Mozilla/5.0 (Linux Android 5.0 SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36 Statically-Screenshot-PDF/1.0 (+https:\//statically.io/screenshot/) |

If you need IP addresses, please [contact us](/contact/).
