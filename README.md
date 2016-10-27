# nxfc_karma

An ubuntu based image to run karma tests through drone using PhantomJS.

## Why

We're using [alpine-node](https://github.com/mhart/alpine-node) as a base for 
our production containers, it really doesn't make sense to try to install a 
browser in on and we don't have to.

## Usage

In your drone.yml

```
build:
  main:
    image: newcrossfoodcoop/nxfc_base:v4.5.2
    commands:
      - npm install
      - node_modules/.bin/gulp build
      - node_modules/.bin/gulp drone:test
  karma:
    image: newcrossfoodcoop/nxfc_karma:latest
    commands:
      - gulp karma --conf /drone/src/karma.conf.js
```
