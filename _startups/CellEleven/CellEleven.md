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
