---
layout: docs
title: Installation Instructions
permalink: /docs/tutorials/install/
summary: This section details how to edit locally on your desktop
---

We recommend you use [GitHub Desktop][github_desktop] as a Git Client; available for MacOS and Windows, and [Atom][atom] as a text editor; available for MacOS, Windows and Linux. See our guides on [using Atom] and [using GitHub Desktop].


{% include _notices/tip.html title="Really download GitHub Desktop and Atom" text="All of our tutorials are using these software programs as well as the recommended plugins for Atom." %}





# Additional Information

## Frontend
The views logic is done using [JQuery](https://jquery.com/).

All the initiatives are stored in a single json file:
[initiatives.json](https://github.com/DIYbiosphere/sphere/blob/gh-pages/js/data/initiatives.json)

The main SCSS content is in the /css folder. and as you can see there are @import
statements that reference other files located in the /\_sass folder. This allows


to have a modular and cleaner design.

> You don't need to do anything to compile sass, Jekyll take's care of that.



[using atom]: /docs/help/tutorials/using-atom/
[using Github Desktop]: docs/help/tutorials/
[file icons]: https://atom.io/packages/file-icons
[pigments]: https://atom.io/packages/pigments
[todo-show]: https://atom.io/packages/todo-show
[atom beautify]: https://atom.io/packages/atom-beautify
[merge-conflicts](https://atom.io/packages/merge-conflicts)
[Markdown-writer for atom]: https://atom.io/packages/markdown-writer
[Markdown TOC]: https://atom.io/packages/markdown-toc
[Language-liquid]: https://atom.io/packages/language-liquid
[Bundler]: http://bundler.io/
