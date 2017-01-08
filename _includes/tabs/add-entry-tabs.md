{% include info.html title="Optional form for new entries" text="A simplified fill-out form is being created to faciliate adding a new entry. The form will render a markdown file and contributors will have to upload to its respective collection" %}

The steps to add an entry to the library differ depending on your [access permisions][permissions] to the repository: follow the following steps respectively for non-members, members, and teams.

<div class="ui secondary pointing menu">
  <div class="right menu">
    <a href="/docs/tutorials/add-entry/" {% if page.tab == "non-members" %} class="item active" {% else %} class="item" {% endif %}><i class="icon circle thin"></i> Non-Members</a>
    <a href="/docs/tutorials/add-entry/members/" {% if page.tab == "members" %} class="item active" {% else %} class="item" {% endif %}><i class="icon circle"></i> Members</a>
    <a href="/docs/tutorials/add-entry/teams/" {% if page.tab == "teams" %} class="item active" {% else %} class="item" {% endif %}><i class="icon asterisk"></i> Teams</a>
  </div>
</div>
