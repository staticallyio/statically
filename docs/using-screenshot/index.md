---
path: /docs/using-screenshot/
title: "Using Screenshot"
---

Screenshot allows you to convert a URL into image and PDF.

Check the source code on GitHub https://github.com/staticallyio/screenshot.

## Usage

`/screenshot/:params/:url`

## Definitions

`:params` Filter to control screenshot image.

`:url` Website to screenshot.

## Cache Control

Every website screenshot image files will be cached on the CDN for 1 month.

## Parameters

### full=true

Get a full page version.

`/screenshot/full=true/:url`

### mobile (path)

Get a mobile version.

`/screenshot/mobile/:url`

### pdf (path)

Getting PDF version.

`/screenshot/pdf/:url`

## Live Demo

`/screenshot/dev.to`

![Screenshot](https://cdn.statically.io/screenshot/dev.to)

`/screenshot/mobile/dev.to`

![Screenshot (mobile)](https://cdn.statically.io/screenshot/mobile/dev.to)
