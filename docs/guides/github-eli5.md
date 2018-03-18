---
layout: docs
title: GitHub ELI5
draft: true
toc: true
---

Don't Panic! The essentials for working on the DIYbiosphere are pretty simple. You could go by without reading this guide and only follow the tutorials. However, understanding a few technicals are very helpful for doing things with more confidence and for building expertise. So let's get to it!

## Why use GitHub in the first place?
The first thing to understand is that the DIYbiosphere project is essentialy a _shared folder_ with a bunch of files inside. GitHub hosts our _shared project folder_, in much the same way you could host it on Dropbox. The main advantage of GitHub, is that it keeps track of changes to these files by using **Git**; an open-source _distributed version control software_. Usually, the software is operated through a _terminal_ but services such as [GitHub](https://github.com) and [GitLab](https://about.gitlab.com/) are _Git clients_ that provide a friendly graphic user interface.

## How does Git work?
A folder managed by Git is called a **repository**, or **repo**. The repo can be stored in your computer (_local repo_), and/or in a server somewhere (_remote repo_). Git maintains a _history log_ in a subfolder (`.git`) where it stores a copy of all the different versions of the files ever made. To record a version of a file, you have to **commit**, i.e. save the changes to Git. You can **compare** changes, and revert them if desired.

Git records the changes by maintaining three _worktrees_:

- The **Working Directory** stores the original files.
- The **Index** or **stage area** saves proposed changes.
- The **HEAD** stores the latest commits you've made.

## How collaboration happens?
With Git you don't need a server since you can use the git repository locally, but if you want to collaborate with others you should use a server to act as the _master_ copy.
When multiple users collaborate on a repo, they all have copies stored locally in their computers.


{% include messages/incomplete.html %}




[15 min to learn git](https://try.github.io/levels/1/challenges/1)
