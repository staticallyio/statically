---
path: /docs/using-avatar/
title: "Using Avatar"
---

With Avatar, you can easily generate beautiful avatar images.

Check the source code on GitHub https://github.com/staticallyio/avatar.

## Usage

`/avatar/:params/:text`

## Definitions

`:params` Parameters to control favicon image.

`:text` The first two characters of text that will be generate to image.

## Cache Control

Image files will be cached on the CDN for 1 year.

## Parameters

### s=:size

Change image size. Default to `60`.

`/avatar/s=:pixel/:text`

### shape=circle

Use circle shape.

`/avatar/shape=circle/:text`

### shape=rounded

Use rounded shape.

`/avatar/shape=rounded/:text`

## Live demo

`/avatar/foo`

![avatar](https://cdn.statically.io/avatar/foo)

`/avatar/shape=circle/bar`

![avatar (circle)](https://cdn.statically.io/avatar/shape=circle/bar)

`/avatar/shape=rounded/you`

![avatar (rounded)](https://cdn.statically.io/avatar/shape=rounded/you)
