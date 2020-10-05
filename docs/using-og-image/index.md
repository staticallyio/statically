---
path: /docs/using-og-image/
title: "Using OG Image"
---

OG Image promise you beautiful Open Graph images with ease.

## Usage

`https://cdn.statically.io/og/:params/:text.jpg`

## Definitions

`:params` Parameters to control image.

`:text` Text that will be embed to image.

## Cache Control

Image files will be cached on the CDN for 1 year.

## Parameters

### fontsize=:pixel

Set font size.

`https://cdn.statically.io/og/fontsize=:numeric/:text.jpg`

### theme=dark

Use dark theme.

`https://cdn.statically.io/og/theme=dark/:text.jpg`

### .png

Change file type to PNG.

`https://cdn.statically.io/og/:text.png`

### Combine params using commas

`https://cdn.statically.io/og/theme=dark,fontsize=:pixel/:text.jpg`

## Live demo

`https://cdn.statically.io/og/Hello World.jpg`

![Hello World](https://cdn.statically.io/og/theme=dark/Hello World.jpg)
