---
layout: docs
permalink: /help/tutorials/add-entry/
title: Adding a New Entry
---

# Adding a New Entry
This is a step-by-step tutorial on how to edit an entry or adding a new entry to the database. Keep a look out for our [helpful hints]!

{% include _notices/warning.html title="Before you begin, you must:" text="1. Have a GitHub account, so [sign up] if you don't <br>
2. Abide by our [Code of Conduct], and <br>
3. Agree to our Copyright Terms. You can review our [License] and its [Legal Terms]" %}

There are many ways you can add a new entry into the repository, you can fork and edit through GitHub's GUI ([Edit online](#edit-online), or clone to your Desktop and commit locally ([Edit locally](#edit-locally). The easiest for single contributions is online editing. The editing locally requires more steps, but it is much more pleasent to work with, especially when doing multiple edits.


## Edit online
1. **Fork the repository**
  - Go to our [repository] and click on `fork`. It will create a "clone" on the original repository in your GitHub account; this is where you will make your changes.
2. **Navigate to your entry's class folder**
Your entry will have to be classified as a: Project, Startup, Lab, Incubator, Group, Network, Event, or Other (definitions are explained [here][1])
  - After you determine what classification your entry falls into, open the `_database` folder in the repository's root folder, and then open your entry's class folder
3. **Create a new file**
  - Inside the class folder, create a new file by clicking the `Add new file` button
  - Name your entry. Our naming convention is "EntryName-ZZ.md""
    - `EntryName` should have no spaces, you can differentiate words by CapitalizingTheFirstLetter :wink:
    - `ZZ` accounts for the two digit country code of the location of your initiative. Look for yours [here][2]
    - `.md` is the file extension. REALLY IMPORTANT!
4. **Copy and Paste the template**
  - Copy the following template and paste in your new file
5. **Write in your entry's information**
  - The entry is divided in two parts: 
    - the _front matter_: constitutes the aggregated and comparable data across entries and has predetermined fields you need to fill out (explained [here][3]). Fill in the ones that apply to your initiative, and you may keep or erase the rest of the fields
    - the _descriptive content_ is the written text that accompanies your entry. We have suggested a few sections in the template with some questions you should answer in each. These are only guidelines and you may add as much information as you want.
6. **Commit changes**
If you want to save the changes of you entry, you have to click at the bottom of the page to "commit the changes", but first you must fill in the title and description.
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

## Edit locally
Editing locally means installing all the required software to be able to make changes and view them live. Follow our [Install] instructions.
1. **Set-up server**
- Open GitHub Desktop 

and left click on the sphere.dir, and choose `Open in Terminal`










{% include _notices/tldr.html title="Add a new .md file with your entry" text="Add it to the _database folder and the appropriate subfolder. Naming convention goes: EntryTitle-ZZ. ZZ=your country code." %}




 
[helpful hints]: {{ '/help/hints/' | prepend: site.baseurl }}

