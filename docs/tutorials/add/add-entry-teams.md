---
layout: docs
permalink: /docs/tutorials/add-entry/teams/
crumb: tutorials
tab: teams
title: Adding a New Entry
summary: Instructions for how to add a new entry
---

{% include tabs/add-entry-tabs.md %}


1. **Download <a class="noelink" href="https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md" download>entry template</a>**. The entry template has all the possible data fields you could add to an initiative. Learn more about [data fields], or download the <a class="noelink" href="https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryExample.md" download>entry example</a> as a guide and [view the render].
2. **Edit your file**. Open and edit the markdown file (.md file extension) in any text editor. We recommend [Atom].
3. **Save your file**. When you are done and ready to upload, rename the file with the initiative's name in camel case and no spaces: `TheInitiativeName.md`.
4. **Upload file**. In the [master branch][sphere], open the Collection folder of your new entry and click "Upload files", then select your entry file to upload
5. **Commit changes**. In the Subject line write "Initiative Name"

**Rejoice!** your entry is now part of the DIYbiosphere library! :clap: :clap:

Thank you for your contribution! :heart:


{% include info.html title="Commits are not immediate" text="The repository has to be parsed and built by TRAVIS CI. Check the [build](https://travis-ci.org/DIYbiosphere/sphere), to see if your commit has passed." %}
