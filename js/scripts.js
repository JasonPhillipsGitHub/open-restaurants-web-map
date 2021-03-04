mapboxgl.accessToken = 'pk.eyJ1IjoianA1NDg1IiwiYSI6ImNrM2Y3bTN5cDAxemEzaG5ubjM1NHpzdXIifQ.1ZnEtqoWaJQRTjp7E2GgGA';
// function to translate NYC land use codes into a color and a description
// var CuisineLookup = (code) => {
//   switch (code) {
//     case 1:
//       return {
//         color: '#f4f455',
//         description: '1 & 2 Family',
//       };
//     case 2:
//       return {
//         color: '#f7d496',
//         description: 'Multifamily Walk-up',
//       };
//     case 3:
//       return {
//         color: '#FF9900',
//         description: 'Multifamily Elevator',
//       };
//     case 4:
//       return {
//         color: '#f7cabf',
//         description: 'Mixed Res. & Commercial',
//       };
//     case 5:
//       return {
//         color: '#ea6661',
//         description: 'Commercial & Office',
//       };
//     case 6:
//       return {
//         color: '#d36ff4',
//         description: 'Industrial & Manufacturing',
//       };
//     case 7:
//       return {
//         color: '#dac0e8',
//         description: 'Transportation & Utility',
//       };
//     case 8:
//       return {
//         color: '#5CA2D1',
//         description: 'Public Facilities & Institutions',
//       };
//     case 9:
//       return {
//         color: '#8ece7c',
//         description: 'Open Space & Outdoor Recreation',
//       };
//     case 10:
//       return {
//         color: '#bab8b6',
//         description: 'Parking Facilities',
//       };
//     case 11:
//       return {
//         color: '#5f5f60',
//         description: 'Vacant Land',
//       };
//     case 12:
//       return {
//         color: '#5f5f60',
//         description: 'Other',
//       };
//     default:
//       return {
//         color: '#5f5f60',
//         description: 'Other',
//       };
//   }
// };

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [-73.916949,40.682562], // starting position [lng, lat]
  zoom: 11 // starting zoom
});

map.on('style.load', function () {
  // add a geojson source
  map.addSource('open-restaurants', {
    type: 'geojson',
    data: '/data/bk_qns_open_mini.geojson'
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
            "#BBB572",
          ],
          [
            'American',
            "#93828E",
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
            "#f0a607",
          ],
          [
            'Mexican',
            "#f0a607",
          ],
          [
            'Asian',
            "#f0a607",
          ],
          [
            'Sandwiches/Salads/Mixed Buffet',
            "#f0a607",
          ],
          [
            'Brazilian',
            "#f0a607",
          ],
          [
            'Thai',
            "#f0a607",
          ],
          [
            'Chicken',
            "#f0a607",
          ],
          [
            'Peruvian',
            "#f0a607",
          ],
          [
            'French',
            "#f0a607",
          ],
          [
            'Caribbean (Inc. Cuban, Puerto Rican)',
            "#f0a607",
          ],
          [
            'Spanish',
            "#f0a607",
          ],
          [
            'Donuts',
            "#f0a607",
          ],
          [
            'Vegetarian',
            "#f0a607",
          ],
          [
            'Korean',
            "#f0a607",
          ],
          [
            'Seafood',
            "#f0a607",
          ],
          [
            'Other',
            "#f0a607",
          ],
          [
            'Turkish',
            "#f0a607",
          ],
          [
            'Irish',
            "#f0a607",
          ],
          [
            'Bottled beverages, including water, sodas, juices, etc.',
            "#f0a607",
          ],
          [
            'Californian',
            "#f0a607",
          ],
          [
            'Middle Eastern',
            "#f0a607",
          ],
          [
            'Soul Food',
            "#f0a607",
          ],
          [
            'Chinese/Japanese',
            "#f0a607",
          ],
          [
            'Juice, Smoothies, Fruit Salads',
            "#f0a607",
          ],
          [
            'Steak',
            "#f0a607",
          ],
          [
            'Ice Cream, Gelato, Yogurt, Ices',
            "#f0a607",
          ],
          [
            'African',
            "#f0a607",
          ],
          [
            'Hamburgers',
            "#f0a607",
          ],
          [
            'Vietnamese/Cambodian/Malaysia',
            "#f0a607",
          ],
          [
            'Eastern European',
            "#f0a607",
          ],
          [
            'Salads',
            "#f0a607",
          ],
          [
            'Creole',
            "#f0a607",
          ],
          [
            'Russian',
            "#f0a607",
          ],
          [
            'Barbecue',
            "#f0a607",
          ],
          [
            'Afghan',
            "#f0a607",
          ],
          [
            'Mediterranean',
            "#f0a607",
          ],
          [
            'Pancakes/Waffles',
            "#f0a607",
          ],
          [
            'Armenian',
            "#f0a607",
          ],
          [
            'Hotdogs/Pretzels',
            "#f0a607",
          ],
          [
            'Continental',
            "#f0a607",
          ],
          [
            'Soups/Salads/Sandwiches',
            "#f0a607",
          ],
          [
            'Hawaiian',
            "#f0a607",
          ],
          [
            'Chilean',
            "#f0a607",
          ],
          [
            'Tapas',
            "#f0a607",
          ],
          [
            'Australian',
            "#f0a607",
          ],
          [
            'Bagels/Pretzels',
            "#f0a607",
          ],
          [
            'Portuguese',
            "#f0a607",
          ],
          [
            'Cajun',
            "#f0a607",
          ],
          [
            'Ethiopian',
            "#f0a607",
          ],
          [
            'Greek',
            "#f0a607",
          ],
          [
            'Filipino',
            "#f0a607",
          ],
          [
            'Nuts/Confectionary',
            "#f0a607",
          ],
          [
            'English',
            "#f0a607",
          ],
          [
            'Polish',
            "#f0a607",
          ],
          [
            'Fruits/Vegetables',
            "#f0a607",
          ],
          [
            'Pakistani',
            "#f0a607",
          ],
          [
            'Indonesian',
            "#f0a607",
          ],
          [
            'German',
            "#f0a607",
          ],
          [
            'Bangladeshi',
            "#f0a607",
          ],
          [
            'Egyptian',
            "#f0a607",
          ],
          [
            'Chinese/Cuban',
            "#f0a607",
          ],
          [
            'Scandinavian',
            "#f0a607",
          ],
          [
            'Iranian',
            "#f0a607",
          ],
          [
            'Moroccan',
            "#f0a607",
          ],
          [
            'Not Listed/Not Applicable',
            "#f0a607",
          ],
          [
            'Creole/Cajun',
            "#f0a607",
          ],
          [
            'Czech',
            "#f0a607",
          ],
          [
            'Soups',
            "#f0a607",
          ],
          [
            'Hotdogs',
            "#f0a607",
          ],
          [
            'Southwestern',
            "#f0a607",
          ],
          [
            'Basque',
            "#f0a607",
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
    var address = hoveredFeature.properties.Address
    var landuseDescription = LandUseLookup(parseInt(hoveredFeature.properties.LandUse)).description

    var popupContent = `
      <div>
        ${address}<br/>
        ${landuseDescription}
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
