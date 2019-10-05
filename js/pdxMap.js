//title layer for map backround
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

//initializing layers group
var layers = {
    OMNIVORE: new L.LayerGroup(),
    PESCETARIAN: new L.LayerGroup(),
    VEGETARIAN: new L.LayerGroup(),
    VEGAN: new L.LayerGroup()
  };

//creating map with above layers
var map = L.map("map-id", {
    center: [45.5051, -122.675],
    zoom: 12,
    layers: [
      layers.OMNIVORE,
      layers.PESCETARIAN,
      layers.VEGETARIAN,
      layers.VEGAN
    ]
  });

  //adding lightmap tile layer
  lightmap.addTo(map);

//overlay object for layer control
  var overlays = {
    "Restaurants for Omnivores": layers.OMNIVORE,
    "Restaurants for Pescetarians": layers.PESCETARIAN,
    "Restaurants for Ovo-Lacto Vegetarians": layers.VEGETARIAN,
    "Restaurants for Vegans": layers.VEGAN
  };

  //create control for layers
  L.control.layers(null, overlays).addTo(map);

  //legend
  var info = L.control({
    position: "bottomright"
  });
  info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
  };
  info.addTo(map);

  var icons = {
    OMNIVORE: L.ExtraMarkers.icon({
      icon: "ion-settings",
      iconColor: "white",
      markerColor: "red",
      shape: "star"
    }),
    PESCETARIAN: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "blue",
      shape: "circle"
    }),
    VEGETARIAN: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "yellow",
      shape: "penta"
    }),
    VEGAN: L.ExtraMarkers.icon({
      icon: "ion-android-bicycle",
      iconColor: "white",
      markerColor: "green",
      shape: "circle"
    }),
  };

//performing API call to Google
var restaurantData = d3.json("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.5051,-122.675&radius=25&type=restaurant&keyword=cruise&key=" + Google_API, function(googleData) {
    //object to keep track of markers
    var restaurants = {
        OMNIVORE: 0,
        PESCETARIAN: 0, 
        VEGETARIAN: 0,
        VEGAN: 0
    };

    //initializing restaurantKey to access layers, icons, count for restaurant group
    var restaurantKey;

    //loop through PDX restaurants to assign restarants to correct markers
    for (i = 0; i < restaurantData.length; i++) {
        
        var restaurant = Object.assign({}, restaurantData[i]);
        vegetarian_cuisine = ["Vegetarian", "Thai", "Chinese", "Asian"];
        pescetarian_cuisine = ["Sushi", "Japanese", "Vietnamese", "Seafood"];
        if (restaurant.cuisines === "Vegan") {
            restaurantKey = "VEGAN";
        }
        else if (vegetarian_cuisine.includes(restaurant.cuisines)) {
            restaurantKey = "VEGETARIAN";
        }
        else if (pescetarian_cuisine.includes(restaurant.cuisines)) {
            restaurantKey = "PESCETARIAN";
        }    
        else {
            restaurantKey = "OMNIVORE";
        }
        //update restaurant count
        restaurants[restaurantKey]++;

        //create marker w/ appropriate marker type
        var newMarker = L.marker([restaurant.lat, restaurant.lon], {
            icon: icons[restaurantKey]
        });

        //add new marker to appropriate layer
        newMarker.addTo(layers[restaurantKey]);

        //bind popup to marker that will display on click to be rendered as HTML
        newMarker.bindPopup(restaurant.name + "<br> Address: " + restaurant.address + "<br> Cuisine: " + restaurant.cuisine);
    
        //call update legend function
        updateLegend(updatedAt, restaurants);
    }
});
 
console.log(restaurantData);