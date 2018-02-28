---
layout: docs
title: Configuration of the Software
draft: true
toc: true
---

By Software we mean all the code that formats, displays, and builds the text files into webpages.

Mainly, we use _Github_, to host the files, _GitHub Pages_ to build the files into a website which uses _Jekyll_, a static website generator. To continuously build the website, and to use unsupported plugins we use _Travis CI_. Lastly we use _Algolia Search_ to index and search the entries and documentation.

# GitHub
[GitHub](https://github.com) is a [Git](https://git-scm.com/) hosting service that we use to host the source files (repository) of the project and to keep track of the changes made to them. GitHub offers other useful features:

- User interface: Changes to the repository can be done directly on a web browser. We recommend [Installing] the development environment for a more enjoyable experience. We recommend [Atom](https://atom.io/ ) as a text editor, and [GitHub Desktop] as a Git client.
- Ticketing: we use GitHub Issues to keep track of bugs, questions, feature requests, and pull requests.
- Comments:

The project's repository is named [_sphere_] and it is owned by the [DIYbiosphere organization].

# GitHub Pages
[GitHub Pages] is another service of GitHub which hosts static HTML pages and publishes them on the internet. With GitHub Pages we are able to build and host our project's website from the same repository. To build the webpages it natively uses [Jekyll](https://jekyllrb.com/) as the static page generator.

For our project, the main files are on the [master branch], and the static pages are pushed to the [gh-pages branch].

# Jekyll
[Jekyll](https://jekyllrb.com/) is an open-source static site generator written with Ruby. It uses [liquid language].

# Travis CI
[Travis CI](https://www.travis-ci.org) is a continuous integration service that builds and tests software projects hosted at GitHub. We use Travis to buil the DIYbiosphere website before publishing it to GitHub Pages. The main reason for this is to be able to use a multitude of plugins and APIs.


[repository](https://github.com/DIYbiosphere/sphere),
[gh-pages](https://github.com/DIYbiosphere/sphere/tree/gh-pages) branch.

# Algolia
[Algolia](https://www.algolia.com/) is a web search service platform.
We are currently using the Hacker plan which is free and allows for 10,000 records and 100,000 operations for month. If we were to see a significant demand over this plan, they offer [free plans](https://www.algolia.com/doc/faq/accounts-billing/i-develop-an-open-source-or-not-for-profit-project/) to selected open source and not-for-profit projects.

## Algolia AutoComplete
{% include messages/incomplete.html %}
## Algolia Instantsearch
{% include messages/incomplete.html %}

## Algolia DocSearch
{% include messages/incomplete.html %}


## Plugins
{% include messages/incomplete.html %}
