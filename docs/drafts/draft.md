---
layout: default
permalink: /draft/



title: Biocurious
summary: Biocurious is a community lab located in California
logo: http://biocurious.org/wordpress/wp-content/uploads/2014/11/logo1.png
website: http://biocurious.org/
since: 2010

host: Hackerspace One
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

<a href="http://google.com" class="ui medium image">
  <img src="http://biocurious.org/wordpress/wp-content/uploads/2014/11/logo1.png">
</a>


<!-- Card -->
  <div class="ui card">
    <div class="content">
      <a class="header"><i class="lab icon"></i> {{ page.title }}</a>
      <div class="meta">
        <span class="date">Lab | {{ page.since }} </span>
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

  <div style="padding: 10px 0px 10px 5px;">
    <div class="ui two column grid container">
      <div class="row">
        <div class="two wide column">
          <img class="ui fluid image" src="{{ logo }}" alt="logo" class="img-responsive" />
        </div>
        <div class="ten wide column">
          <h4 class="ui header">{{{ _highlightResult.title.value }}}<h4/>
          <div>
            <p>{{{ _highlightResult.text.value }}}</p>
          </div>
          <div style="padding-top:10%"><i class="tags icon"></i>{{ tags }}</div>
        </div>
        <div class="four wide column">
          <div style="width: 70%; border: 0.5px solid gainsboro; padding: 20px 10px 20px 15px;">
            <div>
              <i class="large icons">
                <i class="large thin circle icon"></i>
                <i class="small lab icon"></i>
              </i> {{ collection }}
            </div>
            <div><i class="gift icon"></i> {{ since }}</div>
            <div><i class="home icon"></i> {{ host.name }}</div>
            <div><i class="lightning icon"></i> University</div>
            <div><i class="globe icon"></i> {{ city }}, {{ country }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
