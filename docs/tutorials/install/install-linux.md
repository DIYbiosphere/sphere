---
layout: docs
title: Install to Work Locally
permalink: /docs/tutorials/install/linux
tab: linux
summary: Installation instructions to work with the repository locally according to your operating system, choose yours.
---

{% include_relative install-tabs-nav.md %}

1. Install [ruby](https://www.ruby-lang.org/en/documentation/installation/)

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
