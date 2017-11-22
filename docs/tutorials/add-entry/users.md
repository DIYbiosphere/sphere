---
layout: docs
tab: users
title: Adding Entries
---

{% include tabs/add-entry-tabs.md %}

1. **Open Collection Folder:** Go to the [sphere repository][gh_sphere]. Open the [collection][entries-collections] folder where your initiative belongs.
2. **Create New File:** click the `Create New File` button

{% include messages/info.html title="Github will let you know you don't have 'write' access to the project" text="This just means the new file is saved under _your copy of the project_ ('fork') and can later be merged with a 'pull request'." %}

{:start="3"}
3. **Name your new file**: Add a folder with the same name of your initiative which should not have any spaces, use `CamelCase` preferably and specify the format at the end as `.md` (e.g. 'AvocadoLab/AvocadoLab.md')
4. **Copy and Paste EntryTemplate:** open the [EntryTemplate](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md), select all, copy, and paste into your new file.
5. **Edit content:** Fill in the _front matter_ (data keys in between `---`) and write the rest of the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table

{% include messages/question.html title="On writing cool entries" text="Our [Writing Guide] specifies how to add your _logo_, a _header_, _social media links_, and _promotion boxes_, etc. You check our example entry: the file [here](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) and the rendered webpage [here](/docs/tutorials/AvocadoLab/AvocadoLab)" %}

{:start="6"}
6. **Propose new file** When you are finished editing, at the bottom of the page, click `Propose new file`
7. **Create Pull request** If you are able to merge, click on `Create Pull Request`. You can add additional comments to your pull request if you want to
8. **Wait for Merge** A member will revise your Pull Request (PR), request additional edits from you, or approve the PR and merge your changes to the master branch.

**Rejoice!** your new entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include video.html path="/assets/videos/add-entry-users.mp4" %}
