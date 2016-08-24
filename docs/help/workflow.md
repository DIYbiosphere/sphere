---
layout: docs
permalink: /help/workflow/
title: Workflow Management
---

_In this section we detail the workflow of how the project is managed, specifically Issues and Pull Requests (PR), collectively refered to here as Tickets._

{% include _notices/note.html title="Only members can manage tickets" text="Members of the [development Community](/about/community) have the privilege and the **responsability** to organize tickets to facilitate the collective workflow of the development of the project." %}

Tickets are classified and organized by [Labels](#labels), [Milestones](#milestones), [Epics](#epics) and [Boards](#boards). The two latter are features of [ZenHub] which we use for project management. It is free and has native integration with GitHub and works for Chrome and Firefox.

The following explains how the current practices for managing tickets in the DIYbiosphere project.

## Labels
Labels are for categorizing and filtering tickets. The following labels are currently in place:

- {% include _labels/bug.html %} are errors, undesired results or behaviors
- {% include _labels/critical.html %} are high-priority tickets
- {% include _labels/database.html %} pertain to content and data
- {% include _labels/design.html %} pertain to the design
- {% include _labels/development.html %} pertain to the development of the code
- {% include _labels/documentation.html %} pertain to the documentation
- {% include _labels/easy.html %} are relatively simple, or for beginner contributors
- {% include _labels/enhancement.html %} are incremental or gradual improvements
- {% include _labels/Epic.html %} are part of an [Epic](#epics) issue
- {% include _labels/feature.html %} are new attributes, characteristics or functions
- {% include _labels/feedback.html %} are tickets that need opinions and comments
- {% include _labels/help.html %} are tickets that need other users to attend to
- {% include _labels/question.html %} are questions that need answers
- {% include _labels/resolution.html %} are tickets that need to be resolved soon

{% include _notices/note.html title="Labels can be for PRs" text="Labels will be applied mostly to Issues. However, when PRs require review or encounter problems in merging, labels may be applied to indicate any additional information (like 'critical', 'help wanted')." %}


## Epics
Epics is a feature by ZenHub that groups issues together. Epics are useful to implement when any or many of the following apply to an issue:

- It is very complex
- It will require weeks or months to finish and close the issue
- It has several sub-tasks
- It relates to other issues of a similar theme of work


{% include _notices/tip.html title="Keep issues simple" text="Making issues as modular as possible encourages contributors to take it on." %}

## Milestones
Milestones are used for issues to act as containers, events, or achievement goals. This is useful for associating issues with specific features or project phases, or time periods.
Milestones are used to track the progress of similar issues and pull requests as they're opened and closed over time. At a glance, you can easily see the progress of work in a milestone's lifetime.


## Boards
Boards is a feature by ZenHub and is accesible as a tab. With boards, tickets are classified along a development pipeline as follows:

- **New issues**: where uncategorised issues go
- **Discuss**: are issues that should encourage contribut
- **Future**: are issues that would like to get address
- **To Do**:
- **In Progress**:
- **Done**:
- **Closed**:



## Assignment
Assigning tasks help the community know who they can reach out to to help with the issue or to collaborate and discuss further an issue or PR

## Additional organization of issues

### Adding reactions
You can add reactions, a.k.a. emojis, to comments and text messages on

### Removing duplicates

[ZenHub]: https://www.zenhub.com/
