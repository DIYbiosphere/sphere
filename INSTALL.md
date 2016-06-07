---
layout: docs
title: Install
permalink: /install/
---

Clone the repo from [Github](https://github.com/)
```
git clone https://github.com/DIYbiosphere/sphere.dir.git
```

1. Make sure you have [ruby](https://www.ruby-lang.org/en/documentation/installation/) and [rvm](https://rvm.io/rvm/install) installed (if you have OS X you already have ruby)

  2.1 Install mpapis public key
  ```
  gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
  ```

  2.2 Install RVM stable with ruby:
  ```
  \curl -sSL https://get.rvm.io | bash -s stable --ruby
  ```

2. Install dependencies using [Bundler](http://bundler.io/)

  2.1 Install Bundler
  ```
  gem install bundler
  ```

  2.2 Install dependencies
  ```
  bundler install
  ```

3. Start [Jekyll](https://jekyllrb.com/)
```
jekyll serve
```

# Additional Information

## Frontend
The views logic is done using [JQuery](https://jquery.com/).

All the initiatives are stored in a single json file:
[initiatives.json](https://github.com/DIYbiosphere/sphere.dir/blob/gh-pages/js/data/initiatives.json)

The main SCSS content is in the /css folder. and as you can see there are @import
statements that reference other files located in the /_sass folder. This allows
to have a modular and cleaner design.

> You don't need to do anything to compile sass, Jekyll take's care of that.

## Continuous Integration
The project is integrated with [Travis-CI](https://travis-ci.org/), so every
time someone pushes to the master branch of the
[repository](https://github.com/DIYbiosphere/sphere.dir),
[Travis](https://travis-ci.org/) builds the site using Jekyll and push it to the
[gh-pages](https://github.com/DIYbiosphere/sphere.dir/tree/gh-pages) branch.

--------------------

Thank you and have fun!
