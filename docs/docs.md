---
layout: docs
title: Welcome to the docs!
permalink: /docs/
draft: true
---

The documentation is meant primarily for contributors; whether you are just writing entries, or participating in the development of the project.

- **Introduction**
  - [Overview of DIYbiosphere][overview]
  - [Getting Started]
- **Basics** "blueprints" of the project
  - [Understanding Entries][entries]
  - [Configuration of the Software][software]
<!--  - [Tools in the Documentation][documentation] -->
  - [Design Elements][design]
- **Guides** reference manuals
  - [Contributing Guide]
  - [Writing Guide]
  - [Development Workflow][workflow]
  - [GitHub ELI5]
- **Tutorials** step-by-step instructions
  - [Adding an entry][add]
  - [Editing an entry][edit]
  - [Installing Locally][install locally]

---

### yaml frontmatter reference
these are all the fields you can use in the yaml-frontmatter of your markdown text file describing your project `md` .

note: 
- surround the yaml block with three dashes `---`. the top three should be on the first line of the file. the bottom should be directly below your yaml block.
- `#` is a comment in yaml. in the example below, remove the hash characters when you enter your information.
- look on github for real examples. (click the "raw" button when viewing the md file to see the yaml in plaintext).
- include a file named `logo.png` or `logo.jpg` or `logo.svg` in your folder. it will automatically be used on your page. [documentation for logos](docs/guides/writing/#logo)
- if you add a promotion, upload an image to your folder, then add it to the promotion block with a link pointing to `/<path>/<to></your></folder>/<imagename>.ext`. **do not use an external link pointing to externally hosted content!** [docs](/docs/guides/writing/#promotion-boxes)

**WARNING:** malformed yaml (incorrect syntax, often indentation-related) currently causes the build process to crash, breaking site updates. **Please verify your yaml is valid** before committing it. https://yamlchecker.com is an easy way to validate the syntax.

```yaml
---
#BASIC INFO
title: # Name of initiative
subtitle: # Short description. 200 characters max!
predecessor: # the previous name of the entry
successor: # the initiative that evolved from the initiative
type-org: # type is the social/legal organization, e.g.: company, university, museum, community, local government, etc.
#ACTIVITY
start-date: #ISO format: 'YYYY-MM-DD hh:mm', 'YYYY-MM-DD', 'YYYY-MM', or 'YYYY'
end-date: # ISO format: 'YYYY-MM-DD hh:mm', 'YYYY-MM-DD', 'YYYY-MM', or 'YYYY'
status: # add or let be AUTOMATIC!! 'active' by default, unless `end-date` in the past then 'inactive', or unless `start-date` in future then 'planned'. Useful when it is neither 'active', 'inactive', or 'planned'
#RELATIONSHIPS. Must either exist in the sphere repository, or have an external link in markdown
hosts: # Is the space or organization behind the initiative, e.g. a university or a makerspace
  -  # host. Use the exact 'title' of another entry to automatically display as a linked item
  - # another host
partners: # collaborators, partners, or affiliations worth mentioning
  -  # partner. If rendering a markdown link wrap in "" or ''
  - # another partner
#LOCATION
address: # street and number
directions: # specific directions to find location
city: # city name in english
state: # state, province, canton name in english
country: # country name in english
_geoloc: # Geolocation coordinates for mapping
  lat: # latitude number
  lng: # longitude number
#LINKS. Check the Writing Guide for all the brand icons available
website: # URL to main external website
email: # email
twitter: # Twitter URL
facebook: # Facebook URL
links:
  - URL: # URL to external link
    tooltip: # when mouse hovers, what the pop over tool tip will say
  - URL: # Adding more link icons
    tooltip: # Popover tip
#TAGS
tags:
  - # tag
  - # another tag
#PROMOTIONS
promotions:
  - text: # write here your promotion
    button: # text in the button
    URL: # link for the button
    image: # path to image for landing page carousel, like so: /<path>/<to>/<your>/<folder>/<imagename.ext>
  - text: # second promotion starts with another dash
    button: # text in the button
    URL: # link for the button
    color: #specify a background color instead of an image. wrap the color in '', e.g. '#43BB7A'    
---
```
