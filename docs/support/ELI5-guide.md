---
layout: docs
permalink: /docs/support/eli5/
title: Explain Like I'm 5 (ELI5) Guide
summary: A super-simple/101/beginner/crash-course/for-dummies guide to help out the utterly confused
---

The best way to introduce the basic terms and concepts to work with the DIYbiosphere project is to explain why it uses GitHub in the first place and then explain why it uses GitHub Pages.


## Why use GitHub
The DIYbiosphere project is essentialy a _shared folder_ with a bunch of files inside. Sharing a collection of files among multiple users, presents a technical problem. How can users collaborate simultaneously on the same files without overwriting each others changes or locking the files from being edited by others?

### Using Git
The DIYbiosphere project uses {% svgicon git %} **Git**, a popular _distributed version control software_ that tracks changes to the files made by multiple users. If you [download Git][git_download] to your computer, you can turn any folder into a Git folder called a {% svgicon oi-repo %} **repository** or **repo** for short. Git creates a subfolder in your repo named `.git`, where it stores the files of the entire revision history of your repo. Every time you want to save the changes you have made you {% svgicon oi-git-commit %} _commit_ those changes to Git. You create a journal of of their modifications. different versions, it records, takes snapshots. you can review these changes or revert them. With git all contributors have a copy of the code and its journal.
With Git you don't need a server since you can use the git repository locally, but if you want to collaborate with others you should use a server to act as the master copy. you need to push and pull changes from one computer to another. Git is distributed because every machine that downloads the repo has a copy stored of all the code and the revision history.
You can update your own local copies from others changes by pulling the changes into you local repo. pull updates from each other.

Git also supports other features such as branching. which allos to develop the same repo seperately over time without interfering with one another. These can subsequengly be merged into a single version.

[15 min to learn git](https://try.github.io/levels/1/challenges/1)

{% svgicon oi-repo-clone %}
{% svgicon oi-repo-force-push %}
{% svgicon oi-repo-forked %}
{% svgicon oi-repo-pull %}
{% svgicon oi-repo-push %}
{% svgicon oi-sync %}
{% svgicon oi-gist %}
{% svgicon oi-git-branch %}
{% svgicon oi-git-commit %}
{% svgicon oi-git-compare %}
{% svgicon oi-git-merge %}
{% svgicon oi-git-pull-request %}
{% svgicon oi-markdown %}
{% svgicon oi-terminal %}
{% svgicon oi-browser %}
{% svgicon oi-versions %}











### Using GitHub
{% svgicon github %} Github is a a remote server that collaborators check into. It is a centralized area where contributors can organize and trck their code and changes. Github is just another contributor that everyone pushes their changes to.
Github is a service that hosts public repos for free, it also improves accesability by being online and a useful graphical interface that makes it more easy friendly. With Github instead of sycronizing, merging amongs themselves, we all merge with GitHub.



## Why use GitHub Pages
The DIYbiosphere project is stored as the sphere repository, which holds the the entries of the database, as well as source code that builds and formats those files into a website.

The DIYbiosphere is an _open_ and _collaborative_ project to create a database of DIYbio initiatives accesible via a website (sphere.diybio.org). The project is essentialy a _shared folder_ that contains the files for each entry in the database, and the files that code and build the database into the website (the software).
