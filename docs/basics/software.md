---
layout: docs
title: Configuration of the Software
draft: true
toc: true
---

By Software we mean all the code that formats, displays, and builds the text files into webpages.

Mainly, we use _GitHub_ to host the files, _Jekyll_ to build them into a website, and _Netlify_ to continuously build and deploy it. Lastly we use _Algolia Search_ to index and search the entries and documentation.

# GitHub
[GitHub](https://github.com) is a [Git](https://git-scm.com/) hosting service that we use to host the source files (repository) of the project and to keep track of the changes made to them. GitHub offers other useful features:

- User interface: Changes to the repository can be done directly on a web browser. We recommend [Installing] the development environment for a more enjoyable experience. We recommend [Atom](https://atom.io/ ) as a text editor, and [GitHub Desktop] as a Git client.
- Ticketing: we use GitHub Issues to keep track of bugs, questions, feature requests, and pull requests.

The project's repository is named [_sphere_] and it is owned by the [DIYbiosphere organization].

# Jekyll
[Jekyll](https://jekyllrb.com/) is an open-source static site generator written with Ruby. It uses [liquid language].

# Netlify
[Netlify](https://www.netlify.com/) is a continuous deployment service. Every push to `master` triggers Netlify to build the site with Jekyll, push new/changed entries to the Algolia index, and deploy the result - there's no separate `gh-pages` branch involved. Pull requests also get their own preview build, so you can see your changes rendered before merging.

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
