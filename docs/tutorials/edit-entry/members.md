---
layout: docs
tab: members
title: Editing Entries
---

{% include tabs/edit-content-tabs.md %}

1. **Find the file you want to edit:** Go to the webpage of the entry you want to edit. Click the `Last edit xx-xxx-xx` menu tab. There maybe a discussion of editing the page you can use as a guide. Then click the `Edit this page` button, it will take you to GitHub

{% include messages/info.html title="Github will let you know you don't have 'write' access to the project" text="This just means the new file is saved under _your copy of the project_ ('fork') and can later be merged with a 'pull request'." %}

{:start="2"}
2. **Edit content:** Make changes to the _front matter_ (data keys in between `---`) and update the entry in _markdown text_. The `Preview` markdown will only render the text and the front matter will be inside a two row table

{% include messages/question.html title="On writing cool entries" text="Our [Writing Guide] specifies how to add your _logo_, a _header_, _social media links_, and _promotion boxes_, etc. You check our example entry: the file [here](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) and the rendered webpage [here](/docs/tutorials/AvocadoLab/AvocadoLab)" %}

{:start="3"}
3. **Propose file change** When you are finished editing, at the bottom of the page, leave the proposed tile, but add a description of your changes. Then click `Propose new file`
4. **Watch Travis Build** Travis has to build the changes in the `master` branch and then push the rendered `_site` to the `github-pages` branch. Make sure it passes through. This might take some minutes so be patient

**Rejoice!** your changes are now part of DIYbiosphere! :clap: :clap:

Thank you for your contribution! :heart:

{% include video.html path="/assets/videos/edit-entry-members.mp4" %}
