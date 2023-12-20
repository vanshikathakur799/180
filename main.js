let latitude, longitude, destination

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation()
})   

function initGeolocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success)
}
else {
    alert("Sorry, your browser does not support geolocation services.")
}
}

$(function(){
    $("#navigate-button").click(function(){
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[0]};${destination[1]}`
    })
})

function success(position) {
    longitude = position.coords.longitude
    latitude = position.coords.latitude

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 15
    })

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }).on('result', function(e){
            destination = e.result.center
        })
        )

var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gateway")
var img3 = document.querySelector("#golden")
var img4 = document.querySelector("#gate")
var img5 = document.querySelector("#lotus")
var img6 = document.querySelector("#minar")
var img7 = document.querySelector("#taj")
var img8 = document.querySelector("#memorial")

var marker1 = new mapboxgl.Marker({
    element : img1
})
.setLngLat([75.85133, 26.98547]).addTo(map)

var marker2 = new mapboxgl.Marker({
    element : img2
}).setLngLat([72.834641, 18.922064]).addTo(map)

var marker3 = new mapboxgl.Marker({
    element : img3
}).setLngLat([74.876091, 31.620132]).addTo(map)

var marker4 = new mapboxgl.Marker({
    element : img4
}).setLngLat([ 77.229446, 28.612894]).addTo(map)

var marker5 = new mapboxgl.Marker({
    element : img5
}).setLngLat([77.259132, 28.553558]).addTo(map)

var marker6 = new mapboxgl.Marker({
    element : img6
}).setLngLat([78.474533, 17.361431]).addTo(map)

var marker7 = new mapboxgl.Marker({
    element : img7
}).setLngLat([78.042068, 27.173891]).addTo(map)

var marker8 = new mapboxgl.Marker({
    element : img8
}).setLngLat([88.3426, 22.5448]).addTo(map)
    
}