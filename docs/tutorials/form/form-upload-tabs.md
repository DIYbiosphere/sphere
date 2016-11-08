The uploading step depends on your access privileges. If you are new to the DIYbiosphere it means you are a

<div class="ui secondary pointing menu">
  <div class="right menu">
    <a href="/form/upload/" {% if page.tab == "non-members" %} class="item active" {% else %} class="item" {% endif %}><i class="icon circle thin"></i> Non-Members</a>
    <a href="/form/upload/members/" {% if page.tab == "members" %} class="item active" {% else %} class="item" {% endif %}><i class="icon circle"></i> Members</a>
    <a href="/form/upload/teams/" {% if page.tab == "teams" %} class="item active" {% else %} class="item" {% endif %}><i class="icon asterisk"></i> Teams</a>
  </div>
</div>
