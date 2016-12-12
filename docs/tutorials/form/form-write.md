---
layout: form
permalink: form/write/
step: write
---

<form class="ui equal width form">
<!-- Collection -->
  <div class="required field">
    <label><i class="folder icon"></i>
      Collection</h4>
    </label>
      <div class="ui selection dropdown">
         <input type="hidden" name="collection">
         <i class="dropdown icon"></i>
         <div class="default text">Collection</div>
         <div class="menu">
             <div class="item" data-value="project"><i class="travel icon"></i> Project</div>
             <div class="item" data-value="startup"><i class="rocket icon"></i> Startup</div>
             <div class="item" data-value="lab"><i class="lab icon"></i> Lab</div>
             <div class="item" data-value="incubator"><i class="leaf icon"></i> Incubator</div>
             <div class="item" data-value="group"><i class="users icon"></i> Group</div>
             <div class="item" data-value="network"><i class="share alternative icon"></i> Network</div>
             <div class="item" data-value="event"><i class="ticket icon"></i> Event</div>
             <div class="item" data-value="other"><i class="umbrella icon"></i> Other</div>
         </div>
     </div>
  </div>
  <h4 class="ui dividing header">Entry Data</h4>
  <!-- Entry Manager -->
  <div class="required field">
    <label><i class="privacy icon"></i> Manager</label>
    <input type="text" name="manager" placeholder="GitHub username">
  </div>
  <!-- Name of Initiative -->
  <div class="required field">
    <label><i class="star icon"></i> Title</label>
    <input type="text" name="title" placeholder="Name of entry">
  </div>
  <!-- Homepage URL -->
  <div class="required field">
    <label><i class="external icon"></i> Website</label>
    <input type="text" name="website" placeholder="Initiative homepage URL">
  </div>
  <!-- Logo URL -->
  <div class="field">
    <label><i class="image icon"></i> Logo</label>
    <input type="text" name="logo" placeholder="Initiative logo URL">
  </div>
  <!-- Established -->
  <div class="fields">
    <div class="required field">
      <label><i class="gift icon"></i> Since</label>
      <input type="text" name="since" placeholder="Year of founding (YYYY)">
    </div>
    <div class="field">
      <label>Until</label>
      <input type="text" name="until" placeholder="Year of ending (YYYY)">
    </div>
  </div>
  <!-- Dates (only for Events)-->
  <div class="fields">
    <div class="required field">
      <label><i class="calendar icon"></i> Date</label>
      <input type="text" name="date-start" placeholder="Start Date (YYYY-MM-DD)">
    </div>
    <div class="required field">
      <label>Until</label>
      <input type="text" name="date-end" placeholder="End Date (YYYY-MM-DD)">
    </div>
  </div>
  <!-- Host Organization -->

  <!-- Type of Organization -->
  <div class="required field">
    <label><i class="folder icon"></i>
      Type of Initiative</h4>
    </label>
      <div class="ui selection dropdown">
         <input type="hidden" name="collection">
         <i class="dropdown icon"></i>
         <div class="default text">Type</div>
         <div class="menu">
             <div class="item" data-value="community">Community/Grassroots</div>
             <div class="item" data-value="school">K-12 School</div>
             <div class="item" data-value="university">College/University</div>
             <div class="item" data-value="museum">Museum</div>
             <div class="item" data-value="fp">For-Profit</div>
             <div class="item" data-value="np">Non-Profit/Non Governamental Organization</div>
             <div class="item" data-value="governamental">Governamental Organization</div>
             <div class="item" data-value="specify">Specify Other</div>
         </div>
     </div>
  </div>
  <!-- Affiliates -->

  <!-- Location -->
    <!-- Address with Algolia Places -->
    <div>
      <div class="field">
        <label><i class="marker icon"></i> Address</label>
            <input type="search" name="address" id="form-address" placeholder="Search for Address">
      </div>
      <div class="field">
        <label> Address 2</label>
        <input type="text" name="address2" id="form-address2" placeholder="Address 2">
      </div>
      <div class="fields">
        <div class="field">
          <label> City</label>
          <input type="text" name="city" id="form-city" placeholder="City name">
        </div>
        <div class="field">
          <label>Post code</label>
          <input type="text" name="postcode" id="form-zip" placeholder="ZIP code/Postcode">
        </div>
      </div>
    </div>
    <!-- City with Algolia Places -->
    <div class="field">
      <label><i class="world icon"></i> City</label>
      <div class="f16">
        <input type="search" id="city" name="city" placeholder="Search for City">
      </div>
    </div>
    <!-- Country with Algolia Places -->
    <div class="field">
      <label><i class="flag icon"></i> Country</label>
      <div class="f16">
        <input type="search" id="country" name="country" placeholder="Search for Country">
      </div>
    </div>
    <!-- Keywords -->
    <div class="field">
      <label><i class="tags icon"></i>Tags</label>
      <select multiple="" class="ui dropdown">
        <option value="">Select tags</option>
        <option value="AF">open source</option>
        <option value="AX">synthetic biology</option>
        <option value="AL">mycology</option>
        <option value="DZ">hardware</option>
      </select>
    </div>
    <!-- Socials -->
    <button class="ui labeled icon basic button" type="submit"><i class="add icon"></i> Add</button>

    <!-- BODY OF TEXT -->
    <h4 class="ui dividing header">Entry Description</h4>
    <div class="required field">
      <label>Summary</label>
      <textarea rows="2"></textarea>
    </div>
    <div class="field">
        <label>Text</label>
        <textarea></textarea>
    </div>


    <button class="ui labeled icon secondary button" type="submit"><i class="download icon"></i> Next Step</button>
  </form>
