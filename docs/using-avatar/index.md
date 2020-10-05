---
path: /docs/using-avatar/
title: "Using Avatar"
---

With Avatar, you can easily generate beautiful avatar images.

Check the source code on GitHub https://github.com/staticallyio/avatar.

## Usage

`https://cdn.statically.io/avatar/:params/:text`

## Definitions

`:params` Parameters to control favicon image.

`:text` The first two characters of text that will be generate to image.

## Cache Control

Image files will be cached on the CDN for 1 year.

## Parameters

### s=:size

Change image size. Default to `60`.

`https://cdn.statically.io/avatar/s=:pixel/:text`

### shape=circle

Use circle shape.

`https://cdn.statically.io/avatar/shape=circle/:text`

### shape=rounded

Use rounded shape.

`https://cdn.statically.io/avatar/shape=rounded/:text`

## Live demo

`https://cdn.statically.io/avatar/foo`

![avatar](https://cdn.statically.io/avatar/foo)

`https://cdn.statically.io/avatar/shape=circle/bar`

![avatar (circle)](https://cdn.statically.io/avatar/shape=circle/bar)

`https://cdn.statically.io/avatar/shape=rounded/you`

![avatar (rounded)](https://cdn.statically.io/avatar/shape=rounded/you)
