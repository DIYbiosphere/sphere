---
layout: docs
title: Getting Started
draft: true
toc: true
---


# Searching for entries
## Quick search
The search bar in the navigation menu at the top is to **quick search** for entries. Search by `title:` and/or location (`city:` and `country:`). The query will also display and search the `hosts:` of an entry if any. The search will try to autocomplete the query as five suggestions are listed below the search bar.

## Advanced search (browse)
Select the `BROWSE` dropdown in the top navigation menu. Select either to view all entries (`everything`), or narrow by _collection_.

Once in the _browse_ page, there are three main sections: the **query statistics** the **browse menu** and the **displayed results**.

### Query statistics
The number of entries found is displayed, as well as any additional **text search** or **filter results** **view settings**. The filters can be removed by selecting each, or select the `Erase all` to remove all filters.

![](/docs/introduction/filter-query.png){:.ui.bordered.centered.image }

### Browse menu
A dropdown grey menu unfolds to display the various configuration options to browse entries.

- **Text search** unfolds automatically. The query will search for _text_ inside the entries, as well as data such as `title:`, `city:`, `state:`, etc.

![](/docs/introduction/query-menu.png){:.ui.large.bordered.centered.image }

- **Filter results** by `status:`, `collection:`, `type:`, `country:`, and `tags:`. Each filter selection works with an OR selection.


![](/docs/introduction/filter-results.png){:.ui.huge.bordered.centered.image }


_ **View Settings** to select _number of page_, _results per page_, _sorting_, and _view format_

![](/docs/introduction/view-query.png){:.ui.big.bordered.centered.image }

### Displayed results
See the results in two formats: as a _list_, or a _table_

![](/docs/introduction/list-hit.png){:.ui.large.bordered.centered.image }

![](/docs/introduction/table-hit.png){:.ui.huge.bordered.centered.image }


{% include messages/star.html title="Future hit map" text="The API for displaying results (Algolia instantsearch.js) is currently developing a GeoSearch widget, we are waiting for its release" %}


# Contributing to the project
## Writing Entries
Following the tutorials you can [add] a new entry: whether it's your initiative or someone else's,  or [edit] content: misspellings, outdated or wrong information, help us maintain the project.

[Join] the community to have direct _write_ access (no pull requests needed).

The [Writing Guide] is a good reference material for writing awesome entries.

Don't forget to review the [Contributing Guide] for best practices.

## Participate in the development
Check out our [GitHub Issues]. Submit an issue with a suggestion or report a bug. Help by answering, or voting on issues. Tackle issues yourself and commit changes to the repo!

# Downloading the dataset
Go to the [sphere repository] and select `Clone or Download`, and then select `Download ZIP`. Only the `.md` files in the collection folders are part of the dataset

![](/docs/introduction/download-zip.png){:.ui.centered.medium.image }

Alternatively, download a `.json` file with all the _front matter_ data values:

{{site.data.elements.buttons.dataset_json}}
