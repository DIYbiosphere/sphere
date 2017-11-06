/* global $, Hogan, algoliasearch, algoliasearchHelper, google */

$(document).ready(function () {
  // INITIALIZATION
  // ==============
  var APPLICATION_ID = 'ITI5JHZJM9';
  var SEARCH_ONLY_API_KEY = 'b427318cf6d881e5d3ffd84adf39219e';
  var INDEX_NAME = 'diybiosphere';
  var PARAMS = {hitsPerPage: 100};

  // Client + Helper initialization
  var algolia = algoliasearch(APPLICATION_ID, SEARCH_ONLY_API_KEY);
  var algoliaHelper = algoliasearchHelper(algolia, INDEX_NAME, PARAMS);
  algoliaHelper.setQueryParameter('getRankingInfo', true);

  // DOM and Templates binding
  var $map = $('#map');
  var $hits = $('#hits');
  var $searchInput = $('#search-input');
  var hitsTemplate = Hogan.compile($('#hits-template').text());
  var noResultsTemplate = Hogan.compile($('#no-results-template').text());

  // Map initialization
  var map = new google.maps.Map($map.get(0), {
    streetViewControl: false,
    zoom: 4,
    minZoom: 1,
    maxZoom: 12,
    styles: [
    {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      }
    ]
  }
    ]
  });
  var fitMapToMarkersAutomatically = true;
  var markers = [];
  var boundingBox;
  var boundingBoxListeners = [];

  // Page states
  var PAGE_STATES = {
    LOAD: 0,
    BOUNDING_BOX_RECTANGLE: 1,
    AROUND_IP: 4,
  };
  var pageState = PAGE_STATES.LOAD;
  setPageState(PAGE_STATES.AROUND_IP);

  // PAGE STATES
  // ===========
  function setPageState(state) {
    resetPageState();
    beginPageState(state);
  }

  function beginPageState(state) {
    pageState = state;

    switch (state) {
      case PAGE_STATES.BOUNDING_BOX_RECTANGLE:
        boundingBox = new google.maps.Rectangle({
          bounds: {north: 60, south: 40, east: 16, west: -4},
          strokeColor: '#2E6C77',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2E6C77',
          fillOpacity: 0.15,
          draggable: true,
          editable: true,
          geodesic: true,
          map: map
        });
        algoliaHelper.setQueryParameter('insideBoundingBox', rectangleToAlgoliaParams(boundingBox));
        boundingBoxListeners.push(google.maps.event.addListener(
          boundingBox,
          'bounds_changed',
          throttle(rectangleBoundsChanged, 150)
        ));
        break;

      case PAGE_STATES.AROUND_IP:
        algoliaHelper.setQueryParameter('aroundLatLngViaIP', true);
        break;

      default:
        // No-op
    }

    fitMapToMarkersAutomatically = true;
    algoliaHelper.search();
  }

  function resetPageState() {
    if (boundingBox) boundingBox.setMap(null);
    for (var i = 0; i < boundingBoxListeners.length; ++i) {
      google.maps.event.removeListener(boundingBoxListeners[i]);
    }
    boundingBoxListeners = [];
    $searchInput.val('');
    algoliaHelper.setQuery('');
    algoliaHelper.setQueryParameter('insideBoundingBox', undefined);
    algoliaHelper.setQueryParameter('aroundLatLngViaIP', undefined);
  }

  // TEXTUAL SEARCH
  // ===============
  $searchInput.on('input propertychange', function (e) {
    var query = e.currentTarget.value;
    if (pageState === PAGE_STATES.BOUNDING_BOX_RECTANGLE) {
      fitMapToMarkersAutomatically = false;
    }
    algoliaHelper.setQuery(query).search();
  });

  // DISPLAY RESULTS
  // ===============
  algoliaHelper.on('result', function (content) {
    renderMap(content);
    renderHits(content);
  });

  algoliaHelper.on('error', function (error) {
    console.log(error);
  });

  function renderHits(content) {
    if (content.hits.length === 0) {
      $hits.html(noResultsTemplate.render());
      return;
    }
    content.hits = content.hits.slice(0, 5);
    for (var i = 0; i < content.hits.length; ++i) {
      var hit = content.hits[i];
      if (hit._rankingInfo.matchedGeoLocation) {
        hit.distance = parseInt(hit._rankingInfo.matchedGeoLocation.distance / 1000, 10) + ' km';
      }
    }
    $hits.html(hitsTemplate.render(content));
  }

var image = 'https://ibin.co/3Vj6FWizYk7k.png';


  function renderMap(content) {
    removeMarkersFromMap();
    markers = [];

    for (var i = 0; i < content.hits.length; ++i) {
      var hit = content.hits[i];
      var marker = new google.maps.Marker({
        position: {
          lat: hit._geoloc.lat,
          lng: hit._geoloc.lng
        },
        map: map,
        icon: image,
        title: hit.title
      });
      markers.push(marker);
      attachInfoWindow(marker, hit);
    }

    function attachInfoWindow(marker, hit) {

    var infowindow = new google.maps.InfoWindow({
      content: '<a href="' + hit.url + '">' +
      '<h4 class="ui small header">'+ hit.title +
      '<div class="sub header"><em>' + hit.collection + ' in ' + hit.city +
      '</em></div></h4></a>'
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

    if (fitMapToMarkersAutomatically) fitMapToMarkers();


  }

  // EVENTS BINDING
  // ==============
  $('.change_page_state').on('click', function (e) {
    e.preventDefault();
    updateMenu($(this).data('state'), $(this).data('mode'));
    switch ($(this).data('state')) {
      case 'rectangle':
        setPageState(PAGE_STATES.BOUNDING_BOX_RECTANGLE);
        break;
      case 'ip':
        setPageState(PAGE_STATES.AROUND_IP);
        break;
      default:
        // No op
    }
  });

  // HELPER METHODS
  // ==============
  function updateMenu(stateClass, modeClass) {
    $('.change_page_state').removeClass('active');
    $('.change_page_state[data-state="' + stateClass + '"]').addClass('active');
    $('.page_mode').removeClass('active');
    $('.page_mode[data-mode="' + modeClass + '"]').addClass('active');
  }

  function fitMapToMarkers() {
    var mapBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      mapBounds.extend(markers[i].getPosition());
    }
    map.fitBounds(mapBounds);
  }

  function removeMarkersFromMap() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }

  function rectangleBoundsChanged() {
    fitMapToMarkersAutomatically = false;
    algoliaHelper.setQueryParameter('insideBoundingBox', rectangleToAlgoliaParams(boundingBox)).search();
  }

  function rectangleToAlgoliaParams(rectangle) {
    var bounds = rectangle.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    return [ne.lat(), ne.lng(), sw.lat(), sw.lng()].join();
  }



  function throttle(func, wait) {
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    function later() {
      previous = Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
    return function () {
      var now = Date.now();
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }
});
