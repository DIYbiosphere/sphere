---
layout: docs
title: Understanding Entries
draft: true
---

Each initiative added to the repository has its own _Entry_. Each entry has its own folder in the [sphere repository][gh_repo]. The folder can have images and must have a text file in markdown to be rendered as a webpage accessible at [sphere.diybio.org][sphere].

## Entry Collections
A series of **collections** aggregate similar initiatives. The ones currently in use are:

- <i class="far fa-briefcase icon"></i> **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- <i class="far fa-rocket icon"></i> **Startups**: are entrepreneurial ventures and generally concern products or services
- <i class="far fa-flask icon"></i> **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- <i class="far fa-leaf icon"></i> **Incubators**: are organizations and spaces that help projects and startups to develop
- <i class="far fa-users icon"></i> **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- <i class="far fa-share-alt icon"></i> **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- <i class="far fa-calendar-alt icon"></i> **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- <i class="far fa-umbrella icon"></i> **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.

### Possible Collections
As the number of entries grows, we may need to add more. Some that have been proposed are:

- <i class="far fa-shopping-basket icon"></i> **Products**: physical things that can be purchased
- <i class="far fa-cogs icon"></i> **Services**: abstract things that can be purchased
- <i class="far fa-microchip icon"></i> **Hardware**: instruments, devices, etc.
- <i class="far fa-code icon"></i> **Software**:
- <i class="far fa-list-ol icon"></i> **Protocols**:
- <i class="far fa-id-card icon"></i> **Profiles**: people and biohackers
- <i class="far fa-paint-brush icon"></i> **BioArt**: Art pieces or performances about biology and biotechnology
- <i class="far fa-newspaper icon"></i> **Reads**: Media, scholarly, and other articles and important posts on DIYbio

## Anatomy of an Entry File
Each entry file has two sections. The first section is the _front matter_ and is in between two lines of three dashes `---`, storing data and other variables. The second section is the _markdown text_, which contains the description, photos and other content of the entry. The front matter and the markdown text are used to render the file into a webpage in HTML.

### Front Matter
The front matter is written in _YAML_, a programming language that declares data in a simple format (simple [YAML guide](https://learnxinyminutes.com/docs/yaml/)). The basic format is `key: value`. See the example below:

```yaml
---
title: Avocado Lab # simple key: value pair. there should be a space after the colon ': '
subtitle: "Doing everything with: avocados" # use quotation marks if using a colon and space
tags: # for lists
  - food lab
  - citizen science
host-org: "[Tree Labs](http://treelabs.org)" # to render in markdown, put between quotation marks
affiliates:
  - title: Fruit Network
    website: http://fruitnetwork.net
  - title: Green Foods
    website: http://greenfoods.com    
---

```

There are a few keys that are essential

### Markdown Text
The second section is

```markdown


```



## Rendering the Webpage
Keys are rendered into the _infobox_, _social icons_, _tags_, _promotions_, and others.
