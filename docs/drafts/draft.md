---
title: Biocurious
permalink: "/draft/"
layout: default
summary: Biocurious is a community lab located in California
logo: http://biocurious.org/wordpress/wp-content/uploads/2014/11/logo1.png
profile-pic: https://tedconfblog.files.wordpress.com/2012/09/020.jpg
website: http://biocurious.org/
start-date: 2010
main-org: Hackerspace One
type-org: Non-profit
address: 845 Stewart Drive
directions: 
postcode: 94085
city: Sunnyvale
state: California
country: United States
tags:
- open source
- synthetic biology
- hardware
- paid
- mycology
email: info@biocurious.org
mailing-list: https://groups.google.com/forum/#!forum/biocurious
forum: https://groups.google.com/forum/#!forum/biocurious
meetup: http://www.meetup.com/biocurious/
twitter: https://twitter.com/biocuriouslab
facebook: https://www.facebook.com/BioCurious
rss: https://groups.google.com/forum/#!forum/biocurious
tumblr: https://groups.google.com/forum/#!forum/biocurious
wordpress: https://groups.google.com/forum/#!forum/biocurious
medium: https://groups.google.com/forum/#!forum/biocurious
wiki: https://groups.google.com/forum/#!forum/biocurious
github: https://groups.google.com/forum/#!forum/biocurious
trello: https://groups.google.com/forum/#!forum/biocurious
google+: https://groups.google.com/forum/#!forum/biocurious
linkedin: https://groups.google.com/forum/#!forum/biocurious
slack: https://groups.google.com/forum/#!forum/biocurious
gitter: https://groups.google.com/forum/#!forum/biocurious
flickr: https://groups.google.com/forum/#!forum/biocurious
pinterest: https://groups.google.com/forum/#!forum/biocurious
youtube: https://groups.google.com/forum/#!forum/biocurious
instagram: https://groups.google.com/forum/#!forum/biocurious
vimeo: https://groups.google.com/forum/#!forum/biocurious
---

<div class="ui container">

This is a draft for view formats for the list of entries


{% include social-icons.html %}

<div class="ui card">
  <div class="content">
    <div class="right floated meta">Lab</div>
    <a class="header">{{ page.title }}</a>
  </div>
  <div class="image">
    <img src="{{ page.profile-pic }}">
  </div>
  <div class="content">
    <i class="comment icon"></i>
    {{ page.summary }}
  </div>
  <div class="extra content">
      <i class="marker icon"></i>
      {{ page.city }}, {{ page.country }}
  </div>
</div>

<div class="ui link four cards">
  <div class="card">
    <div class="image">
      <img src="{{ page.profile-pic }}">
    </div>
    <div class="content">
      <div class="right floated meta">{{ page.start-date }}</div>
      <div class="header">{{ page.title }}</div>
      <div class="meta">
        Lab at {{ page.main-org }}
      </div>
      <div class="description">
        {{ page.summary}}
      </div>
    </div>
    <div class="extra content">
      <i class="marker icon"></i>
      {{ page.city }}, {{ page.country }}
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="http://graphics8.nytimes.com/images/2012/01/17/science/17DIY_SPAN/17DIY-articleLarge.jpg">
    </div>
    <div class="content">
      <div class="header">Genspace</div>
      <div class="meta">
        <span class="date">Coworker</span>
      </div>
      <div class="description">
        Genspace is a community research biolab, the first in the US
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2011
      </span>
      <span>
        <i class="user icon"></i>
        35 Friends
      </span>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://counterculturelabs.org/wp-content/uploads/2015/05/group.jpeg">
    </div>
    <div class="content">
      <div class="header">CounterCulture Labs</div>
      <div class="meta">
        <a>Coworker</a>
      </div>
      <div class="description">
        A grassroots biohackerspace in the great Bay Area, serving curious minds
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
        Joined in 2014
      </span>
      <span>
        <i class="user icon"></i>
        151 Friends
      </span>
    </div>
  </div>
</div>

<!-- Card -->
  <div class="ui card">
    <div class="content">
      <a class="header"><i class="lab icon"></i> {{ page.title }}</a>
      <div class="meta">
        <span class="date">Lab | {{ page.start-date }} </span>
      </div>
      <div class="description">
        {{ page.summary }}
      </div>
    </div>
    <div class="extra content">
        <i class="marker icon"></i>
        {{ page.city }}, {{ page.country }}
    </div>
  </div> <!-- close card -->

  <div class="ui segment">
    <div class="ui grid">
      <div class="two column row">
        <div class="column">
          <h3 class="ui header">
            {{ page.title }}
            <div class="sub header">
            {{ collection }} | {{ page.type }}
            </div>
          </h3>
        </div>
        <div class="column">
        <i class="marker icon"></i> {{ page.city }}, {{ page.country }}
        </div>
      </div>
    </div> <!-- close grid -->
  </div> <!-- close segment -->

  <div class="ui divided items">
    <div class="item">
      <div class="image">
        <img src="/assets/img/header.jpg">
      </div>
      <div class="content">
        <a class="header">{{ page.title }}</a>
        <div class="meta">
          <span class="right floated"><i class="marker icon"></i>{{ page.city }}, {{ page.country }}</span>
          <span class="cinema"> Lab | {{ page.type }} </span>
        </div>
        <div class="description">
          <p>{{ page.summary }}</p>
        </div>
        <div class="extra">
        {% for tag in page.tags %}
        <div class="ui tiny label">{{ tag }}</div>
        {% endfor %}
        </div>
      </div>
    </div>
    <div class="item">
      <div class="image">
        <img src="/assets/img/header.jpg">
      </div>
      <div class="content">
        <a class="header">My Neighbor Totoro</a>
        <div class="meta">
          <span class="cinema">IFC Cinema</span>
        </div>
        <div class="description">
          <p></p>
        </div>
        <div class="extra">
          <div class="ui right floated primary button">
            Buy tickets
            <i class="right chevron icon"></i>
          </div>
          <div class="ui label">Limited</div>
        </div>
        </div>
        </div>
    <div class="item">
      <div class="image">
        <img src="/assets/img/header.jpg">
      </div>
      <div class="content">
        <a class="header">Watchmen</a>
        <div class="meta">
          <span class="cinema">IFC</span>
        </div>
        <div class="description">
          <p></p>
        </div>
        <div class="extra">
          <div class="ui right floated primary button">
            Buy tickets
            <i class="right chevron icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
