mapboxgl.accessToken = 'pk.eyJ1IjoianA1NDg1IiwiYSI6ImNrM2Y3bTN5cDAxemEzaG5ubjM1NHpzdXIifQ.1ZnEtqoWaJQRTjp7E2GgGA';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/dark-v10', // style URL
  center: [-73.916949,40.682562], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

map.on('style.load', function () {
  // add a geojson source
  map.addSource('open-restaurants', {
    type: 'geojson',
    data: 'data/bk-qns-open-mini.geojson'
  });

  // add a layer to style and display the source
  map.addLayer({
    'id': 'restaurants-fill',
    'type': 'fill',
    'source': 'open-restaurants',
    'layout': {},
    'paint': {
      'fill-color': {
        type: 'categorical',
        property: 'CUISINE_DESCRIPTION',
        stops: [
          [
            'Chinese',
            "red",
          ],
          [
            'American',
            "white",
          ],
          [
            'Jewish/Kosher',
            "#1E2D24",
          ],
          [
            'Italian',
            "#F1F2AA",
          ],
          [
            'Japanese',
            "#2bb4d6",
          ],
          [
            'Cakes, Cupcakes, Desserts',
            "#d18ecc",
          ],
          [
            'Pizza',
            "#f2bb4e",
          ],
          [
            'Latin American (Central and South America)',
            "#1a6330",
          ],
          [
            'Tex-Mex',
            "#f0a607",
          ],
          [
            'Sandwiches',
            "#DDD598",
          ],
          [
            'Mexican',
            "#20AF94",
          ],
          [
            'Asian',
            "#98B115",
          ],
          [
            'Sandwiches/Salads/Mixed Buffet',
            "#41D8E9",
          ],
          [
            'Brazilian',
            "#EEE281",
          ],
          [
            'Thai',
            "#5FADE9",
          ],
          [
            'Chicken',
            "#52A611",
          ],
          [
            'Peruvian',
            "#054054",
          ],
          [
            'French',
            "#E559BE",
          ],
          [
            'Caribbean (Inc. Cuban, Puerto Rican)',
            "#4606CD",
          ],
          [
            'Spanish',
            "#476BEE",
          ],
          [
            'Donuts',
            "#B2DBB1",
          ],
          [
            'Vegetarian',
            "#EFE193",
          ],
          [
            'Korean',
            "#D397BD",
          ],
          [
            'Seafood',
            "#B5885D",
          ],
          [
            'Other',
            "#A6B808",
          ],
          [
            'Turkish',
            "#572628",
          ],
          [
            'Irish',
            "#10CB90",
          ],
          [
            'Bottled beverages, including water, sodas, juices, etc.',
            "#949459",
          ],
          [
            'Californian',
            "#12427C",
          ],
          [
            'Middle Eastern',
            "#C32A8E",
          ],
          [
            'Soul Food',
            "#E805A2",
          ],
          [
            'Chinese/Japanese',
            "#2F9E6C",
          ],
          [
            'Juice, Smoothies, Fruit Salads',
            "#0A8ACE",
          ],
          [
            'Steak',
            "#1F03DE",
          ],
          [
            'Ice Cream, Gelato, Yogurt, Ices',
            "#2F790F",
          ],
          [
            'African',
            "#72B2B4",
          ],
          [
            'Hamburgers',
            "#9FBFC1",
          ],
          [
            'Vietnamese/Cambodian/Malaysia',
            "#11C933",
          ],
          [
            'Eastern European',
            "#30A83C",
          ],
          [
            'Salads',
            "#1AD21F",
          ],
          [
            'Creole',
            "#5961D8",
          ],
          [
            'Russian',
            "#9A77A3",
          ],
          [
            'Barbecue',
            "#81E4D4",
          ],
          [
            'Afghan',
            "#2FEB24",
          ],
          [
            'Mediterranean',
            "#CE7BC4",
          ],
          [
            'Pancakes/Waffles',
            "#651DF3",
          ],
          [
            'Armenian',
            "#9EFBB3",
          ],
          [
            'Hotdogs/Pretzels',
            "#942CBF",
          ],
          [
            'Continental',
            "#5BA653",
          ],
          [
            'Soups/Salads/Sandwiches',
            "#90D36C",
          ],
          [
            'Hawaiian',
            "#16B5C3",
          ],
          [
            'Chilean',
            "#6122F7",
          ],
          [
            'Tapas',
            "#63B92D",
          ],
          [
            'Australian',
            "#DF3705",
          ],
          [
            'Bagels/Pretzels',
            "#69EBC1",
          ],
          [
            'Portuguese',
            "#9A60D4",
          ],
          [
            'Cajun',
            "#90433F",
          ],
          [
            'Ethiopian',
            "#F9B272",
          ],
          [
            'Greek',
            "#4DD17D",
          ],
          [
            'Filipino',
            "#B46D7F",
          ],
          [
            'Nuts/Confectionary',
            "#A862EF",
          ],
          [
            'English',
            "#4C3615",
          ],
          [
            'Polish',
            "#4A2975",
          ],
          [
            'Fruits/Vegetables',
            "#A5EAF7",
          ],
          [
            'Pakistani',
            "#73970D",
          ],
          [
            'Indonesian',
            "#AA3DB5",
          ],
          [
            'German',
            "#735B5D",
          ],
          [
            'Bangladeshi',
            "#1BD84B",
          ],
          [
            'Egyptian',
            "#22AFE6",
          ],
          [
            'Chinese/Cuban',
            "#54F2DC",
          ],
          [
            'Scandinavian',
            "#37177C",
          ],
          [
            'Iranian',
            "#63EDE4",
          ],
          [
            'Moroccan',
            "#42B5DF",
          ],
          [
            'Not Listed/Not Applicable',
            "#5D3780",
          ],
          [
            'Creole/Cajun',
            "#67C2D6",
          ],
          [
            'Czech',
            "#2A4464",
          ],
          [
            'Soups',
            "#18A2F3",
          ],
          [
            'Hotdogs',
            "#B6C858",
          ],
          [
            'Southwestern',
            "#2221CE",
          ],
          [
            'Basque',
            "#5259D2",
          ],
        ]
      },
      'fill-outline-color': '#ccc',
      'fill-opacity': 0.8
    }
  });

  // add an empty data source, which we will use to highlight the lot the user is hovering over
  map.addSource('highlight-feature', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: []
    }
  })

  // add a layer for the highlighted lot
  map.addLayer({
    id: 'highlight-line',
    type: 'line',
    source: 'highlight-feature',
    paint: {
      'line-width': 2,
      'line-opacity': 0.9,
      'line-color': 'white',
    }
  });


  // Add cuisine types to fill in the dropdown menu
  var cuisine_type = [1,2,3];
  var option = '';
  for (var i=0;i<cuisine_type.length;i++){
     option += '<option value="'+ cuisine_type[i] + '">' + cuisine_type[i] + '</option>';
  }
  $('.dropdown-content').append(option);

})

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('mousemove', function (e) {
  // query for the features under the mouse, but only in the lots layer
  var features = map.queryRenderedFeatures(e.point, {
      layers: ['restaurants-fill'],
  });

  if (features.length > 0) {
    // show the popup
    // Populate the popup and set its coordinates
    // based on the feature found.

    var hoveredFeature = features[0]
    var rest_name = hoveredFeature.properties.DBA
    var cuisineDescription = hoveredFeature.properties.CUISINE_DESCRIPTION
    var address = hoveredFeature.properties.address
    var boro = hoveredFeature.properties.BORO
    var zipcode = hoveredFeature.properties.ZIPCODE
    var phonenumber = hoveredFeature.properties.PHONE
    var grade = hoveredFeature.properties.GRADE
    var openrest = hoveredFeature.properties.Open_Restaurants_Inspections_SeatingChoice

    var popupContent = `
      <div >
            <b>Restaurant Name</b>: ${rest_name}<br/>
            <b>Type of Cuisine</b>: ${cuisineDescription} <br/>
            <b>Address</b>: ${address}, ${boro},NY   ${zipcode}<br/>
            <b>Phone</b>: ${phonenumber}<br/>
            <b>Health Grade</b>: ${grade}<br/>
            <b>Open Restaurant Seating Type</b>: ${openrest}


      </div>
    `

    popup.setLngLat(e.lngLat).setHTML(popupContent).addTo(map);

    // set this lot's polygon feature as the data for the highlight source
    map.getSource('highlight-feature').setData(hoveredFeature.geometry);

    // show the cursor as a pointer
    map.getCanvas().style.cursor = 'pointer';
  } else {
    // remove the Popup
    popup.remove();

    map.getCanvas().style.cursor = '';
  }

})
