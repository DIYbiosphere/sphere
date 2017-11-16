---
title: Entries in DIYbiosphere
layout: docs
crumb: basics
comments_issue: 15
edit_issue: 16
summary: Components and organization of Entries
---

Each initiative has its own _Entry_. Entries are accessible as webpages at [sphere.diybio.org][sphere] and as text files in the [sphere repository][gh_repo] in GitHub where they can be edited as well (see how to [edit content][edit]).

## Entry Collections
A series of _Entry Collections_ are used to aggregate similar initiatives.

- <i class="travel icon"></i> **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- <i class="shop icon"></i> **Products**: are consumer products and services that are produced by or for the DIYbio community
- <i class="rocket icon"></i> **Startups**: are entrepreneurial ventures and generally concern products or services
- <i class="lab icon"></i> **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- <i class="leaf icon"></i> **Incubators**: are organizations and spaces that help projects and startups to develop
- <i class="users icon"></i> **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- <i class="share alternate icon"></i> **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- <i class="ticket icon"></i> **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- <i class="umbrella icon"></i> **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.

{% include info.html title="Jekyll Collections" text="As [jekyll collections](https://jekyllrb.com/docs/collections/) they are located in the root folder preceded by an underscore, e.g.: `_labs` and the collections are declared in the `_config.yml` file." %}

## Type of Organization
Initiatives are categorized on the _Type of Organization_:

- **Community/Grassroots**
- **Primary/Secondary School**
- **University/College**
- **Non-Profit/NGO**
- **For-Profit**
- **Museum**
- **State/Local Goverment**
- **Other**

## Anatomy of an Entry
The information contained in each entry is divided in two parts, the _data_ (data fields or front matter) and the _description_ (body of text).
<i class="square outline icon"></i> infobox <i class="align left icon"></i> body of text

### Entry Data
An entry shows data in the _infobox_; a box in the top-right hand corner of the webpage. In the entry's file, the data is collected through pre-defined variables in the _front matter_; which is the text between two lines of three consecutive dashes `---`. Not all the variables in the front matter are shown in the infobox. **Variables** in the front matter and the name of the _**data field**_ in the infobox can be different, these are all of them:


### Entry Description
The body of text refers to the written description of the initiative.

  - **About**
  - **History**
