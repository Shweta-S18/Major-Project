mapboxgl.accessToken =  mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v12', 
center: listing.geometry.coordinates, 
zoom: 9,
});


const marker =  new mapboxgl.Marker({color: "red"})
.setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(`<h3>${listing.location}</h3><p>Exact Location will be provided after booking</p>`))
.addTo(map);