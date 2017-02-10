---
layout: docs
permalink: /docs/basics/library/
crumb: basics
title: Basics of the Library
summary: Components and organization of the Library
---


The library encompases all the information on the DIYbio initiatives added to the DIYbiosphere project. Each initiative has its own _Entry_ for composing and displaying its particular information. Entries are accessible as webpages at [sphere.diybio.org][sphere] and as text files in the [sphere repository][gh_repo] in GitHub, where they can be edited as well (see how to [edit an entry][edit]).

## Entry Collections
To facilitate the organization of the entries in the Library, a series of _Entry Collections_ are used to aggregate similar initiatives.

- <i class="travel icon"></i> **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- <i class="rocket icon"></i> **Startups**: are entrepreneurial ventures and generally concern products or services
- <i class="lab icon"></i> **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- <i class="leaf icon"></i> **Incubators**: are organizations and spaces that help projects and startups to develop
- <i class="users icon"></i> **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- <i class="share alternate icon"></i> **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- <i class="ticket icon"></i> **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- <i class="umbrella icon"></i> **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.


{% include info.html title="Creating new collections" text="When sufficient entries in the Other collection necessitate a new collection. This aggregation may come from a significant number of keywords that would warrant the creation of a new collection" %}

## Type of Organization
In addition to organizing entries into different collections, initiatives are categorized on the _Type of Organization_ from which it stems or where its support comes from.

- **Community/Grassroots**
- **Primary/Secondary School**
- **University/College**
- **Non-Profit/NGO**
- **For-Profit**
- **Museum**
- **State/Local Goverment**
- **Other**

## Anatomy of an Entry
The information contained in each entry is divided in two parts, the _data_ (data fields) and the _description_ (body of text).

### Entry Data
In the entry's webpage, its data is displayed in the _infobox_; a box in the top-right hand corner of the webpage. In the entry's file, the data is collected through pre-defined variables in the _front matter_; which is the text between two lines of three consecutive dashes `---`. Not all the variables in the front matter are show in the infobox. Following is a list of the name of the  **variables** in the front matter, the name of the _**data field**_ in the infobox if different, and stating whether it should be considered (optional) or not.

- **manager** is the github username of the person responsable for the upkeep of that entry. Learn more about [Managers]
- **logo** URL to an image of the initiative's logo, preferably on a white or transparent background. (optional)
- **profile-pic** URL to an image of the initative's prefered profile picture. (optional)
- **title** the name of the initiative
- **summary** A short description of the initiative, 140 characters long
- **website** the main homepage of the initiative. It can be a facebook group or meetup if that's the main website
- **start-date**/**_Start Date_** the year the initiative was founded. Only in the case of events it should include month and day with the following format: `YYYY-MM-DD`
- **end-date**/**_End Date_** the year the initiative was terminated. Only in the case of events it should include month and day with the following format: `YYY-MM-DD`. (only if appropriate)
- **host-org**/**_Host Organization_** the organization or space that hosts or support the initiative, like a hackerspace or a university. (only if appropriate)
- **type-org**/**_Type_** the type of organization of the initiative
- **affiliates** a list of networks, partners, etc.
- **_Location_**
  - **address** Street name and number
  - **directions** additional directions like floor, or second door to the right, etc. (optional)
  - **city** name of the city in English
  - **postcode** postal code number
  - **state** or canton or province (only if appropriate)
  - **country** name of the country in English
- **keywords** a list of tags, or kerywords that should be associated with the entry and others like it.
- Social media: a long list of social media and communication platforms like email, facebook, meetup, etc.

### Entry Description
The body of text refers to the written description of the initiative.

  - **About**
  - **History**

### Obtaining the Dataset
There are three ways to obtain it.

- **Library Search**: Every search query that returns the table of entries can be downloaded as a CSV file.
- **Complete Dataset**: All the data in the 'front-matter' of the all entries is aggregated and compiled as a CSV file and can be downloaded as the [complete dataset].
- **Source Files**: The source-files of the entries are in the [sphere] repository in GitHub in each collection folder.
