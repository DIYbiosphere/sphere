---
title: development notes
layout: docs
crumb: none
---

### 2017-12-14

**responsive design targets**
- landing
  - logo shrinks to just square image, no text
  - global search box is front & center
  - use grid of 8 collection types as dynamic filter buttons
  - entries list component rendered below

- entries list/filter view
  - use as partial on landing page instead of dedicated page
  - search menu removed in favor of global search in top navbar
  - viewTable component in searchbox is unnecessary
  - pagination goes at bottom
  - left-hand sidebar turns into button cloud above footer

- views using `entry` layout
  - social icons float above main content box
  - metadata box floats below main content box, full-width


  **code review questions & TODOs**
  - replace remotely-hosted resources with local copies
    - regex: ```\<(script|link).*(src|href)=\"http.*\>```
    - `_layouts/default.html` js script src
    - `_includes/head.html` js script src, css, & fonts
  - **prune/hide unused components**:
  - is npm/node used? what's up package.json?
  - semantic includes flag icons, so why do we also include lafeber/world-flags-sprite  (css/vendor/flags-16)?
  - `_includes/tabs.html`, `_includes/contentMenu.html` tabular elements used for entry views
    - i.e. `projects/RealVeganCheese/RealVeganCheese`
    - only used in `_layouts`: docs, entry, entry-example, page?


  **setup local development**
  - see guide `docs/tutorials/local-install`
  - `brew install rbenv`
  - `rbenv install 2.3.6`
  - `rbenv global 2.3.6`
  - `gem install jekyll bundler`
  - `bundle install`
  - `jekyll serve`
