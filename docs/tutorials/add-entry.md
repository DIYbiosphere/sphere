---
layout: docs
title: Adding Entries
---

Adding a new entry is simple, all you need is a GitHub account ([sign up]). Considering [joining][join] [DIYbiosphere][gh_org] for direct editing without _pull requests_.

{% include messages/star.html title="Add more features to your entry" text="Follow the [Writing Guide] on how to add a _logo_, _header_, _social media links_, and _promotion boxes_, etc. Check the example entry: the file [here](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) and the rendered webpage [here](/docs/tutorials/AvocadoLab/AvocadoLab)" %}

1. **Open Collection Folder:** inside the [sphere repository][gh_sphere].  [Collections][entries-collections] are how entries are organized
2. **Click Create New File:** If you are not a member, Github will let you know you don't have 'write' access to the project.  A new file will be saved under _your copy of the project_ ('fork') and can later be merged with a 'pull request'.
3. **Name your new file**: Add a folder with the same name of your initiative which should not have any spaces, use `CamelCase` preferably and specify the format at the end as `.md` (e.g. 'AvocadoLab/AvocadoLab.md')
4. **Copy and Paste EntryTemplate:** open the [EntryTemplate](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md), select all, copy, and paste into your new file.
5. **Edit content:** Fill in the _front matter_ (data keys in between `---`) and write the rest of the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table.
6. **Click Propose new file** at the bottom of the page, when you are finished editing,

{% include messages/exclamation.html title="Add changes in large batches if possible" text="Make all the changes you want, even to other files, in your own 'fork' or 'branch' and merge them all at once" %}

{:start="7"}
7. **Click Create Pull request** if you are able to merge. You can add additional comments to your pull request
8. **Wait for Merge** A member will revise your Pull Request (PR), request additional edits from you, or approve the PR and merge your changes to the master branch.

**Rejoice!** your new entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include messages/info.html title="Changes are not immediate" text="Changes to the files trigger a _Travis Build_ which can take up to 10 minutes " %}

{% include video.html path="/assets/videos/add-entry-users.mp4" %}
