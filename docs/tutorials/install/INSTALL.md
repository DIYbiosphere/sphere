---
layout: docs
title: Install to Work Locally
permalink: /docs/tutorials/install/
crumb: tutorials
tab: mac
summary: Installation instructions to work with the repository locally according to your operating system, choose yours.
---

{% _include tabs/install-tabs.md %}


##### 1. Open Terminal
Found in /Applications/Utilities/

##### 2. Install command line tools
Copy and paste the following line into the Terminal

```
xcode-select --install
```

A popup window will appear, select install

##### 3. Install [rvm][rvm] with ruby
Copy and paste the following line into the Terminal

```
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```

##### 4. Clone/Fork the repository
Members have permission to clone the repository, non-members will have to fork first and then follow these steps with their forked repository

{% include_relative install-clone.md %}


##### 5. Open the repository root folder
{% include_relative install-open.md %}


 - Desktop: Right click on the repository and
or drag the folder into your terminal (mac users)
 - Terminal:
``` cd \YourFilePath\sphere ```



##### 6. Install dependencies using [Bundler]
Terminal: first install bundler
```
gem install bundler
```
then install dependencies
Terminal:
	```
	bundler install
	```


##### 7. Start [Jekyll](https://jekyllrb.com/)
```
jekyll serve
```
