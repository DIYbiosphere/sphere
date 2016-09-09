---
layout: docs
permalink: /docs/help/eli5-guide/
title: Explain Like I'm 5 (ELI5) Guide
---

This is a super-simple/101/beginner/crash-course/for-dummies guide to help out the utterly confused and introduce them to the basic terms and concepts to work with the DIYbiosphere project.

### Explaining GitHub

{% include _oi/GitHub.html %} is a web platform that helps users collaborate on a _collection of files_, called {% include _oi/repo.html %} **repository** or **repo**, by providing _version control_ based on the **Git** software. Git usually runs by using the {% include _oi/terminal.html %} _command-line_ of your local machine, using GitHub is easier as it provides a visual interface accessible by any {% include _oi/browser.html %} browser, or you can download GitHub {% include _oi/desktop.html %} Desktop and work locally on your machine.

Git works by saving _snapshots_, called {% include _oi/commit.html %} commits, of the changes in the repository; making changes easy to track and reverse.

{% include _oi/fork.html %} Fork

{% include _oi/branch.html %} Branch

{% include _oi/merge.html %} Merge

{% include _oi/branch.html %} Branch

{% include _oi/pullrequest.html %} Pull Request



The flagship functionality of GitHub is “forking” – copying a repository from one user’s account to another. This enables you to take a project that you don’t have write access to and modify it under your own account. If you make changes you’d like to share, you can send a notification called a “pull request” to the original owner. That user can then, with a click of a button, merge the changes found in your repo with the original repo.

In addition, GitHub integrates a ticket system called **Issues** to keep track of tasks, bugs, feature requests and more. GitHub also allows users to comment, discuss, and react to Issues and Pull Requests. GitHub enables users to form organizations

{% include _notices/note.html title="You should also know..." text="Keep track of our issues, and learn more about the DIYbiosphere organization and how you can join" %}


### Explain the DIYbiosphere
The DIYbiosphere project is stored as the sphere repository, which holds the the entries of the database, as well as source code that builds and formats those files into a website.


## Forking

Pros

Keeps branches separated by user
Reduces clutter in the primary repository
Your team process reflects the outside contributor process
Cons

Makes it more difficult to see all of the branches that are active (or inactive, for that matter)
Collaborating on a branch is trickier (the fork owner needs to add the person as a collaborator)
You need to understand the concept of multiple remotes in Git
Requires additional mental bookkeeping
This will make the workflow more difficult for people who aren't super comfortable with Git

## Branching

Pros

Keeps all of the work being done around a project in one place
All collaborators can push to the same branch to collaborate on it
There's only one Git remote to deal with
Cons

Branches that get abandoned can pile up more easily
Your team contribution process doesn't match the outside contributor process
