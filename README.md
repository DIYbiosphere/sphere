---
layout: docs
title: Overview of DIYbiosphere
permalink: /docs/introduction/overview/
---

[![Build Status](https://travis-ci.org/DIYbiosphere/sphere.svg?branch=master)](https://travis-ci.org/DIYbiosphere/sphere)
[![License](https://img.shields.io/badge/license-MIT%20%2B%20CC0-lightgrey.svg)](http://sphere.diybio.org/terms-of-use/)
![](https://reposs.herokuapp.com/?path=DIYbiosphere/sphere&color=yellowgreen)
[![Join the chat in Gitter](https://badges.gitter.im/DIYbiosphere/sphere.svg)](https://gitter.im/DIYbiosphere/sphere?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


# ![](http://sphere.diybio.org/assets/img/sphere-long@1x.png)

:tada: Welcome to the DIYbiophere repository :tada:

We really appreciate your interest in our project and we would :heart: your contributions!

## About
The DIYbiosphere is a open-source project to connect Do-It-Yourself Biology (DIYbio) initiatives from all over the world. The goal is to have a shared and common platform that can connect people and ideas in all its possibilities and encourage the DIYbio community to work on a project together.


### How it works
The platform functions similar to a wiki but uses [GitHub Pages](https://pages.github.com) instead; hosting the raw _files_ at https://github.com/DIYbiosphere/sphere and rendering _webpages_ at http://sphere.diybio.org.

Each DIYbio initiative has its own entry which are organized into eight collections: _projects_, _startups_, _labs_, _incubators_, _groups_, _networks_, _events_, and _others_. An entry is added by creating its own folder in its respective collection, and adding a _text file in markdown syntax_ with a _YAML front matter_, which is then rendered into its webpage. For example, the file `_projects/MyDIYbioProject/MyDIYbioProject.md` could look like this:

```yaml
---
# This is the front matter in YAML; between two lines of three consecutive dashes (---)
title: My DIYbio Project
start-date: 2000
type-org: non-profit
website: http://my-diybio-project.io
tags:
  - open hardware
  - citizen science
---
# This is the text in Markdown syntax; after the front matter

My DIYbio project is about **open hardware** and **citizen science**.

```

The _front matter_ includes several `key: value` pairs that render into different elements in the webpage. The `Avocado Lab` is an example entry for pedagogical purposes. You can check out the raw file [raw file](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) rendered into [this webpage](http://sphere.diybio.org/docs/tutorials/AvocadoLab). See the rendered image below, and by its side the different elements of the page labeled.

![](http://sphere.diybio.org/docs/tutorials/AvocadoLab/side-by-side.png)


## Contribute
To contribute, you need a GitHub account ([sign up](https://github.com/join)).

You also need to abide to our [Code of Conduct](http://sphere.diybio.org/about/code-of-conduct) (COC) and consent to our [Contributor Terms](http://sphere.diybio.org/about/contributor-terms) (CT) determined by our [Terms of Use](http://sphere.diybio.org/about/terms-of-use) (_aka_ Copyrights)).

> TL;DR (Too Long; Didn't Read)
> - COC: Be kind and respectful. Gross, rude or inappropriate behavior will not be tolerated. Confront wrongdoers directly or report them to the [board of directors](http://sphere.diybio.org/about/community).
> - CT: You freely share your contributions to the repository under the [MIT license](https://opensource.org/licenses/MIT). If your contributions are displayed in the website, you freely waive authorship rights of these contributions (public domain; [CC0](https://creativecommons.org/publicdomain/zero/1.0/)), otherwise you will specify their copyright. You will also note contributions on behalf of third parties and specify their copyright.


In increasing order of engagement you can contribute to DIYbiosphere by:

- **SHARING THE LOVE**
  - **_Share this project_** with your friends and followers! They might be interested in using the project to find DIYbio initiatives or adding their own. You don't need a GitHub account for this!
  - :star: **_Star the project on GitHub_**! Starring helps attract potential contributors, especially expert and master developers!
- **WRITING ENTRIES**
  - **_[Add](http://sphere.diybio.org/docs/tutorials/add-entry) a new entry_**:  whether it's your initiative or someone else's
  - **_[Edit](http://sphere.diybio.org/docs/tutorials/edit-entry) an existing entry_**: misspellings, outdated information, or just inaccurate, help us keep the entries error-free and up-to-date!
- **PARTICIPATING IN THE ISSUES**
  - **Comment, answer, and vote**: search [our issues](https://github.com/DIYbiosphere/sphere/issues) and see if you can help out by moving our issues along:
  - **Submit a [new issue](https://github.com/DIYbiosphere/sphere/issues/new)**: report a bug, ask a question, share your idea and wait for feedback and support from the community.
  - **Fork, commit, pull request** your contributions! Tackle a [good first issue](https://github.com/DIYbiosphere/sphere/labels/good%20first%20issue) to get you started
- **GETTING INVOLVED**
  - **Join the development community**. The project is managed by members of the [DIYbiosphere community](http://sphere.diybio.org/about/community). Request membership by [submitting an issue](https://github.com/DIYbiosphere/sphere/issues/new) enjoy more access privileges to the project!
  - **Join the conversation**. You can freely join the Gitter chatroom at [gitter.im/diybiosphere/sphere](https://gitter.im/DIYbiosphere/sphere?utm_source=share-link&utm_medium=link&utm_campaign=share-link), or in Slack at [diybiosphere.slack.com](https://diybiosphere.slack.com)

## Copyright
In short: **the work in DIYbiosphere is freely available to use, modify and distribute.** More specifically:

- Files in the **Repository** are available under the [MIT License](https://opensource.org/licenses/MIT)
- Content in the **Website** is shared under the public domain by [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/)

Credit our work as “© DIYbiosphere contributors” or “© DIYbiosphere” with a link to the Repository at: https://github.com/DIYbiosphere/sphere, or the Website at: http://sphere.diybio.org

You can review our [Terms of Use](http://sphere.diybio.org/about/terms-of-use) for a human-readable version of the copyrights, and our [Contributor Terms](http://sphere.diybio.org/about/contributor-terms) to understand in legal terms the rights granted and/or waived from your Contributions. For further detail you should read in full both MIT and CC0 licenses.
