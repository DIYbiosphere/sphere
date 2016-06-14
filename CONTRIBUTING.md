---
layout: docs
permalink: /help/contributing/
title: Contributing
---

# Contributing Guide
We really appreciate your interest in our project :+1: We :heartpulse: contributions! The following is a set of guidelines for contributing. Look out for [helpful hints].

By participating in this project, you agree to abide by our [CoC] (Code of Conduct), and consent to the [CLA] (Contributor License Agreement). Please read them!

{% include _notices/tldr.html title="I agree to be respectful to others and to freely sharing my contributions" text="CoC: Don't be gross or rude to others; offenders will be &quot;prosecuted&quot;. Report offenses to project managers* <br> CLA: I concede the rights of my Contributions under a free license and those pertaining to the database to the public domain" %}


Check out the [Getting Started] page if you want to know more about how you can contribute to the project.

---

### Table of Contents
- [Issues](#issues)
  - [Submitting Issues](#submitting-issues)
	  - [Bugs](#report-a-bug)
	  - [Suggestions](#make-a-suggestion)
	  - [Questions](#ask-a-question)
	  - [Membership requests](#apply-for-membership)
 - [Managing Issues](#issue-management)
	- [Labels](#applying-labels)
	- [Milestones](#setting-milestones)
	- [Boards](#using-zenboards)
- [Commits](#Commits)
- [Pull requests](#Pull-Requests)
- [Styleguides](#Styleguides)

---

# Issues
We use [GitHub Issues] to keep track of [bugs](#report-a-bug), [suggestions](#make-a-suggestion), [questions](#ask-a-question),  [membership requests](#apply-for-membership), and so on. Go to our repository's [Issues tab] to submit one!

## Submitting Issues
Please consider the following before submitting a new issue:

- **Avoid making [duplicates](#labels)**: Do a search on the [project’s issues] to check whether someone has submitted the same or a similar issue. You can :+1: to [vote]() for an issue.
- **Follow general [style guides](#styleguides)**: _Good_ titles and descriptions generate less questions and discussions and therefore create quicker responses and solutions.
- **[Classify](#issue-management) new issues**: Members are encouraged to apply [labels](#labels), [milestones](#milestones), and [boards](#boards) to their own issues and new issues from contributors.

### Report a bug
A bug is an error in the code that produces unexpected or undesired results. Bugs generally concern only the [coders] team. The following guidelines help them address the problem appropriately:

- Describe the problem and how you encountered it.
- Describe how it should work instead.
- Provide as much useful visual content as you can (screenshots and screencaptures; [how-to]).
- If it is related to building the repo locally, specify your operating system.

You can use the [bug template] to make things easier

### Make a suggestion
Whether they are a new feature or an enhancement to improve an existing feature, we really appreciate suggestions and ideas :gift_heart:. Please follow these guidelines:

- Describe as much as possible what your suggestion is
- Describe how it would work, or how it would look like
- If applicable, share examples and references and include links, images, GIFs, etc.

### Ask a question
You can submit question as an issue if it concerns the DIYbiosphere project. You can also asks questions on our [Gitter] chatroom, in [Slack] channel or direct message.

Make sure to check out our [FAQs] for a list of common questions.

### Apply for membership
Submit a new issue with the title: “Applying for membership” and in the Comment section add a description of yourself and why you would like to join; this is optional but useful for those considering your application. After you receive the email invitation and you accept to join, Please close the issue with the comment of “accepted”

As a member of the DIYbiosphere organization in GitHub, you have _write_ access to the repositories (learn more about [permission levels])

## Issue management
Issues are organized or classified by [labels](#labels), [milestones](#milestones), [epics](#epics) and [boards](#boards). The two latter are features of [ZenHub] which we use for project/issues management. It has native integration in GitHub and works for Chrome and Firefox. [Add ZenHub to GitHub].

### Labels
Labels are for categorizing and filtering your issues. The ones in place for now include:

-  {% include _labels/bug.html %}
-  {% include _labels/critical.html %}
-  {% include _labels/database.html %}
-  {% include _labels/design.html %}
-  {% include _labels/development.html %}
-  {% include _labels/easy.html %}
-  {% include _labels/enhancement.html %}
-  {% include _labels/epic.html %}
-  {% include _labels/feature.html %}
-  {% include _labels/feedback.html %}
-  {% include _labels/help.html %}
-  {% include _labels/resolution.html %}


### Milestones
Milestones act as container for issues. This is useful for associating issues with specific features or project phases. Milestones are groups of issues that correspond to a project, feature, or time period.  Like Beta Launch, October, Sprint, Redesign.

### Epics
Epics provide a hierarchy to issues. They are a theme of work that contains several sub-tasks needed to complete the larger goal
If estimate the issue will take weeks or months to finish, it should probably become an epix
If it is too complex, if several sub-tasks are required to mark it as done it should be an epix.


https://www.zenhub.io/blog/working-with-epics-in-github/

### Boards
In the Boards tab, we can see how issues are divided between:
- New issues: where uncategorised issues go to
- Backlog: are


### Additional organization of issues

#### Adding reactions

#### Removing duplicates

# Commits
To commit changes is to basically save the changes you made to the repository.
Committing changes will depend whether you do it through GitHub online GUI or the Desktop app which we recommend. Committing changes will be different depending on you [writing privileges].
-Direct commits
- Forking
- Branching

## Committing changes

https://guides.github.com/activities/forking/



# Pull Requests
Users with different access and push permissions to the repository and main branch will follow different steps

> **Note: Permission levels** <br>
> Users with different access and push permissions to the repository and main branch will follow different steps. Learn more about the [permission levels] of the project.

This guide assumes you have the most basic permission access to the repository.

Depending on your read/write permissions and your push access to the repository you can either `Commit directly to the master branch`, `Create a new branch and start a pull request`, or `Fork the project, write changes in a new branch in your fork, and send a pull request`. Coders and Designers may want to branch out or fork the repository depending on the contributions they want to do.

## Merging
If your PR does not check the Travis build DO NOT merge!. Check either in Travis or in Github, why it did not pass... make changes to your repository to fix these. Please also fix changes by hound. Commit these changes to your branch or fork. sync them. and wait for the checks to pass again!


In order to run locally you have to use the terminal. If you have never used it, don’t worry! It is as easy as copy & paste.
The instructions and programs you need depend on your operating system (OSx, Windows, or Linux), pleas

### Mac users 
1. Install all the command line tools
	- Copy the following command line
	- Paste in your terminal
```
xcode-select — install
```
	- A popup window will appear, select install. And you are done
2.Install dependencies using bundler

If you are going to use




We recommend using [GitHub Desktop], however it is only available for Mac and Windows.
And we recommend [Atom] to use as a text editor, it is available for Mac, Windows and Linux

[GitHub Desktop]: https://desktop.github.com/
[Atom]: https://atom.io/



## How _do_ I contribute?
1. [Submit an Issue] to report a problem (or a 'bug'), make a request, suggestion, ask for help, feedback, etc. and wait and see if others are interested in responding, helping or collaborating with you.
2. [Commit changes] yourself with your contributions, whatever they are.

Please follow the style guidelines, these help maintainers and the community to understand your

In order to keep the project organised and clear, we have made several guidelines

## Style Guidelines





- - -
\* [Project managers] team. If you are not a DIYbiosphere member, you may report offenses to @sabgaby


[Helpful hints]: {{ '/help/hints/' | prepend: site.baseurl }}
[CoC]: {{ '/about/coc/' | prepend: site.baseurl }}
[CLA]: {{ '/about/copyright/cla/' | prepend: site.baseurl }}
[Project managers]: https://github.com/orgs/DIYbiosphere/teams/managers
[Sabgaby]: https://github.com/sabgaby
[Getting Started]: {{ '/help/getting-started/' | prepend: site.baseurl }}
[Github issues]: https://guides.github.com/features/issues/
[Issues tab]: https://github.com/DIYbiosphere/sphere.dir/issues
[project’s issues]: https://github.com/DIYbiosphere/sphere.dir/issues
[coders]: https://github.com/orgs/DIYbiosphere/teams/coders
[Gitter]: https://gitter.im/DIYbiosphere/sphere.dir?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[Slack]: https://diybiosphere.herokuapp.com/
[tweet]: #
[permission levels]: #
[ZenHub]: #
[Add ZenHub to GitHub]: #

[database]: #
[documentation]: #
[build]: #
[design]: #
[permission levels]: #
[sign up]: #
[submit an issue]: #
[commit changes]: #


http://mozillascience.github.io/working-open-workshop/contributing/
