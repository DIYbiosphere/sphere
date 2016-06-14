---
layout: docs
title: Install
permalink: /help/tutorials/install/
---

# Local changes




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
statements that reference other files located in the /\_sass folder. This allows

## Atom packages:
- [file icons](https://atom.io/packages/file-icons): Assign file extension icons and colours for improved visual grepping
- [pigments](https://atom.io/packages/pigments): A package to display colors in project and files.
- [todo-show](https://atom.io/packages/todo-show): Finds all the TODOs, FIXMEs, CHANGEDs, etc. in your project.
- [atom beautify](https://atom.io/packages/atom-beautify): Beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, and SQL in Atom
- [merge-conflicts](https://atom.io/packages/merge-conflicts): Resolve git conflicts within Atom
- [Markdown-writer for atom](https://atom.io/packages/markdown-writer): Make Atom a better Markdown editor and an easier static blogging tool.
- [Markdown TOC](https://atom.io/packages/markdown-toc): Generate TOC (table of contents) of headlines from parsed markdown file
- [Language-liquid](https://atom.io/packages/language-liquid):
Fork of the original Liquid language support for Atom.

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
