---
layout: docs
title: Contributing Guide
permalink: /docs/guides/contributing
draft: true
---

Thank you for considering contributing to DIYbiosphere! The project depends on the participation of the DIYbio community.

There are many ways you can contribute, from adding and editing entries, writing tutorials, improving the documentation, submitting bug and broken link reports, feature requests or writing code to better the website. You _can_ submit questions as issues, but please consider first posing your question in [Gitter](https://gitter.im/DIYbiosphere/sphere?utm_source=share-link&utm_medium=link&utm_campaign=share-link) or [Slack](https://diybiosphere.slack.com) ([request invite](https://diybiosphere.herokuapp.com)), where you can also directly message other contributors.

## Ground Rules
By contributing, you agree to abide to our [Code of Conduct](http://sphere.diybio.org/about/code-of-conduct) (COC) and consent to our [Contributor Terms](http://sphere.diybio.org/about/contributor-terms) (CT) set by our [Terms of Use](http://sphere.diybio.org/about/terms-of-use) (_aka_ Copyright).

> TL;DR (Too Long; Didn't Read)
> - COC: Be kind and respectful. Gross, rude or inappropriate behavior will not be tolerated. Confront wrongdoers directly or report them to the [board of directors](http://sphere.diybio.org/about/community).
> - CT: You freely share your contributions to the Repository under the [MIT license](https://opensource.org/licenses/MIT). If your contributions are displayed in the website, you freely waive authorship rights of these contributions (public domain; [CC0](https://creativecommons.org/publicdomain/zero/1.0/)), otherwise you will specify their copyright. You will also note contributions on behalf of third parties and specify their copyright.

## Getting Started
All you need is a GitHub account ([sign up](https://github.com/join)). You also need to know some programming syntax, depending whether you contribute to the entries, documentation, or the software.


## Your First Contribution
For writing entries you can just follow our tutorials for [adding](http://sphere.diybio.org/docs/tutorials/add-entry/users) or [editing](http://sphere.diybio.org/docs/tutorials/edit-entry/users) entries. If you are a member, you have _write_ access to the 'master' branch and can edit directly. Ask to join by [submitting an issue](https://github.com/DIYbiosphere/sphere/issues/new) requesting membership.

If you are planning on making many changes to different files consider doing them all at once in your own _fork_, _branch_ or in the 'writing-entries' branch before submitting a pull request. Alternatively, look at how you can [contribute like a pro](#contribute-like-a-pro) by working locally in your computer.

## Contributing Like a Pro
Although you can make changes to files in GitHub, it is much more easy, convenient, and powerful to do work on your computer locally. Follow our [tutorial for installing](http://sphere.diybio.org/docs/tutorials/local-install/macos) everything you need.

## Submitting Issues and Pull Requests
If you are submitting an issue or a pull request a template will automatically appear in the description text. Read it and follow the instructions there before deleting the text in the template and adding your own text.


## Code Review Process
Members of the DIYbiophere organization have permission to merge all pull requests and directly write into the 'master' branch. All code has to pass Travis build process (check it here).

### Merging
All PRs must pass the Travis check or else merging is not possible (admins can force a merge). Check the Travis log to check for any errors on the build. Make changes, and commit them to your PR until the check passes. If you are unsure what the problem is, don't hesitate to ask the community for help!

## Push to Website
The website is rendered from the 'gh-pages' branch. Commits to the 'master' branch will trigger Travis to:
1. build the website using jekyll
2. push entries to the Algolia index (the search API)
3. push rendered `_site` folder to 'gh-pages' branch

You can observe the builds [here]. They can take up to 10 minutes, so be patient. You won't be able to observe changes in the website until the push to 'gh-pages' is successful. Even then, it might take a few minutes to show. :unamused:

## Conventions on Commit Messages
Good commits speed the reviewing process and facilitate tracking past changes. If you are making many changes that are unrelated, or your commit title has the word 'and', split the commits! Please follow these guidelines for your commit messages:

1. **Title**: Describe the change and why it was necessary. Use imperative (like 'Add' not 'Added'), Capitalize first letter, don't end with period, and limit to 50 characters.
2. **Comments**: Describe in further detail _why_ the change was made and _how_. If addressing an Issue link to it!
