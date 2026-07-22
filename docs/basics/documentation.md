---
layout: docs
title: Tools in the Documentation
draft: true
---

The documentation refers to all guides, tutorials, and reference manuals that pertain to DIYbiosphere. These are in plain text files in markdown syntax in the `./docs/` folder in the repo, and at: sphere.diybio.org/docs. To make the documentation more easy to read, several add-ins such as _message boxes_ and videos, _pop-overs_, etc.

## Message boxes
There are four types of message boxes:

{% include messages/info.html title="Info" text="Use this box for neutral, helpful context - like noting how long a build takes." %}

{% include messages/exclamation.html title="Warning" text="Use this box to flag something contributors should be careful about, like a step that can't be undone." %}

{% include messages/question.html title="Question" text="Use this box to pose a question to the community, or point to further discussion on an open topic." %}

{% include messages/star.html title="Tip" text="Use this box to highlight a nice-to-know feature, like a shortcut most contributors miss." %}

Code files for the message boxes are in the `_includes/messages` folder
