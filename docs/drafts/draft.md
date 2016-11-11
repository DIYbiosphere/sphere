---
layout: default
permalink: /draft/



title: Biocurious
summary: Biocurious is a community lab located in California
logo: http://biocurious.org/wordpress/wp-content/uploads/2014/11/logo1.png
website: http://biocurious.org/
since: 2010

type: Non-profit

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
forum: https://groups.google.com/forum/#!forum/biocurious
meetup: http://www.meetup.com/biocurious/
twitter: https://twitter.com/biocuriouslab
facebook: https://www.facebook.com/BioCurious
---
<div class="ui container">

This is a draft for view formats for the list of entries

<!-- Card -->
  <div class="ui card">

    <div class="image">
      <img src="/assets/img/header.jpg">
    </div>
    <div class="content">
      <a class="header">{{ page.title }}</a>
      <div class="meta">
        <span class="date">{{ page.host }} | {{ page.type }} </span>
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


  <div class="ui divided items">
    <div class="item">
      <div class="image">
        <img src="/assets/img/header.jpg">
      </div>
      <div class="content">
        <a class="header">{{ page.title }}</a>
        <div class="meta">
          <span class="cinema"> {{ page.host }} | {{ page.type }} </span>
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


  <table class="ui selectable sortable celled table">
  <thead>
    <tr>
    <th data-vivaldi-spatnav-clickable="1">Collection</th>
    <th data-vivaldi-spatnav-clickable="1">Name</th>
    <th data-vivaldi-spatnav-clickable="1">Since</th>
    <th data-vivaldi-spatnav-clickable="1">Host</th>
    <th data-vivaldi-spatnav-clickable="1">Type</th>
    <th data-vivaldi-spatnav-clickable="1">City</th>
    <th data-vivaldi-spatnav-clickable="1">Country</th>
    <th data-vivaldi-spatnav-clickable="1">Latest commit</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>{{ page.collection }}</td>
      <td>{{ page.title }}</td>
      <td>{{ page.since }}</td>
      <td>{{ page.host }}</td>
      <td>{{ page.type }}</td>
      <td>{{ page.city }}</td>
      <td>{{ page.country }}</td>
      <td>09 Nov 2016</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><th colspan="8">
      <div class="ui right floated pagination menu">
        <a class="icon item">
          <i class="left chevron icon"></i>
        </a>
        <a class="item">1</a>
        <a class="item">2</a>
        <a class="item">3</a>
        <a class="item">4</a>
        <a class="icon item">
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
</table>


    <button class="ui circular facebook icon mini button">
      <i class="facebook icon"></i>
    </button>
    <button class="ui circular twitter icon mini button">
      <i class="twitter icon"></i>
    </button>
    <button class="ui circular linkedin icon mini button">
      <i class="linkedin icon"></i>
    </button>
    <button class="ui circular google plus mini icon button">
      <i class="google plus icon"></i>
    </button>

</div>
