---
layout: docs
title: Writing Entries
toc: true
---

# Anatomy of an entry
An entry is an editable text **file** rendered into various elements in a **webpage**. Check The Avocado Lab entry as an example of how a [file](https://raw.githubusercontent.com/DIYbiosphere/sphere/master/docs/tutorials/AvocadoLab/AvocadoLab.md) is rendered into a [webpage](/docs/tutorials/AvocadoLab)

# Sections of a File
Basically the file has two sections:

- the **front matter** is between two lines of three dashes `---` representing datasets in simple `key: value` pairs written in _YAML_ ([Learn yml](https://learnxinyminutes.com/docs/markdown/))

```yml
---
key: value
list:
  - one
  - two
map:
  first: 1
  last: 9
---
```

- the **markdown text** contains the description, photos and other content of the entry written in simple _Markdown_ ([Learn md](https://learnxinyminutes.com/docs/markdown/))

```md
# Heading 1
Text with *italics*, and **bold**. [Link](http://elsewhere.com)

## Heading 2
- List
```

You can use the simple [entry template] or the [complete template]

# Elements in a webpage
The rendered webpage can have several elements taken from the _front matter_ or rendered automatically. Below is an image of the Avocado Lab.

![](/docs/tutorials/AvocadoLab/side-by-side.png){:.ui.image }

## Infobox
A box on the right hand side of the entry, or at top in mobile view. It shows comparable data across all entries. The most outstanding parts are the _logo_ and the _data table_

### Logo
There are three ways to render the logo: (1) Add image file to the folder of your initiative in the repository with the name `logo`. (2) add the image path in the repository or (3) the external URL. Image format must be strictly: `.png`, `.jpg`, or `.svg`

### Data Table
The current data variables that are mandatory are:
```yaml
title: # Name of initiative
website: # Main external website with more information
start-date: #ISO format: 'YYYY-MM-DD hh:mm', 'YYYY-MM-DD', 'YYYY-MM', or 'YYYY'
type-org: # type is the social/legal organization, e.g.: company, university, museum, community, local government, etc.
country: # country name in english
```
If applicable, the following data variables are also available
```yaml
subtitle: # Short description. 200 characters max!
predecessor: # the previous name of the entry
successor: # the initiative that evolved from the initiative
end-date: # ISO format: 'YYYY-MM-DD hh:mm', 'YYYY-MM-DD', 'YYYY-MM', or 'YYYY'
status: # AUTOMATIC!! 'active' by default, unless `end-date` in the past then 'inactive', or unless `start-date` in future then 'planned'. Useful when it is neither 'active', 'inactive', or 'planned'
hosts: # Is the space or organization behind the initiative, e.g. a university or a makerspace
  -  # host. Use the exact 'title' of another entry to automatically display as a linked item
  - # another host
partners: # collaborators, partners, or affiliations worth mentioning
  -  # partner. If rendering a markdown link wrap in "" or ''
  - # another partner
address: # street and number
directions: # specific directions to find location
city: # city name in english
state: # state, province, canton name in english
country: # country name in english
_geoloc: # Geolocation coordinates for mapping
  lat: # latitude number
  lng: # longitude number
```

### Tags
Are used as keywords to easily categorize entries. A good rule of thumb is to have maximum 10 tags. In addition, it is good practice to search the current tags used by other entries and reuse them if applicable.

```yaml
tags:
  - # tag
  - # another tag
```

### Links
_Links_ to any kind of website, social media, or contact information can be presented here.

#### Website
The _website_ renders twice. Once at the top of the infobox, under the logo, and on the bottom along with the _brand icons_ as: <i class="fas fa-home" style="color:grey"></i> `website: `

#### Brand icons
These are presently available:

<i class="fas fa-envelope" style="color:grey"></i>` email: `
| <i class="fas fa-envelope-open" style="color:grey"></i>` mailing-list: `
| <i class="fas fa-rss-square" style="color:grey"></i>` rss: `
| <span class="fa-layers fa-fw"><i class="fas fa-comment" style="color:grey"></i><span class="fa-layers-text fa-inverse" data-fa-transform="shrink-10 up-1" style="font-weight:900">blog</span></span>` blog: `
| <i class="fab fa-medium" style="color:grey"></i>` medium: `
| <i class="fab fa-tumblr" style="color:grey"></i>` tumblr: `
| <i class="fas fa-comments" style="color:grey"></i>` forum: `
| <i class="fab fa-facebook" style="color:grey"></i>` facebook: `
| <span class="fa-layers fa-fw"><i class="fas fa-comment" style="color:grey"></i><i class="fa-inverse fab fa-facebook-f" data-fa-transform="shrink-6"></i></span>` facebook-group: `
| <i class="fab fa-github" style="color:grey"></i>` github: `
| <i class="fab fa-gitlab" style="color:grey"></i>` gitlab: `
| <i class="fab fa-bitbucket" style="color:grey"></i>` bitbucket: `
| <i class="fab fa-twitter" style="color:grey"></i>` twitter: `
| <i class="fab fa-google-plus" style="color:grey"></i>` google-plus: `
| <span class="fa-layers fa-fw"><i class="fas fa-comment" style="color:grey"></i><i class="fa-inverse fab fa-google" data-fa-transform="shrink-6 right-1"></i></span>` google-group: `
| <i class="fab fa-instagram" style="color:grey"></i>` instagram: `
| <i class="fab fa-flickr" style="color:grey"></i>` flickr: `
| <i class="fab fa-vimeo" style="color:grey"></i>` vimeo: `
| <i class="fab fa-youtube" style="color:grey"></i>` youtube: `
| <i class="fab fa-slack" style="color:grey"></i>` slack: `
| <i class="fab fa-gitter" style="color:grey"></i>` gitter: `
| <i class="fab fa-rocketchat" style="color:grey"></i>` rocketchat: `
| <i class="fab fa-trello" style="color:grey"></i>` trello: `
| <i class="fab fa-dropbox" style="color:grey"></i>` dropbox: `
| <i class="fab fa-google-drive" style="color:grey"></i>` google-drive: `
| <span class="fa-layers fa-fw"><i class="fas fa-rectangle-landscape" style="color:grey"></i><span class="fa-layers-text fa-inverse" data-fa-transform="shrink-10" style="font-weight:900">wiki</span></span>` wiki: `
| <i class="fab fa-linkedin" style="color:grey"></i>` linkedin: `
| <i class="fab fa-angellist" style="color:grey"></i>` angellist: `
| <i class="fab fa-meetup" style="color:grey"></i>` meetup: `
| <i class="fab fa-pinterest" style="color:grey"></i>` pinterest: `
| <i class="fab fa-kickstarter" style="color:grey"></i>` kickstarter: `
| <i class="fab fa-patreon" style="color:grey"></i>` patreon: `
| <i class="fab fa-paypal" style="color:grey"></i>` paypal: `

#### Link icon
For adding a link that doesn't have an icon (maybe just yet) and it renders as: <i class="fas fa-link" style="color:grey"></i>

```yaml
links:
  - URL: # URL to external link
    tooltip: # when mouse hovers, what the pop over tool tip will say
  - URL: # Adding more link icons
    tooltip:    
```

## Promotion boxes
_Promotions_ are boxed items below the the _infobox_, or below the _markdown text_ in mobile. Here you can promote whatever you want, your meetups, classes, to join the project, etc. You can add as many as you want, but a good rule of thumb is no more than 3.

To add a promotion you must write in the front matter:

```yaml
promotions:
  - text: # write here your promotion
    button: # text in the button
    URL: # link for the button
    image: # path to the image in the background
  - text: # second promotion starts with another dash
    button:
    URL:
    color: #specify a background color instead of an image. wrap the color in '', e.g. '#43BB7A'     
```

The rendered box will first try to grab the `promotions.image` key, then the `promotions.color` key. If these are not specified the background color will be grey.

{% include messages/star.html title="Get your promotion in the landing page!" text="Entries can have their promotions featured in the landing page carousel if they contain a background image, or if the entry has a header image" %}


## Header image
To display a _header_ image at the top of your entry, you can either save an image in the folder of your initiative with the name 'header' in `.png`, `.jpg` or `.svg` format, or add the `header: ` key in the front matter with a link to the image, e.g. `header: http://linktoheaderimage.jpg`. This is the same as the _logo_

{% include messages/star.html title="Displaying an image in the browse page" text="You can also add a **thumbnail** image to the folder. Although it is not displayed in the entry, it is meant to be showed in the List of Entries page. The page grabs images in this order: _thumbnail_, _logo_, _header_, a dummy image." %}

## Draft message
To display a draft message at the top, just add to the front matter:

```yaml
draft: true
```

## GitHub Buttons
This section is rendered automatically, showing the last date of editing.

- <i class="fal fa-edit" style="color:grey;"></i> redirects to the github file for editing
- <i class="fal fa-bug" style="color:grey;"></i> if it exists, redirects to the github issue to discuss editing in the [diybiosphere/sphere] repository, if not, then to create a new one.
- <i class="fal fa-comments" style="color:grey;"></i> if it exists, redirects to the github issue for comments in the [diybiosphere/comments] repository, if not, then to create a new one

## Title and subtitle
The _subtitle_ is a short description, or a tag line of max 200 characters.

The _title_ is the name of your entry. If you were ever to change it, keep in mind that it might be _mentioned_ by other entries (see below). To check, go to the repository and search for the current name of the entry. If it is mentioned in the _front matter_ of other files, consider changing it in those files as well.

{% include messages/exclamation.html title="Be careful changing the title after" text="If you want to change the title of an entry, consider it might be mentioned in another entry (see _Mentions_), and have comments enables (see _Comments_). So make sure to change it everywhere in the repository" %}

## Markdown text
The main content of the entry. Write whatever seems pertinent to the entry. Add tables, images, titles, etc.


### Wiki-style links
It is possible to have internal _wiki-style links_ that are automatically generated by wrapping it in brackets. To do so, you must edit the `_references.md` file y the [sphere repository] and add something like:

```markdown
[Avocado Lab]: /docs/tutorials/AvocadoLab/
```

So when you write:
- `[Avocado Lab]` renders => [Avocado Lab]
- `[go to Avocado Lab entry][Avocado Lab]` renders => [go to Avocado Lab entry][Avocado Lab]

### Formatting elements
To format an image, table, etc., add `{:.class}` after the element. The [Semantic-UI](https://semantic-ui.com/) framework makes formatting easy.

![](/docs/tutorials/AvocadoLab/AvocadoLab-logo.png){:.ui.small.bordered.image }

```md
![](/docs/tutorials/AvocadoLab/avocadolab-logo.png){:.ui.small.bordered.image}
```

### Labeled media
Adding a video or an image with a caption is easy using the following code and filling in `media=` with either `"video"` or `"image"`; `class=` for size and position mainly, `path=`, and `label=` (i.e. substituting the red text)

```liquid
{%raw%}{% include elements/labeled-media.html media="video" class="medium centered" path="/assets/videos/add-entry-users.mp4" label="TThis is a label" %}{%endraw%}
```

{% include elements/labeled-media.html media="video" class="medium centered" path="/assets/videos/add-entry-users.mp4" label="This is a label" %}

### Creative Commons Images
{% include elements/cc-image.html class="medium right floated" path="/docs/tutorials/AvocadoLab/AvocadoLab-header.png" license="by-nc" sourceURL="https://www.freepik.com/free-vector/hand-painted-green-leaves-pack_832587.htm#term=tropical%20leaves&page=1&position=3" %}

All Content Contributed to DIYbiosphere is dedicated to the public domain (see our [Terms of Use]). Contributions that are shared/uploaded should explicitly note their copyright terms if the author(s) do not waive authorship as per our [Contributor Terms].

Works licensed under the Creative Commons can be included in Contributions but must note their copyright using the following element and filling in `class=` for size and position,`path=`,`license=`, and `sourceURL=` (i.e. substituting the red text)


```liquid
{%raw%}{% include elements/cc-image.html class="medium right floated" path="/docs/tutorials/AvocadoLab/AvocadoLab-header.png" license="by-nc" sourceURL="https://www.freepik.com/free-vector/hand-painted-green-leaves-pack_832587.htm#term=tropical%20leaves&page=1&position=3" %}{%endraw%}
```

## Mentions
When another entry mentions by `title: ` another entry either in `partners: ` or `hosts: ` it is automatically showed in this section. This way entries can show how other entries connect to them, even if they don't state it explicitly.

## Comments
Are rendered from comments of a GitHub Issue in the [diybiosphere/comments] repository. To enable them in the webpage:

1. Open a GitHub Issue in the [diybiosphere/comments] repo
2. Title the issue with the same `title: ` of the entry
3. Open `_data/entry_issue.yml` from [diybiosphere/sphere] repository.
4. Add the following to the file:

```yaml
- page_title: # Title of page (exactly)
  comments_issue: # issue number of comments in diybiosphere/comments repo
  edit_issue: # issue number discussing editing in diybiosphere/sphere repo
```

{:start="5"}
5. Commit and wait for Travis to build (may take a few minutes)
