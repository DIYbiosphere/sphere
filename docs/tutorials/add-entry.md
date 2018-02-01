---
layout: docs
title: Adding Entries
---

Adding a new entry is simple, all you need is a GitHub account ([sign up]). Considering [joining][join] [DIYbiosphere][gh_org] for direct editing without _pull requests_.

A screencapture of the steps is at the end of this page. You can pause and do a _picture in picture_ to follow across your browser, just open links in new tabs and don't close this one.

{% include messages/star.html title="On writing cool entries" text="Our [Writing Guide] specifies how to add your _logo_, a _header_, _social media links_, and _promotion boxes_, etc. You check our example entry: the file [here](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) and the rendered webpage [here](/docs/tutorials/AvocadoLab/AvocadoLab)" %}

1. **Open Collection Folder:** inside the [sphere repository][gh_sphere].  [Collections][entries-collections] are how entries are organized
2. **Click Create New File:** If are not a member, Github will let you know you don't have 'write' access to the project. The new file is saved under _your copy of the project_ ('fork') and can later be merged with a 'pull request'.
3. **Name your new file**: Add a folder with the same name of your initiative which should not have any spaces, use `CamelCase` preferably and specify the format at the end as `.md` (e.g. 'AvocadoLab/AvocadoLab.md')
4. **Copy and Paste EntryTemplate:** open the [EntryTemplate](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md), select all, copy, and paste into your new file.
5. **Edit content:** Fill in the _front matter_ (data keys in between `---`) and write the rest of the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table.
6. **Click Propose new file** at the bottom of the page, when you are finished editing,


{% include messages/exclamation.html title="" text="Consider doing all the changes and edits you want, even to other files, before submitting a pull request, so that all the changes are merged in one instance." %}

{:start="7"}
7. **Click Create Pull request** if you are able to merge. You can add additional comments to your pull request
8. **Wait for Merge** A member will revise your Pull Request (PR), request additional edits from you, or approve the PR and merge your changes to the master branch.

**Rejoice!** your new entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include video.html path="/assets/videos/add-entry-users.mp4" %}
