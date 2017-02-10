---
layout: docs
permalink: /docs/basics/software/
crumb: basics
title: Basics of the Software
summary: The technology and design behind the Software of the web platform
---

By Software we mean all the source-code that formats, displays, and builds the library into the website. The basic technology

The software used involves Github, to host the files. GitHub pages to build the files into a website using the stating website generator Jekyll. To continuously build the website we use Travis CI.

## GitHub
[GitHub] is a [Git] hosting service that we use to host the repository of the project where the source files of the library are stored and to keep track of the changes made to them. GitHub offers other useful features like providing a user interface, a ticketing service which we use to keep track of Issues and Pull Requests, and GitHub Pages.

The project's repository is named Sphere and it is owned by the DIYbiosphere organization.

### GitHub Pages
[GitHub Pages] is another service of GitHub which hosts static HTML pages and publishes them on the internet. With GitHub Pages we are able to build and host our project's website from the same repository. To build the webpages it natively uses Jekyll as the static page generator.

For our project, the main files are on the master branch, and the static pages are pushed to the gh-pages branch.

## Jekyll
[Jekyll] is an open-source static site generator written with Ruby.

## Travis
[Travis CI] is a continuous integration service that builds and tests software projects hosted at GitHub. We use Travis to buil the DIYbiosphere website before publishing it to GitHub Pages. The main reason for this is to be able to use a multitude of plugins and APIs.


[repository](https://github.com/DIYbiosphere/sphere),
[gh-pages](https://github.com/DIYbiosphere/sphere/tree/gh-pages) branch.

## Algolia
[Algolia] is a web search service platform.
We are currently using the Hacker plan which is free and allows for 10,000 records and 100,000 operations for month. If we were to see a significant demand over this plan, they offer [free plans](https://www.algolia.com/doc/faq/accounts-billing/i-develop-an-open-source-or-not-for-profit-project/) to selected open source and not-for-profit projects.

### Algolia Instantsearch

### Algolia Places

### Algolia DocSearch


## Mapbox
[Mapbox] is a custom online map provider.
