---
path: /docs/using-screenshot/
title: "Using Screenshot"
---

Screenshot allows you to convert a URL into image and PDF.

Check the source code on GitHub https://github.com/staticallyio/screenshot.

## Usage

`https://cdn.statically.io/screenshot/:params/:url`

## Definitions

`:params` Filter to control screenshot image.

`:url` Website to screenshot.

## Cache Control

Every website screenshot image files will be cached on the CDN for 1 month.

## Parameters

### device=mobile

Get a mobile version.

`https://cdn.statically.io/screenshot/device=mobile/:url`

### full=true

Get a full page version.

`https://cdn.statically.io/screenshot/full=true/:url`

### pdf (path)

Getting PDF version.

`https://cdn.statically.io/screenshot/pdf/:url`

### Combine params

Params can be combined using commas and after /screenshot/ path.

`https://cdn.statically.io/screenshot/device=mobile,full=true/:url`

## Live Demo

`https://cdn.statically.io/screenshot/dev.to`

![Screenshot](https://cdn.statically.io/screenshot/dev.to)

`https://cdn.statically.io/screenshot/device=mobile/dev.to`

![Screenshot (mobile)](https://cdn.statically.io/screenshot/device=mobile/dev.to)
