---
title: Adding a New Entry
permalink: "/docs/tutorials/add-entry/members/"
layout: docs
crumb: tutorials
tab: members
summary: Instructions for how to add a new entry
---

{% include tabs/add-entry-tabs.md %}

1. **Download <a class="noelink" href="https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md" download>entry template</a>**. The entry template has all the possible data fields you could add to an initiative. Learn more about [data fields], or download the <a class="noelink" href="https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryExample.md" download>entry example</a> as a guide and [view the render].
2. **Edit your file**. Open and edit the markdown file (.md file extension) in any text editor. We recommend [Atom].
3. **Save your file**. When you are done and ready to upload, rename the file with the initiative's name in camel case and no spaces: `TheInitiativeName.md`.
4. **Upload file**. In the [editable branch][gh_editable], open the Collection folder of your new entry and click "Upload files", then select your entry file to upload
5. **Commit changes**. In the Subject line write `Add new "collection": "Initiative Name"`, ex: `Add new lab: Avocado Lab`
6. **Submit pull request (PR)**. Leave the Subject line the same as before, and in the comments specify if it's your entry or not, and if a manager has been established.
7. **Merge**. You can merge the PR yourself after it passes the Travis check, or you can request another member to revise the PR if applicable.

**Rejoice!** your entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:
