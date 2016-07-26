---
layout: docs
permalink: /help/basics/
title: Basic components of the project
---

> Draft: Explain how the components, design, code, database, and documentation are structured.

---

#### Table of Contents
- [Database](#database)
- [Documentation](#documentation)
- [Development](#development)
- [Design](#design)

---

# Database
The database refers to all the entries of DIYbio initiatives in the project. The entries These are plain text files with [Markdown syntax].

## Classification of Entries
The entries are divided in eight collections:

- {% include _fa/project.html %} **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- {% include _fa/startup.html %} **Startups**: are entrepreneurial ventures and generally concern products or services
- {% include _fa/lab.html %} **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- {% include _fa/incubator.html %} **Incubators**: are organizations and spaces that help projects and startups to develop
- {% include _fa/group.html %} **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- {% include _fa/network.html %} **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- {% include _fa/event.html %} **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- {% include _fa/other.html %} **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.

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

# Documentation
The documentation refers to all guides, tutorials, and reference manuals that pertain to the project
- the documentation, or docs, is the guides, tutorials, and reference manual (like this page). These are also plain text files.

# Development
The development refers to all the source-code that formats, displays, and builds the database into the website.

- the build, or code, is the part that converts the text files into data and a readable website. Coding skills are helpful.


# Design
The design, refers to all the

- the design is all about the user experience, the aesthetics and interface of the website. Design skills recommended.
