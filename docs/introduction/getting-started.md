---
layout: docs
title: Getting Started
draft: true
toc: true
---


# Quick search
The search bar in the navigation menu at the top is to **quick search** for entries. Search by `title:` and/or location (`city:` and `country:`). The query will also display and search the _hosts_ of an entry if any. The search will try to autocomplete the query as five suggestions are listed below the search bar.

# Advanced search (browse)
Select the `BROWSE` dropdown in the top navigation menu. Select either to view all entries (`everything`), or narrow by _collection_.

Once in the _browse_ page, there are three main sections: the _query statistics_ the _browse menu_ and the _displayed results_.

## Query statistics
The number of entries found is displayed, as well as any additional _text search_ or _filter_ setting. The filters can be removed by selecting them, or select the `Erase all` to remove all filters.

![](/docs/introduction/filter-query.png){:.ui.image }

## Browse menu
A dropdown grey menu unfolds to display the various configuration options to browse entries.

- _Text search_ unfolds automatically. The query will search for _text_ inside the entries, as well as data such as `title:`, `city:`, `state:`, `state:`

![](/docs/introduction/query-menu.png){:.ui.large.image }

### Text search


### Filter results

![](/docs/introduction/filter-results.png){:.ui.huge.image }


### View settings

![](/docs/introduction/view-query.png){:.ui.big.image }

## Displayed results
See the results

![](/docs/introduction/list-hit.png){:.ui.large.image }

![](/docs/introduction/table-hit.png){:.ui.huge.image }



{% include messages/star.html title="Future hit map" text="The API for displaying results (Algolia instantsearch.js) is currently developing a GeoSearch widget, we are waiting for its release" %}


# Contributing to entries
ee our [Contributing Guide] for how to submit issues, and pull-requests.

# Contributing to the development


# Downloading the dataset
Go to the [sphere repository] and select `Clone or Download`, and then select `Download ZIP`. Only the `.md` files in the collection folders are part of the dataset

![](/docs/introduction/download-zip.png){:.ui.centered.medium.image }

Alternatively, download a `.json` file with all the _front matter_ data values:

{{site.data.elements.buttons.dataset_json}}
