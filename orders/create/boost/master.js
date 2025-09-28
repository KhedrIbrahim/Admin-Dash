let mapVehicle = document.getElementById("mapVehicle");
let inpAddressTitle = document.getElementById("inpAddressTitle");
let inpVehicleLatitude = document.getElementById("inpVehicleLatitude");
let inpVehicleLongitude = document.getElementById("inpVehicleLongitude");
let viewPinOnMap = document.getElementById("viewPinOnMap");
let boxBtnShow = document.getElementById("boxBtnShow");
let map;
let marker;
let geocoder; 

function initMap() {
    const initialLatLng = { lat: 25.191803817714, lng: 55.27694357803641 };
    const mapStyles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
        }
    ];

    map = new google.maps.Map(mapVehicle, {
        zoom: 11,
        center: initialLatLng,
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    });

    geocoder = new google.maps.Geocoder();

    map.addListener("click", function (event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        inpVehicleLatitude.value = lat;
        inpVehicleLongitude.value = lng;

        placeMarker(lat, lng);
        getPlaceName(lat, lng);
    });
}

function placeMarker(lat, lng) {
    const position = { lat: lat, lng: lng };

    if (marker) {
        marker.setPosition(position);
    } else {
        marker = new google.maps.Marker({
            position: position,
            map: map,
        });
    }

    map.setCenter(position);
}

function getPlaceName(lat, lng) {
    const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
    geocoder.geocode({ location: latlng }, function (results, status) {
        if (status === "OK") {
            if (results[0]) {
                inpAddressTitle.value = results[0].formatted_address;
            } else {
                inpAddressTitle.value = "No address found";
            }
        } else {
            inpAddressTitle.value = "Geocoder failed: " + status;
        }
    });
}

inpVehicleLatitude.addEventListener('input', checkInputs);
inpVehicleLongitude.addEventListener('input', checkInputs);

function checkInputs() {
    const lat = inpVehicleLatitude.value;
    const lng = inpVehicleLongitude.value;

    if (lat && lng) {
        boxBtnShow.style.display = 'block';
        getPlaceName(lat, lng);
    } else {
        boxBtnShow.style.display = 'none';
    }
}


viewPinOnMap.addEventListener('click', function (e) {
    e.preventDefault();
    const lat = parseFloat(inpVehicleLatitude.value);
    const lng = parseFloat(inpVehicleLongitude.value);

    if (!isNaN(lat) && !isNaN(lng)) {
        placeMarker(lat, lng);
        getPlaceName(lat, lng);
    } else {
        alert("Please enter valid coordinates.");
    }
});

initMap();
