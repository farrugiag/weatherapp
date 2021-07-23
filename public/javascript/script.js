console.log(">>bien chargé")

var mymap= L.map('worldmap',
    {
        center: [48.866667, 2.333333],
        zoom: 4
    })

var customIcon = L.icon({
    iconUrl: './images/leaf-green.png',
    shadowUrl: './images/leaf-shadow.png',

    iconSize: [38,95],
    shadowSize:[50, 64],

    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],

    popupAnchor: [-3, -76]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

var findCity = document.getElementsByTagName('li')
for (var i =0; i<findCity.length; i++){
    var lon = findCity[i].dataset.lon
    var lat = findCity[i].dataset.lat
    var name = findCity[i].dataset.name
    console.log (">>lon", lon)
    L.marker([lat, lon], {icon: customIcon}).addTo(mymap).bindPopup(name)
}