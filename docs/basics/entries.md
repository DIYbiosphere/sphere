---
title: Entries in DIYbiosphere
permalink: "/docs/basics/entries/"
layout: docs
crumb: basics
summary: Components and organization of Entries
---

Each initiative has its own _Entry_. Entries are like wiki articles and are accessible as webpages at [sphere.diybio.org][sphere] and as text files in the [sphere repository][gh_repo] in GitHub where they can be edited as well (see how to [edit content][edit]).

## Entry Collections
To facilitate the organization of the entries in the Library, a series of _Entry Collections_ are used to aggregate similar initiatives.

- <i class="travel icon"></i> **Projects**: have particular aims, such as designing an instrument or an educational workshop.
- <i class="shop icon"></i> **Products**: are consumer products are services that are produced by or for the DIYbio community
- <i class="rocket icon"></i> **Startups**: are entrepreneurial ventures and generally concern products or services
- <i class="lab icon"></i> **Labs**: are dedicated physical spaces with materials and equipment dedicated to support DIYbio related activities. Labs can be static or mobile.
- <i class="leaf icon"></i> **Incubators**: are organizations and spaces that help projects and startups to develop
- <i class="users icon"></i> **Groups**: are associations of people (online and offline) that are interested in DIYbio related topics or activities. A group does not have a dedicated Lab space, but they may plan to have one.
- <i class="share alternate icon"></i> **Networks**: a website, service or organization that facilitates communication and collaboration between individuals and organizations with interests in DIYbio.
- <i class="ticket icon"></i> **Events**: Global or regional events that are by and/or for the DIYbio community, like (un)conferences, camps, hackathons, and accelerators. Only include if something shareable is produced, like proceedings, videos or posters.
- <i class="umbrella icon"></i> **Others**: Is an umbrella term for all the rest. Eventually as new entries begin to define themselves a new collection will be created to accommodate them.

### Collections in Jekyll
The collections work like [jekyll's collections](https://jekyllrb.com/docs/collections/). They are located in the root folder and must be preceded by an underscore, e.g.: `_labs` and the collections are declared in the `_config.yml` file.

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

### Type-org in Jekyll


## Anatomy of an Entry
The information contained in each entry is divided in two parts, the _data_ (data fields or front matter) and the _description_ (body of text).
<i class="square outline icon"></i> infobox <i class="align left icon"></i> body of text

### Entry Data
An entry shows data in the _infobox_; a box in the top-right hand corner of the webpage. In the entry's file, the data is collected through pre-defined variables in the _front matter_; which is the text between two lines of three consecutive dashes `---`. Not all the variables in the front matter are shown in the infobox. **Variables** in the front matter and the name of the _**data field**_ in the infobox can be different, these are all of them:

<table class="ui small celled table">
  <thead>
    <tr>
      <th>Front Matter</th>
      <th>Entry</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>manager:</td>
      <td class="negative"></td>
      <td> is the github username of the person responsable for the upkeep of that entry. Learn more about [Managers]</td>
    </tr>
    <tr>
      <td>title:</td>
      <td></td>
      <td>the name of the initiative</td>
    </tr>
    <tr>
      <td>summary:</td>
      <td></td>
      <td>A short description of the initiative, 140 characters long</td>
    </tr>
    <tr>
      <td>motto:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>purpose:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>website:</td>
      <td></td>
      <td>the main homepage of the initiative. It can be a facebook group or meetup if that's the main website</td>
    </tr>
    <tr>
      <td>logo:</td>
      <td></td>
      <td>URL to an image of the initiative's logo, preferably on a white or transparent background. (optional)</td>
    </tr>
    <tr>
      <td>profile-pic:</td>
      <td>Unknown</td>
      <td>URL to an image of the initative's prefered profile picture. (optional)</td>
    </tr>
    <tr>
      <td>predecessor:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>sucessor:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>status:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>start-date:</td>
      <td>Start Date:</td>
      <td>the year the initiative was established. Only in the case of events it should include month and day with the following format: `YYYY-MM-DD`</td>
    </tr>
    <tr>
      <td>end-date:</td>
      <td>End Date:</td>
      <td>the year the initiative was terminated. Only in the case of events it should include month and day with the following format: `YYY-MM-DD`. (only if applicable)</td>
    </tr>
    <tr>
      <td>main-org:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>host-org:</td>
      <td>Host Organization:</td>
      <td>the organization or space that hosts or support the initiative, like a hackerspace or a university. (only if applicable)</td>
    </tr>
    <tr>
      <td>type-org:</td>
      <td>Type:</td>
      <td>the type of organization of the initiative</td>
    </tr>
    <tr>
      <td>affiliations:</td>
      <td>Affiliations:</td>
      <td>a list of networks, partners, etc.</td>
    </tr>
    <tr>
      <td>budget:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>earnings:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>membership:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>num-staff:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>num-volunteers:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>founders:</td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>authors:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>latitude:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>longitude:</td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>work-area:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>address:</td>
      <td></td>
      <td>Street name and number</td>
    </tr>
    <tr>
      <td>directions:</td>
      <td></td>
      <td>additional directions like floor, or "second door to the right", etc. (optional)</td>
    </tr>
    <tr>
      <td>city:</td>
      <td></td>
      <td>name of the city in English</td>
    </tr>
    <tr>
      <td>postcode:</td>
      <td></td>
      <td>postal code number</td>
    </tr>
    <tr>
      <td>state:</td>
      <td></td>
      <td>or canton or province (only if applicable)</td>
    </tr>
    <tr>
      <td>country:</td>
      <td></td>
      <td>name of the country in English</td>
    </tr>
    <tr>
      <td>keywords:</td>
      <td></td>
      <td>a list of tags, or keywords that should be associated with the entry and others like it.</td>
    </tr>
  </tbody>
</table>




### Links and Social Media
a long list of social media and communication platforms like email, facebook, meetup, etc.

<table class="ui small celled table">
  <thead>
    <tr>
      <th>Front Matter</th>
      <th>Entry</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>basecamp:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>blog:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>email:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>etherpad:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>facebook:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>facebook-group:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>forum:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>flickr:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>github:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>gitter:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>google+:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>google-group:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>hackpad:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>instagram:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>irc:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>linkedin:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>medium:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>meetup:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>newsletter:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>pinterest:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>piratepad:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>rocketchat:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>rss:</td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>slack:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>snapchat:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>telephone:</td>
      <td></td>
      <td></td>
    </tr>
    </tr>
    <tr>
      <td>trello:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>tumblr:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>twitter:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>vimeo:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>vk:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>youtube:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>yk:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>wechat:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>wiki:</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>wordpress:</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>


### Entry Description
The body of text refers to the written description of the initiative.

  - **About**
  - **History**
