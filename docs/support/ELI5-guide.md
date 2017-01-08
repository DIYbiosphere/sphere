---
layout: docs
permalink: /docs/support/eli5/
crumb: support
title: Explain Like I'm 5 (ELI5) Guide
summary: A super-simple/101/beginner/crash-course/for-dummies guide to help out the utterly confused
---

Don't Panic! The essentials for working on the DIYbiosphere are pretty simple. You could go by without reading this guide and only follow our [tutorials]. However, understanding a few technicals are very helpful for doing things with more confidence and for building expertise. So let's get to it!

The first thing to understand is that the DIYbiosphere project is essentialy a _shared folder_ with a bunch of files inside. Sharing a collection of files among multiple users for collaboration, presents a technical problem. How can users collaborate simultaneously on the same files without overwriting each others changes or locking the files from being edited by others? The DIYbiosphere project uses **[Github]** to accomplish this.

The main function of GitHub is to manage and host the project's shared folder ([sphere][gh_repo]) and track changes to its files using **[Git]**; a _distributed version control software_. Git works as follows. A folder managed by Git is called a  **repository**, or **repo**, which can be stored in your computer (_local repo_), and/or in a server somewhere (_remote repo_) like in GitHub. To keep track of the changes to the repo, Git maintains a _history log_ in a subfolder in the repo named `.git` where it stores a copy of all the different **versions** of the files ever made. Git records the changes by maintaining three _"worktrees"_

Git is a standalone software, if you download it, you have to use the terminal to operate it. Services such as GitHub, BitBucket, GitKraken


### Working with Git
To keep track of the revision history of your files, Git maintains three _"trees"_ of files. The **Working Directory** to store the original files. The **Index** is the _stage area_ for proposed changes. And finally the **HEAD** where you store the latest commits you've made.

You can a brand new repository or clone one from a remote server. With commit you record those changes into the version history. Commits are accompanied with a commit message that states the reason for the changes. the working tree or working directory. The index allows you better control on what changes should be commited under what message

push to a remote repository
fetch a remote repository by cloning. the history log. When someone pushes to a shared remote repository, your local repository becomes out of date. You can syncronize with pull

a subfolder in your repo named `.git` where it stores  Every time you want to save a version of a file in the revision history you have to **commit** the changes to Git. You can **compare** changes, and revert them if desired.


#### Collaborating with Git


When multiple users collaborate on a repo, they all have copies stored locally in their computers.
When multiple users want to collaborate using Git they must coordinate on maintaining the _master copy_ of the repo, which is the most up-to-date version of the desired version of the project.

{% include help.html title="Using a server is better but not essential" text="Technically, you could send a copy of your repo by email to your collaborator. She downloads the repo to her computer, commits her changes, and send it back to you to merge the changes. Using a server, or the cloud." %}

Technically, you could copy or **clone repo** into a USB or send it by email to another collaborator so she could work on the repo as well.


With git all contributors have a copy of the code and its journal.
With Git you don't need a server since you can use the git repository locally, but if you want to collaborate with others you should use a server to act as the master copy. you need to push and pull changes from one computer to another. Git is distributed because every machine that downloads the repo has a copy stored of all the code and the revision history.
You can update your own local copies from others changes by pulling the changes into you local repo. pull updates from each other.

Git also allows **branching**. the _master_ branch is the default branch. You can use others for developing isolated features and merge them back to the master.

[15 min to learn git](https://try.github.io/levels/1/challenges/1)


### Using GitHub
 is a a remote server that collaborators check into. It is a centralized area where contributors can organize and trck their code and changes. Github is just another contributor that everyone pushes their changes to.
Github is a service that hosts public repos for free, it also improves accesability by being online and a useful graphical interface that makes it more easy friendly. With Github instead of sycronizing, merging amongs themselves, we all merge with GitHub.



## Why use GitHub Pages
The DIYbiosphere project is stored as the sphere repository, which holds the the entries of the library, as well as source code that builds and formats those files into a website.

The DIYbiosphere is an _open_ and _collaborative_ project to create a library of DIYbio initiatives accesible via a website (sphere.diybio.org). The project is essentialy a _shared folder_ that contains the files for each entry in the library, and the files that code and build the library into the website (the software).

---
There are other great Beginner Guides to Git check out:
https://backlogtool.com/git-guide/en/intro/intro1_1.html
http://rogerdudler.github.io/git-guide/
