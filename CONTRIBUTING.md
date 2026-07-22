---
layout: docs
title: Contributing Guide
permalink: /docs/guides/contributing
toc: true
---

Thank you for considering contributing to DIYbiosphere! The project depends on the participation of the DIYbio community.

There are many ways you can contribute, from adding and editing entries, writing tutorials, improving the documentation, submitting bug and broken link reports, feature requests or writing code to better the website. You can submit questions as issues, or reach out to a member directly.

# Ground Rules
By contributing, you agree to abide to our [Code of Conduct](http://sphere.diybio.org/about/code-of-conduct) (COC) and consent to our [Contributor Terms](http://sphere.diybio.org/about/contributor-terms) (CT) set by our [Terms of Use](http://sphere.diybio.org/about/terms-of-use) (_aka_ Copyright).

> TL;DR (Too Long; Didn't Read)
> - COC: Be kind and respectful. Gross, rude or inappropriate behavior will not be tolerated. Confront wrongdoers directly or report them to the [board of directors](http://sphere.diybio.org/about/community).
> - CT: You freely share your contributions to the Repository under the [MIT license](https://opensource.org/licenses/MIT). If your contributions are displayed in the website, you freely waive authorship rights of these contributions (public domain; [CC0](https://creativecommons.org/publicdomain/zero/1.0/)), otherwise you will specify their copyright. You will also note contributions on behalf of third parties and specify their copyright.

# Getting Started
All you need is a GitHub account ([sign up](https://github.com/join)). You also need to know some programming syntax, depending whether you contribute to the entries, documentation, or the software.


# Your First Contribution
For writing entries you can just follow our tutorials for [adding](http://sphere.diybio.org/docs/tutorials/add-entry) or [editing](http://sphere.diybio.org/docs/tutorials/edit-entry) entries.

If you are planning on making many changes to different files consider doing them all at once in your own _fork_, _branch_ before submitting a pull request. Alternatively, look at how you can **contribute like a pro** by working locally in your computer.

# Contributing Like a Pro
Although you can make changes to files in GitHub, it is much more easy, convenient, and powerful to do work on your computer locally. Follow our [tutorial for installing](http://sphere.diybio.org/docs/tutorials/install-locally) everything you need.

# Submitting Issues and Pull Requests
If you are submitting an issue or a pull request a template will automatically appear in the description text. Read it and follow the instructions there before deleting the text in the template and adding your own text.

Labels aren't just for issues - they can be applied to PRs too, to flag things like "critical" or "help wanted." Assigning an issue or PR to someone helps the community know who's already working on it or who to reach out to, though only members and outside collaborators can be assigned.

# Code Review Process
Members of the DIYbiophere organization have permission to merge all _pull requests_ and directly write into the `master` branch.

## Merging
Every PR gets its own Netlify deploy preview build, so you can see your changes rendered before merging. If the preview build fails, check its log for errors, make changes, and commit them to your PR until it passes. If you are unsure what the problem is, don't hesitate to ask the community for help!

# Push to Website
Commits to the `master` branch trigger Netlify to build the website using Jekyll, push entries to the Algolia index (the search API), and deploy the result directly - no separate `gh-pages` branch is involved.

Builds usually take a few minutes, so be patient. You won't be able to observe changes in the website until the build finishes.

# Conventions on Commit Messages
Good commits speed the reviewing process and facilitate tracking past changes. If you are making many changes that are unrelated, or your commit title has the word "and", split the commits! Please follow these guidelines for your commit messages:

1. **Title**: Describe the change and why it was necessary. Use imperative (like 'Add' not 'Added'), Capitalize first letter, don't end with period, and limit to 50 characters.
2. **Comments**: Describe in further detail _why_ the change was made and _how_. If addressing an Issue link to it!
