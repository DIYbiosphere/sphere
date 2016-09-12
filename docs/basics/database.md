---
layout: docs
permalink: /docs/help/basics/database/
title: Basics of the Database
---

_In this section we detail the basic structure and organization of the database_

The database encompases all the information about DIYbio initiatives added. This information is collected and edited through text files in the sphere repository in GitHub, and is displayed as webpages at sphere.diybio.org.

## Entries
All DIYbio initiatives have their own entry in the database. The information contained in each of them is divided in two parts, the _data_ and the _description_.

> Note: Entries are files and webpages
Entries exist as markdown files in the repo. Inserting Jekyll's front matter into the beggining of the file converts it's content into a pretty webpage.

### Data Fields
In the file, the data is collected between two lines of three consecutive dashes `---`called the _front matter_. In the webpage it is displayed in the _infobox_; a box in the top-right hand corner of the webpage. The data is aggregated through the following standard fields in order:

- **manager** is the username of the person responsable for the upkeep of that entry
- **logo**
- **title**
- **homepage**
-  **since** founding date
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

  - The  **starting date** and end date if it applies; these entries are "inactive". In the Events class, this reflects the event's calendar
  - the **host**,
  - the **type** of initiative
  - the **affiliates**
  - the  **address** and **directions**
  - the  location which includes **city**, **postcode**, **state**, and **country**
  - the **keywords**
  - the **social media** and more...


#### Types of Initiatives
- Community
-

### Body of Text
The body of text refers to the written description of the initiative.

  - **About**
  - **History**

## Collection of Entries
The entries are divided in eight collections:

- **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- **Startups**: are entrepreneurial ventures and generally concern products or services
- **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- **Incubators**: are organizations and spaces that help projects and startups to develop
- **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.
