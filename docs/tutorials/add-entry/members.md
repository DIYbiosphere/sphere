---
layout: docs
tab: members
title: Adding Entries
---

{% include tabs/add-entry-tabs.md %}

1. **Open Collection Folder:** Go to the [sphere repository][gh_sphere]. Open the [collection][entries-collections] folder where your initiative belongs.
2. **Create New File:** click the `Create New File` button
3. **Name your new file**: Add a folder with the same name of your initiative which should not have any spaces, use `CamelCase` preferably and specify the format at the end as `.md` (e.g. 'AvocadoLab/AvocadoLab.md')
4. **Copy and Paste EntryTemplate:** open the [EntryTemplate](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryTemplate.md), select all, copy, and paste into your new file.
5. **Edit content:** Fill in the _front matter_ (data keys in between `---`) and write the rest of the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table

{% include messages/question.html title="On writing cool entries" text="Our [Writing Guide] specifies how to add your _logo_, a _header_, _social media links_, and _promotion boxes_, etc. You check our example entry: the file [here](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/EntryExample.md) and the rendered webpage [here](/docs/tutorials/entryexample/Avocadolab/)" %}

{:start="6"}
6. **Propose new file** When you are finished editing, at the bottom of the page, click `Propose new file`
7. **Watch Travis Build** Travis has to build the changes in the `master` branch and then push the rendered `_site` to the `github-pages` branch. Make sure it passes through. This might take some minutes so be patient

**Rejoice!** your new entry is now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include video.html path="/assets/videos/add-entry-members.mp4" %}
