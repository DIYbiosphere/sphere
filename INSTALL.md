---
layout: docs
title: Installation Instructions
permalink: /docs/help/tutorials/install/
---

_This section details how to edit locally on your desktop._

We recommend you use [GitHub Desktop][github_desktop] as a Git Client; available for MacOS and Windows, and [Atom][atom] as a text editor; available for MacOS, Windows and Linux. See our guides on [using Atom] and [using GitHub Desktop].

{% include _notices/note.html title="Recommended software is really recommendable" text="To simplify things, all of our tutorials are with our recommended software and packages" %}

Some of these steps require that you use a Terminal, which is a direct line (a command line) with your computer. If you are a first-time user, don't be intimidated, it is as easy as copy-paste!

1. Install [ruby](https://www.ruby-lang.org/en/documentation/installation/) and (MacOS users can skip this step.

  2.1 Install mpapis public key
  ```
  gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
  ```


3. Install rvm
[rvm](https://rvm.io/rvm/install) installed
  2.2 Install RVM stable with ruby:
  ```
  \curl -sSL https://get.rvm.io | bash -s stable --ruby
```

4. Clone the repository
  - GitHub: click clone repository to GitHub Desktop
  - Desktop: click `+` and select clone. sign in and look for the repository. if yiu are a member you have write access to it. if not, yiu will have to fork it.
Go to the repository and click clone on GitHub Desktop.
  - Terminal:
```
git clone https://github.com/DIYbiosphere/sphere.git
```

5. Open the repository root folder
 - Desktop: Right click on the repository and
or drag the folder into your terminal (mac users)
 - Terminal:
``` cd \YourFilePath\sphere ```


5. Install dependencies using [Bundler]
Terminal: first install bundler
```
gem install bundler
```
then install dependencies
Terminal:
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
[initiatives.json](https://github.com/DIYbiosphere/sphere/blob/gh-pages/js/data/initiatives.json)

The main SCSS content is in the /css folder. and as you can see there are @import
statements that reference other files located in the /\_sass folder. This allows


to have a modular and cleaner design.

> You don't need to do anything to compile sass, Jekyll take's care of that.


## Continuous Integration
The project is integrated with [Travis-CI](https://travis-ci.org/), so every
time someone pushes to the master branch of the
[repository](https://github.com/DIYbiosphere/sphere),
[Travis](https://travis-ci.org/) builds the site using Jekyll and push it to the
[gh-pages](https://github.com/DIYbiosphere/sphere/tree/gh-pages) branch.

---

### Mac users
1. Install all the command line tools
	- Copy the following command line
	- Paste in your terminal
```
xcode-select — install
```
	- A popup window will appear, select install. And you are done
2.Install dependencies using bundler


> Draft


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
