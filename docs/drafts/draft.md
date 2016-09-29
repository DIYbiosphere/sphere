---
layout: docs
permalink: /draft/

---


<table class="box-info" style="width: 300px">
  <tr>
    <th colspan="2">
      <h3 class="infobox-title">
        <a class="link text-dark selectable" href="{{ page.website }}" target="_blank">
        {% if page.logo %}
          <img class="entry-logo"  src="{{ page.logo }}" /> <i class="octicon octicon-link-external"></i>
        {% else %}
          {{ page.title }}
        </a>
        {% endif %}
      </h3>
    </th>
  </tr>

  {% if page.since %}
    <tr>
      <th> <button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="founded"><span style="cursor:help">
      {% svgicon oi-gift %} </span></button></th>
      <td>{{ page.since }}</td>
    </tr>
  {% endif %}

  {% if page.host %}
  {% assign host = page.host %}
  <tr>
    {% if host.name %}
    <th> <button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="Parent/Host"><span style="cursor:help">
    {% svgicon oi-home %}</span></button></th>
    <td> {% if host.web %} <a class="link text-dark selectable" href="{{ page.host.web | site.baseUrl }}"> {% endif %}
    {{ host.name }}
    {% if host.web %} </a> {% endif %}
    </td>
    {% endif %}
  </tr>
  {% endif %}

  {% if page.type %}
  <tr>
    <th> <button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="Type"><span style="cursor:help">
    {% svgicon oi-gear %}</span></button></th>
    <td>{{ page.type }}</td>
  </tr>
  {% endif %}

  {% if page.affiliates %}
    <tr>
      <th> <button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="Type"><span style="cursor:help">
      {% svgicon oi-users %}</span></button></th>
      <td>{{ page.type }}</td>
    </tr>
  {% endif %}

  {% if page.address %}
    <tr>
      <th> <button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="Type"><span style="cursor:help">
      {% svgicon oi-location %}</span></button></th>
      <td>{{ page.address }}
        {% if page.directions %}
        <br>{{ page.directions }}
        {% endif %}
      </td>
    </tr>
    {% endif %}

  {% if page.city or page.state or page.country %}
  <tr>
    <th> <button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="Type"><span style="cursor:help">
    {% svgicon oi-globe %}</span></button></th>
    <td>{{ page.city }}
    {% if page.city %}, {% endif %}
    {% if page.state %}
    {{ page.state }} {% endif %}
    {% if page.city or page.state %}<br> {% endif %}
    {% if page.country %}
      {{ page.country }}
      {% endif %}
    </td>
  </tr>
  {% endif %}

  {% if page.tags %}
  <tr class="info-tags">
    <th><button class="infobox-icon" data-toggle="tooltip" data-placement="top" title="Type"><span style="cursor:help">
    {% svgicon oi-tag %}</span></button></th>
    <td>{{ page.tags | array_to_sentence_string }}</td>
  </tr>
  {% endif %}


  <tr class="info-socials">
    <th colspan="2">
    {% include social-icons.html %}</th>
  </tr>



  </table>
