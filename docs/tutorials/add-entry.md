---
layout: docs
title: Adding Entries
---

All you need is a GitHub account ([sign up]), but you might consider [joining][join] the development community for direct editing without _pull requests_.

Good reference materials are the [Writing Guide] and the example entry of the [Avocado Lab] webpage which is rendered from [this file](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md).

1. **Open Collection Folder:** inside the [sphere repository] (first determine in which [collection][collections] your initiative belongs to)
2. **Select Create New File:** If you are not a member, Github will let you know you don't have 'write' access to the project. A new file will be saved under _your copy of the project_ ('fork') and can later be merged with a 'pull request'.
3. **Name your new file**: Add a folder first, preferably with the same name of your initiative using `CamelCase` and specify the format at the end as `.md`, e.g. 'AvocadoLab/AvocadoLab.md' (the name of the file will be the URL of the entry, so don't use a long name!)

![](/docs/tutorials/name.gif){:.ui.huge.bordered.centered.image}

{:start="4"}
4. **Copy and Paste EntryTemplate:** open the [EntryTemplate](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md), select all, copy, and paste into your new file. Alternatively, use the [CompleteTemplate](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/CompleteTemplate.md), or base off the [AvocadoLabFile](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) as a more concrete example
5. **Edit content:** Fill in the _front matter_ (data keys in between `---`) and write the rest of the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table.
6. **Select Propose new file** at the bottom of the page, when you are finished editing

{% include messages/exclamation.html title="Add changes in large batches if possible" text="Make all the changes you want, even to other files, in your own 'fork' or 'branch' and merge them all at once" %}

{:start="7"}
7. **Select Create Pull Request** if you are able to merge. You can add additional comments to your pull request
8. **Wait for Merge** A member will revise your Pull Request (PR), request additional edits from you, or approve the PR and merge your changes to the master branch. Members can approve their own PR or edit directly into the _master_ branch

![](/docs/tutorials/edit.gif){:.ui.huge.bordered.centered.image}

**Rejoice!** your new entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include messages/info.html title="Changes are not immediate" text="Changes to the files trigger a _Travis Build_ which can take up to 10 minutes " %}
