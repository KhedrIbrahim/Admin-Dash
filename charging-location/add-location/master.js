let map;
let marker;
let mapBox = document.getElementById("mapEl");
let popUpAddLocation = document.getElementById("popUpAddLocation");
let inpAddLocationLat = document.getElementById("inpAddLocationLat");
let inpAddLocationLng = document.getElementById("inpAddLocationLng");

function initMap() {
    const dubai = { lat: 25.20113123089713, lng: 55.27691932821317 };

    const mapStyles = [
        {
            featureType: "poi",
            elementType: "labels", 
            stylers: [{ visibility: "off" }] 
        }
    ];
    map = new google.maps.Map(mapBox, {
        center: dubai,
        zoom: 12,
        styles: mapStyles 
    });

    map.addListener("click", (event) => {
        const clickedLocation = event.latLng;

        if (marker) {
            marker.setPosition(clickedLocation);
        } else {
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
            });
        }

        popUpAddLocation.classList.add("act");
        setTimeout(function() {
            popUpAddLocation.classList.add('tran');
        }, 100);
        inpAddLocationLat.value = clickedLocation.lat();
        inpAddLocationLng.value = clickedLocation.lng();
    });
}