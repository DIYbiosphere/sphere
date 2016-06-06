---
layout: null
---
var tipuesearch = {"pages": [
  {% for page in site.pages %}
    {
      "title": "{{ page.title | xml_escape }}",
      "text": "{{ page.content | strip_html | strip_newlines | xml_escape }}",
      "url": "{{ page.url | xml_escape }}",
      "tags": "{{ page.tags }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]};