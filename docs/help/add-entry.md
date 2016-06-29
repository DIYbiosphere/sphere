---
layout: docs
permalink: /help/tutorials/add-entry/
title: Adding a New Entry
---
> Draft

This is a step-by-step tutorial on how to add a new entry to the database. Keep a look out for our [helpful hints]!

{% include _notices/warning.html title="Before you begin, you must:" text="Have a [GitHub account](https://github.com/join), abide by our [Code of Conduct](http://sphere.diybio.org/about/coc/), and agree to our [Copyright Terms](http://sphere.diybio.org/about/copyright/license/)." %}



You can add a new entry using a {% include _oi/browser.html %} Browser ([Edit online](#edit-online)), or in your {% include _oi/desktop.html %} Desktop ([Edit locally](#edit-locally)). Online editing is the simplest. Local editing requires [installation] steps, but it is much more pleasent to work with, especially when doing multiple edits.


1. **Fork the repository:** to create a copy of the original repository under your GitHub account; this is where you will make your changes.
  - Go to our [repository] and click on 'Fork'.
  - {% include _oi/desktop.html %} Clone the forked repo into your desktop
2. **Create a new file:** classified as a: Project, Startup, Lab, Incubator, Group, Network, Event, or Other (definitions are explained [here][1]).
  - {% include _oi/browser.html %}
  - Open the '_database'  folder in the repository's root folder, and then open your entry's class folder
  - Inside the class folder create a new file
  - Name your entry. Our naming convention is 'EntryName-ZZ.md'
    - _EntryName_ should have no spaces, you can differentiate words by CapitalizingTheFirstLetter :wink:
    - _ZZ_ accounts for the two digit country code of the location of your initiative. Look for yours [here][2]
    - _.md_ is the file extension. REALLY IMPORTANT!
5. **Write in your entry's information**
  - Copy the following entry-template and paste in your new file
  - The entry is divided in two parts:
    - the _front matter_ is separated by three dashes `---` and has predetermined fields you need to fill out (explained [here][3]). Fill in the ones that apply to your initiative, and remove the rest
    - the _descriptive content_ is the written text that accompanies your entry. We have suggested a few sections in the template with some questions you should answer in each. These are only guidelines and you may add as much information as you want.
6. **Commit changes:** if you want to save the changes of you entry, you have to click at the bottom of the page to "commit the changes", but first you must fill in the title and description.
  - Title your commit as `Adding new entry: EntryName`
  - In the description you can add observations, or comments. Please specify if the entry needs further work, and if you are adding your own initiative or someone else's.
7. **Submit or not submit entry to the database**
You can make as many commits as you want to your entry's file. Remember, that this new file is in your copy (fork) of the original database. If you are ready to submit your entry, you must follow with a "Pull Request"
8. **Submit a Pull Request**
A Pull request (PR) is like sending us a ticket to revise your entry or changes.
  - Go to.. and click on `Submit pull request`
  - Title your PR as `Adding new entry: EntryName`
  - In the description you can add observations, or comments. Please specify if the entry needs further work, if you are adding your own initiative or someone else's, and if a diplomat has been established for the entry or not. You can make suggestions for this position if you can.
  - Click on `Send Pull request`
9. **Passing internal checks**
Your PR has to pass some internal checks to make sure it doesn't crash the platform. If it does not pass, you can try to make commits to amend the errors, or if your are lucky, someone else might.
Once it passes, a project member will revise your PR, make comments if it needs further work, reject it or approve it.
If approved, an project member will merge your fork with the master branch (original copy).
10. **Bask in the glory of your new entry**
Rejoice! Your entry is now part of the DIYbiosphere database! :clap: :clap:

Thank you for your contribution! :heart:





{% include _notices/tldr.html title="Fork repo, add a new file with your entry (use template), commit and pull request" text="Add .md file inside it's class folder in the '\_database' folder. Name it: 'EntryTitle-ZZ.md'; ZZ=country code. Copy and paste Raw code from the [entry-template](https://gist.github.com/ahuacatl/954444c7f15a27190b0fd52e0021a58c) Gist and follow the commented guide. " %}







[helpful hints]: /help/hints/
[repository]: https://github.com/DIYbiosphere/sphere.dir
[1]: #
[2]: #
[3]: #
