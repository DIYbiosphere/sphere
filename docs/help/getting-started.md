---
layout: docs
permalink: /help/getting-started/
title: Getting Started
---

> Draft

**"How can I use the database? How can I obtain the entire dataset? How can I contribute with data? How can I get involved in the project?"**

This is the kickstart guide to help you get on the right path. Look out for [helpful hints].

---

### Table of Contents

- [Structure of the Database](#Structure-of-the-Database)
	- [Classification of the Entries](#Classification-of-the-Entries)
	- [Anatomy of an Entry](#Anatomy-of-an-Entry)
- [Obtaining the Dataset]()
- [Using the Database]()
	- [Table of Entries](#Table-of-Entries)
- [Contributing to the Database]()
---

## Structure of the Database
The database has been designed to mimic the wiki design.

### Classification of the Entries
Entries have been classified broadly in eight classes:

- {% include _fa/project.html %}**Projects**: which are characterized usually for having specific tasks and/or a desired outcome
- {% include _fa/startup.html %}**Startups**: are entrepreneurial ventures, and generally concern products or services
- {% include _fa/lab.html %}**Labs**: are dedicated physical spaces with lab equipment for DIYbio related activities
- {% include _fa/incubator.html %}**Incubators**: are organizations and spaces that help projects, startups, etc. to develop
- {% include _fa/group.html %}**Groups**: are online/offline associations of people interested in discussing or developing DIYbio related topics or activities.
- {% include _fa/network.html %}**Networks**: website, service or organization that connects people, projects, etc. in relation to DIYbio
- {% include _fa/event.html %}**Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, accelerators, etc.
- {% include _fa/other.html %}**Others**: Is an umbrella term for the all the rest. Eventually as new entries begin to define themselves a new category may be created

### Anatomy of an Entry
The content of an entry is divided in two parts:

- The _written description_ of the initiative with the following suggested content:
	-
  - **About**
  - **History**

- The _data_ is displayed inside an box in the right side of the page. This data is collected from Jekyll's _front matter_ with the following fields:

  - The **logo** or **title** of the entry and link to it's **homepage**
  - The {% include _oi/gift.html %} **starting date** and end date if it applies; these entries are "inactive". In the Events class, this reflects the event's calendar
  - the {% include _oi/home.html %} **host**,
  - the {% include _oi/gear.html %} **type** of initiative
  - the {% include _oi/organization.html %} **affiliates**
  - the {% include _oi/location.html %} **address** and **directions**
  - the {% include _oi/globe.html %} location which includes **city**, **postcode**, **state**, and **country**
  - the {% include _oi/tag.html %} **keywords**
  - the {% include _oi/thumbsup.html %} **social media** and more...

## Obtaining the Dataset
**Source**: The source-files are in the [sphere.dir] repository in GitHub, inside the folder `_database` in their respective class folder.

**List of entries**: in the websearch page of "List of entries", you can download the CSV of the displayed table.

**Complete data table**: All the filled-in data provided in the front matter section can be downloaded with the following links as [CSV] or [JSON]

## Using the Database
You can access the entries of the database on our website: [sphere.diybio.org]. In our home page you can directly search for entries with keywords (i.e. lab, Geneva, Bioscope) or do an `Advanced Search` with predetermined filters.

### Table of Entries
You can see a list of entries with the search query, or filters if they were specified and you can further sort and filter the table, as well as do further searches within that table.

## Contributing to the Database


#### Before you Begin
The **only requirement** you need to contribute is a GitHub account, so [Sign up] if you don't have one. If you are new to GitHub, the [GitHub Glossary] is an excellent starter! Otherwise, check out our [ELI5 guide] for the utterly confused. :smile:

Please be aware that by participating in this project, you agree to abide by our [Code of Conduct] (CoC), and consent to our copyright terms [Contributor License Agreement] (CLA).





### _How_ do you contribute
Your options, in order of engagement, are the following:

  - **Submit an issue**: with your [request], [question], [idea], and hope someone will pick it up. Follow the [issue guidelines] if you want to be taken seriously.
  - **Comment, answer, and vote**: Others may submit issues because they are asking a question, for help, or feedback.
  - **Fork, commit, and pull request**: your contribution! This is the best part of being an open-source project. Step-up and Do-it-Yourself :smile:!



### _What_ can you contribute to?
There are four types of work in the project:

- the database is the entries of the DIYbio initiatives. These are plain text files with [Markdown syntax]. No skills required!
- the documentation, or docs, is the guides, tutorials, and reference manual (like this page). These are also plain text files.
- the build, or code, is the part that converts the text files into data and a readable website. Coding skills are helpful.
- the design is all about the user experience, the aesthetics and interface of the website. Design skills recommended.



[Helpful hints]: http://sphere.diybio.org/help/hints/
[code of conduct]: http://sphere.diybio.org/coc/
[contributor terms]: #
[Sign up]: #
[Github glossary]: https://help.github.com/articles/github-glossary/
[Database]: #
[Documentation]: #
[Development]: #
[Design]: #
