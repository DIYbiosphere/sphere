---
layout: docs
title: Installing Locally
draft: true
toc: true
---

Working locally in your computer makes editing the project very simple and makes previewing changes possible. We recommend downloading [GitHub Desktop](https://desktop.github.com) as a Git client (available for MacOS and Windows), and [Atom](https://atom.io/ ) as a text editor (MacOS, Windows and Linux).

## Installation on MacOS

1. **Install command line tools:**
open a terminal (found in /Applications/Utilities/) and copy/paste the following line into the Terminal
```bash
xcode-select --install
```
A popup window will appear, select 'Install'
2. **Install rvm with ruby:**
copy/paste the following line into the Terminal
```
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```
3. **Install Bundle:**
copy/paste the following line into the Terminal
```
gem install bundler
```
4. **Clone the repository:**
Go to the sphere repository and select 'Clone or download' green button and then select 'Open in Desktop'. It should open GitHub Desktop in your computer. Select a location for the folder

{% include messages/info.html title="Fork first if you are not a member" text="If you are not a member of diybiosphere community, you will have to 'fork' first the repository and then follow these steps with your forked repository." %}

{:start="5"}
5. **Open sphere folder in terminal:**
open GitHub Desktop and make sure the current repository open is the sphere repository or your forked repository. In the top menu, select 'Repository>Open in Terminal'
6. **Install dependencies:**
copy/paste the following line into the Terminal
```
bundler install
```
Once in a while it helps to run `bundler update`
7. **Start server:**
copy/paste the following line into the terminal
```
jekyll serve --incremental
```
This will start a server on your computer which you can preview at the address printed in the terminal after the command runs.
8. **Make changes to the files:**
open GitHub Desktop. In the top menu, select 'Repository>Open in Atom'. Anytime you make changes to the files and save them. the jekyll server will rebuild the file.
{% include messages/exclamation.html title="Make changes to a branch" text="If you are making many changes, consider creating a new branch or adding to an existing one" %}

## Installation on Windows
{% include messages/incomplete.html %}

## Installation on Linux
{% include messages/incomplete.html %}
