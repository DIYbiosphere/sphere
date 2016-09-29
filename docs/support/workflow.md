---
layout: docs
permalink: /docs/support/workflow/
title: Workflow Management
summary: In this section we detail the workflow of how the project is managed, specifically Issues and Pull Requests (PR), collectively refered to here as Tickets
---

{% include _notices/note.html title="Only members can manage tickets" text="Members of the [development Community][community] have the privilege and the **responsability** to organize tickets to facilitate the collective workflow of the development of the project." %}

Tickets are classified and organized by [Labels](#labels), [Milestones](#milestones), [Epics](#epics) and [Boards](#boards). The two latter are features of [ZenHub][zenhub] which we use for project management. It is free and has native integration with GitHub and works for Chrome and Firefox.

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
Milestones track the progress of the development through the opening and closing of tickets. Milestones are useful for associating tickets with specific features, project


## Boards
Boards is a feature by ZenHub and is accesible as a tab. With boards, tickets are classified along steps of the developmental pipeline as follows:

- **New issues**: for new and uncategorized tickets.
- **Discuss**: for tickets that need to be discussed. Often questions, or suggestions, where feedback is needed belong in this step.
- **Future**: for tickets that will be dealt with in the near future. This step can also work as a 'wish-list' of features or enhancements.
- **To Do**: for tickets that need work. Here, contributors are encouraged to look for tickets to complete and close. They should assign themselves and move the ticket to the next step.
- **In Progress**: for tickets that are currently being resolved. All tickets in this step should have someone _assigned_ (see next section).
- **Done**: for tickets that have been completed. This step is useful for when tasks in a ticket have been completed, but need revision or a final step before closing. It is necessary to mark in a comment, what is required to close the ticket.
- **Closed**: for tickets that have been closed.

https://guides.github.com/introduction/flow/

https://guides.github.com/activities/contributing-to-open-source/

https://guides.github.com/activities/forking/

https://guides.github.com/features/issues/

## Assignment
Assigning tasks to users help the community know who they can reach out to to help with an issue or to collaborate and discuss further an issue or PR. Only members and outside collaborators can be assigned tasks.

## Projects

## Additional organization of tickets
Tickets


## Creating a good ticket
A good ticket should have a concise and clear title.
See our Contributing Guidelines for submitting issues, PRs. Title and descriptions can often follow the same as good commit messages.
In addition. It is also useful to add checklists. If the ticket is too complicated for checklists.. consider turning it into an epic.



### Adding reactions
You can add reactions, a.k.a. emojis, to comments and text messages on


### Removing duplicates

[ZenHub]:
