---
title: development notes
layout: docs
crumb: none
---

### 2017-12-14

**code review**
- replace remotely-hosted resources with local copies
  - regex: ```\<(script|link).*(src|href)=\"http.*\>```
  - `_layouts/default.html` js script src
  - `_includes/head.html` js script src, css, & fonts
- is npm/node used? what's up package.json?

**local development**
- see guide
- `gem install jekyll bundler`
- `bundle install`
- `jekyll serve`
