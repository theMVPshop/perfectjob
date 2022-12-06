alert("success");

var map = L.map("map").setView([30.2019024431465, -97.87393387393803], 13);
// creates the box that holds the map tiles

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
// fills in the map with map tiles, without this the map is just grey

var marker = L.marker([30.2019024431465, -97.87393387393803]).addTo(map);
// creates a marker on the specified coordiantes, above code will be used to auto mark the specified job

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// creates a popup above markers, maybe pull job name from rss feed to fill this pop up

var popup = L.popup()
    .setLatLng([30.2019024431465, -97.9])
    .setContent("I am a standalone popup.")
    .openOn(map);
// standalone popup

