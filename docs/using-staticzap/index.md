---
path: /docs/using-staticzap/
title: "Using Staticzap"
---

The main goal of this service is to serve open source files quickly.

## Usage

### GitHub

`/gh/:user/:repo/:tag/:file`

### GitLab

`/gl/:user/:repo/:tag/:file`

### Bitbucket

`/bb/:user/:repo/:tag/:file`

## Definitions

`:user` GitHub username

`:repo` Project repository

`:tag` Branch/commit/hash

`:file` File name

## Example

`/gh/mrdoob/three.js/dev/build/three.min.js`

So, in the example above we know that `/gh/` is the CDN, `mrdoop` is `:user`, `three.js` is `:repo`, `dev` is `:tag`, and `build/three.min.js` is `:file`.

## Cache Control

All files will be cached on the CDN for **1 year**, except for these listed **branch** that are cached for only **1 day**:

- main
- master
- dev
- develop
- gh-pages

So, if you are using it in the production environment, we suggest to use commit/hash for `:tag`.

### Lower Cache Control for HTML file

All files that detected as HTML based, will be cached for **1 day**. This includes `.htm`, `.html`, `.shtml`, and `.xhtml` files. We do this for security reason.

## HTML content

If you want to use Staticzap for HTML content, we require you to verify identity, please create a secret Gist with your GitHub account and send the URL via [contact](/contact/). We do this to keep Statically safe.

## File Size Limit

The file size limit is **30MB** and we set the limit on request per individual file. So a single HTTP request can't go above 30MB or else the **413 Payload Too Large** error will appear.

## Supported Services

Staticzap offers support for these listed services:

- [GitHub](https://github.com)
- [GitLab](https://gitlab.com)
- [Bitbucket](https://bitbucket.org)

If you think we need to support more, please [let us know](/contact/).
