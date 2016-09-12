---
layout: docs
permalink: /docs/intro/getting-started/
title: Getting Started
---

> Please revise Draft!

This is the kickstart guide to getting familiar with _using_ the database, and _contributing_ to the project of the DIYbiosphere. For a more general introduction of the project see our [Overview]. Look out for [helpful hints].

## Using the Database
The database refers to all the entries of DIYbio initiatives.

### Searching Through the Database
You can access the entries at: [sphere.diybio.org]. In the home page you can directly search for entries with keywords (i.e. Lab, Geneva, Bioscope) or do an Advanced Search with predetermined filters. Your Search Query will return a Table of Entries that match your search query. You can further search, filter and sort the table. The search bar in the navigation bar searches throughout all the site including the documentation.

### Structure of Entries
Entries are divided into eight collections: _Projects_, _Startups_, _Labs_, _Incubators_, _Groups_, _Networks_, _Events_, and _Others_. For a more detailed description of these see the [collection of entries].

Each entry has two parts: a body of text that contains the descriptive content of the initiative (About, History), and an infobox in the top right-hand corner which contains the entry's data. Learn more about the [fields in infobox].

### Obtaining the Dataset
The data collected in the infobox is completely open and free to (re)use. There are three ways to download it.

- **Table of Entries**: Every search query that returns the table of entries can be downloaded as a CSV file.
- **Entire Table**: All the data in the 'front-matter' of the all entries is aggregated and compiled as a CSV file and can be downloaded as the [complete dataset].
- **Source**: The source-files of the entries are in the [sphere] repository in GitHub in each collection folder.


## Contributing to the Database
The **only requirement** you need to contribute is a GitHub account, so [Sign up] if you don't have one. If you are new to GitHub we made an [ELI5 guide] (Explain like I'm 5) for the utterly confused. :smile:

{% include _notices/note.html title="By contributing you agree to..." text="Abide by our [Code of Conduct](/about/coc/), and consent to our [Copyright terms](/about/license/)." %}

### _What_ can you contribute to?
There are four types of work in the project; briefly explained with links for each to a more detailed description of their configurations.

- **[Database]**: is the entries of the DIYbio initiatives. These are plain text files in Markdown. No skills required to contribute! Learn how [simple markdown] really is!
- **[Documentation]**: or **docs**, is all the explanatory material related to the project (like guides and tutorials). These are also plain text files.
- **[Development]**: is the code that converts the text files into data and a readable website. Coding skills are helpful.
- **[Design]** is all about the user experience, the aesthetics and interface of the website. Design skills recommended.

### _How_ do you contribute
There are many ways you can contribute to the project. Please follow our [Contributing guidelines]. We organize the development of the project with [Issues]:

  - **Submit a a new issue**: with your [complaint], [question], [idea]. Someone from the development community will hopefully pick it up soon!
  - **Comment, answer, and vote**: See how you can help out by moving our issues along: answer a [question], [vote] on a feature or enhancement, give back [feedback], assist in [resolving] issues!
  - **Fork, commit, pull request** your contributions! Tackle [easy] or [critical] issues or see if you can [help] someone on their request.

### Want to get more involved?
[Join our development community!] We maintain a more active discussion and conversation on our [Slack Team], [Request an invite!].


[overview]: /docs/about/overview/
[basic components of the database]: /docs/help/basics/#database
[sphere.diybio.org]: http://sphere.diybio.org
[classification of entries]: /docs/help/basics/
[fields of infobox]: /docs/help/basics/
<!-- TODO: add link to complete dataset -->
[complete dataset]: #
[sign-up]: https://github.com/join
[ELI5]: /docs/help/eli5-guide/
[sphere]: https://github.com/DIYbiosphere/sphere
[Helpful hints]: /docs/help/hints/
[code of conduct]: /docs/about/coc/
[Github glossary]: https://help.github.com/articles/github-glossary/
[Database]: /docs/help/basics/#Database
[Documentation]: /docs/help/basics/#Documentation
[Development]: /docs/help/basics/#Development
[Design]: /docs/help/basics/#Design
[simple markdown]: /docs/help/simple-markdown/
[complaint]: /docs/help/contributing/#report-a-bug
[question]: /docs/help/contributing/#ask-a-question
[idea]: /docs/help/contributing/#make-a-suggestion
[vote]: /docs/help/workflow/#adding-reactions
[Contributing guidelines]: /docs/help/contributing/
[Issues]: https://github.com/DIYbiosphere/sphere/issues
[easy]: https://github.com/DIYbiosphere/sphere/labels/easy
[feedback]: https://github.com/DIYbiosphere/sphere/labels/feedback%20wanted
[critical]: https://github.com/DIYbiosphere/sphere/labels/critical
[help]: https://github.com/DIYbiosphere/sphere/labels/help%20wanted
[resolving]: https://github.com/DIYbiosphere/sphere/labels/resolution%20needed
[Join our development community!]: /docs/help/contributing/#membership-request
[Slack Team]: https://diybiosphere.slack.com/
[Request an invite!]: https://diybiosphere.herokuapp.com/
