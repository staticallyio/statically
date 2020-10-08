---
path: /docs/using-images/
title: "Using Images"
---

Images let you optimize and resize images effortlessly.

## Usage

`/img/:domain/:params/:file`

## Definitions

`:domain` - Domain name of the origin.

`:params` - Filters to controls image.

`:file` - The file URL.

## Cache Control

Image files will be cached on the CDN for 1 year.

## File Size Limit

The limit for the image file size you can load with Images is **20MB**, otherwise an error may appear.

## Supported Image Types

- GIF
- JPEG
- PNG
- WebP

## Parameters

Here is the full list API parameters that can be used for controling images.

### h=:pixel

Set new image height in pixel.

Example:

`/img/static.web.id/h=100/dog.jpg`

![h=100](https://cdn.statically.io/img/static.web.id/h=100/dog.jpg)

### w=:pixel

Set new image width in pixel.

Example:

`/img/static.web.id/w=200/dog.jpg`

![w=200](https://cdn.statically.io/img/static.web.id/h=200/dog.jpg)

### f=auto

Automatically converts image into WebP format when browser supports it.

Example:

`/img/static.web.id/f=auto/dog.jpg`

![f=auto](https://cdn.statically.io/img/static.web.id/f=auto,w=350/dog.jpg)

### q=:percentage

Set new image quality. Default to `85`.

Value: `10 - 100`.

Example:

`/img/static.web.id/q=50/dog.jpg`

![q=85](https://cdn.statically.io/img/static.web.id/q=50,w=350/dog.jpg)
