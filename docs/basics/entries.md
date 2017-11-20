---
layout: docs
comments_issue: 15
edit_issue: 16
title: Entries in DIYbiosphere
draft: true
---

Each initiative added to the repository has its own _Entry_. These are added as text files in the [sphere repository][gh_repo] which are rendered as webpages accessible at [sphere.diybio.org][sphere].

## Entry Collections
A series of _Collections_ are used to aggregate similar initiatives.

- <i class="far fa-briefcase icon"></i> **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- <i class="far fa-rocket icon"></i> **Startups**: are entrepreneurial ventures and generally concern products or services
- <i class="far fa-flask icon"></i> **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- <i class="far fa-leaf icon"></i> **Incubators**: are organizations and spaces that help projects and startups to develop
- <i class="far fa-users icon"></i> **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- <i class="far fa-share-alt icon"></i> **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- <i class="far fa-calendar-alt icon"></i> **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- <i class="far fa-umbrella icon"></i> **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.

## Anatomy of an Entry File
Each entry file has two sections. The first section is the _front matter_ and is in between three dashes `---`, it stores data and other variables. The second section is the _markdown text_, which contains the description, photos and other content of the entry. The platform interprets the front matter and the markdown text to render the file into a webpage.

### Front Matter
The front matter is written in _YAML_, a programming language that declares data in a simple format (simple [YAML guide](https://learnxinyminutes.com/docs/yaml/)). The basic format is `key: value`.

```yaml
---
key: value
list:
  - one item
  - two item
contacts:
  - name: Frida
    email: frida@kahlo.mx
    address: Mexico
special-characters: 'values with special characters (:\/-_?...) must be enclosed in quotation marks'    
---

```

### Markdown Text
The body of text refers to the written description of the initiative.

  - **About**
  - **History**


## Rendering the webpage
Keys are rendered into the _infobox_, _social icons_, _tags_, _promotions_, and others.
