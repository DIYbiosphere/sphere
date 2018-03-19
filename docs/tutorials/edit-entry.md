---
layout: docs
title: Editing Entries
---

All you need is a GitHub account ([sign up]), but you might consider [joining][join] the development community for direct editing without _pull requests_.

Good reference materials are the [Writing Guide] and the example entry of the [Avocado Lab] webpage which is rendered from [this file](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md).

1. **Go to page you want to edit:** Above the title of the entry click the <i class="far fa-edit"></i> icon, which will take you to GitHub.
2. **Select edit button:** The pencil icon <i class="fas fa-pencil"></i>.
If you are not a member, Github will let you know you don't have 'write' access to the project. A new file will be saved under _your copy of the project_ (i.e. a 'fork') and can later be merged with a 'pull request'.

![](/docs/tutorials/editing.gif){:.ui.huge.bordered.centered.image}

{:start="3"}
3. **Edit content:** Make changes to the _front matter_ (data keys in between `---`) and update the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table
4. **Select Propose file change** at the bottom of the page, when you are finished editing,

{% include messages/exclamation.html title="Add changes in large batches if possible" text="Make all the changes you want, even to other files, in your own 'fork' or 'branch' and merge them all at once" %}

{:start="5"}
5. **Select Create Pull Request** if you are able to merge. You can add additional comments to your pull request
6. **Wait for Merge** A member will revise your Pull Request (PR), request additional edits from you, or approve the PR and merge your changes to the master branch. Members can approve their own PR or edit directly into the _master_ branch


![](/docs/tutorials/changes.gif){:.ui.huge.bordered.centered.image}


**Rejoice!** your new entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include messages/info.html title="Changes are not immediate" text="Changes to the files trigger a _Travis Build_ which can take up to 10 minutes " %}
