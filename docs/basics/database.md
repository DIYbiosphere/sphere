---
layout: docs
permalink: /docs/basics/database/
crumb: basics
title: Basics of the Database
summary: In this section we detail the basic structure, components, and organization of the Database
---


The Database encompases all the information on the DIYbio initiatives added to the DIYbiosphere project. Each initiative has its own _Entry_ for composing and displaying its particular information. Entries are accessible as webpages at [sphere.diybio.org][sphere] and as text files in the [sphere repository][gh_repo] in GitHub, where they can be edited as well (how to [edit an entry][edit]).

{% include help.html title="Entries are files and webpages" text="Entries are created and edited as text files in markdown format `entry.md` which is then displayed as a webpage" %}

To facilitate the organization of the Initiatives in the Database, a series of [entry collections] are used to aggregate similar initiatives.

## Entry Collections
The entries are divided into eight collections:

- {% svgicon fa-briefcase %} **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- {% svgicon fa-rocket %} **Startups**: are entrepreneurial ventures and generally concern products or services
- {% svgicon fa-flask %} **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- {% svgicon fa-leaf %} **Incubators**: are organizations and spaces that help projects and startups to develop
- {% svgicon fa-users %} **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- {% svgicon fa-share-alt %} **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- {% svgicon fa-ticket %} **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- {% svgicon fa-umbrella %} **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.


{% include info.html title="Creating new collections" text="When suffiecient entries in the Other collection necessitate a new collection. This aggregation may come from a significant number of tags, or keywords that would warrant the creation of a new collection" %}

In addition to organizing entries into different collections, a [typology of initiatives] has been established as a way to understand the background/classification/type/nature of the initiative.

## Typology of Initiatives
Iniatiatives are categorized depending on the type of organizaiton from which it stems from or where its support comes from.

- **Community/Grassroots**
- **Primary/Secondary School**
- **University/College**
- **Non-Profit/NGO**
- **For-Profit**
- **Museum**
- **State/Local Goverment**
- **Other**

{% include info.html title="Other initiative" text="The typology is much more flexible, and the other category necessitates an text answer" %}

## Anatomy of an Entry
The information contained in each of them is divided in two parts, the _data_ (data fields) and the _description_ (body of text).

### Data Fields
In the entry file, the data is collected between two lines of three consecutive dashes `---`called the _front matter_. In the webpage it is displayed in the _infobox_; a box in the top-right hand corner of the webpage. The data is aggregated through the following standard fields in order:

- **manager** is the username of the person responsable for the upkeep of that entry
- **logo**
- **title**
- **homepage**
- **since** and end date if it applies; these entries are "inactive". In the Events class, this reflects the event's calendar
- **expiration**
- **host**
- **type**
- **affiliates**
- Location:
  - **address**
  - **directions**
  - **city**
  - **postcode**
  - **state**
  - **country**
- **keywords**
- Social media:

### Body of Text
The body of text refers to the written description of the initiative.

  - **About**
  - **History**

### Obtaining the Dataset
There are three ways to download it.

- **Table of Entries**: Every search query that returns the table of entries can be downloaded as a CSV file.
- **Entire Table**: All the data in the 'front-matter' of the all entries is aggregated and compiled as a CSV file and can be downloaded as the [complete dataset].
- **Source**: The source-files of the entries are in the [sphere] repository in GitHub in each collection folder.
