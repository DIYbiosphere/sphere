---
title: development notes
layout: docs
crumb: none
---

### 2017-12-14
author: @100ideas

#### responsive design targets
- landing
  - logo shrinks to just square image, no text
  - global search box is front & center
  - use grid of 8 collection types as dynamic filter buttons
  - entries list component rendered below

- entries list/filter view
  - left-hand sidebar turns into button cloud
    + in progress
    - turn into narrow stack of colored labels
    - https://semantic-ui.com/elements/label.html#colored-group
    - see `entries.html`
  - use as partial on landing page instead of dedicated page
  - search menu removed in favor of global search in top navbar
  - viewTable component in searchbox is unnecessary
  - pagination goes at bottom

- views using `entry` layout
  + social icons integrated into infobox
  + metadata box floats below main content box, full-width in responsive mode
  + refactor `info-box` partial
    + create ___custom partial___ for better spacing instead of using table
  + `tags` partial fine-tuned



#### code review questions & TODOs
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
  - jekyll throwing warning during build:
  ```
  Regenerating: 1 file(s) changed at 2017-12-15 05:53:28        Deprecation: posts.each should be changed to posts.docs.each.
              Called by ["/Users/100ideas/.local/rbenv/versions/2.3.6/lib/ruby/gems/2.3.0/gems/jekyll-3.6.2/lib/jekyll/collection.rb:39:in `method_missing'"].
  ```
    - may be caused by dependency mismatch; `jekyll-sitemap` insists on installing `jekyll-last-modified-at v0.3.4` but latest is v1.0.1
      - https://github.com/jekyll/jekyll-sitemap/blob/master/jekyll-sitemap.gemspec#L24
      - https://github.com/gjtorikian/jekyll-last-modified-at/issues/41

#### local development setup
  - see guide `docs/tutorials/local-install`
  - `brew install rbenv`
  - `rbenv install 2.3.6`
  - `rbenv global 2.3.6`
  - `gem install bundler`
  - clone repo & enter directory `cd sphere`
  - `bundle`
  - `bundle exec jekyll serve --incremental --profile`

##### deploy
  Still figuring out how this all works; here's what I've got so far:

  - provide TravisCI access to this git repository
    - https://travis-ci.org/auth
    - click toggles to select your sphere repo
  - follow guide for getting github auth token for Travis
    - https://docs.travis-ci.com/user/deployment/pages/
  - change default configs as needed (don't want to commit this back to upstream)
    - I forked the original repo, made a `responsive branch` where I keep my contributions and `responsive-deploy` which holds deploy-specific changes to config files like `_config.yml` (set url & baseurl; disable algolia; delete CNAME file). I work locally in `responsive`, then merge when I want to deploy.
  - to setup gh-pages deployment w/o travisCI etc...:

  ```bash
  # get onto the deploy branches
  git checkout responsive-deploy
  git pull

  # delete remote `gh-pages` branch (only need to do once):
  git push -d origin gh-pages

  # clean _site and remove from .gitignore
  rm -rf _site

  # recreate and add empty dir to git index
  mkdir _site
  git add _site/ && git commit -m "init _site/"

  # fill _site back up;  note --baseurl corresponds to repo index_name
  #   i.e. full site url will be https://100ideas.github.io/sphere/
  jekyll build --verbose --baseurl '/sphere'

  # add the compiled site to git
  git add _site/ && git commit -m "jekyll compile into _site/"

  # now for the magic: push just the subtree in _dist into all of the
  # remote gh-pages branch
  git subtree push --prefix _site origin gh-pages

  # repeat the last 3 commands to redeploy!

  # to unstage:
  git reset _site
  ```
