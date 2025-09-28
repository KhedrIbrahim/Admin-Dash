let mapCustomerLocation = document.getElementById("mapCustomerLocation");
let inpCustomerAddressTitle = document.getElementById("inpCustomerAddressTitle");
let inpCustomerLatitude = document.getElementById("inpCustomerLatitude");
let inpCustomerLongitude = document.getElementById("inpCustomerLongitude");
let viewPinCustomerOnMap = document.getElementById("viewPinCustomerOnMap");
let boxBtnShowCustomer = document.getElementById("boxBtnShowCustomer");

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

    map = new google.maps.Map(mapCustomerLocation, {
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

        inpCustomerLatitude.value = lat;
        inpCustomerLongitude.value = lng;

        geocodeLatLng(lat, lng, inpCustomerAddressTitle);

        placeMarker(lat, lng, inpCustomerAddressTitle.value);
    });
}

function placeMarker(lat, lng, title) {
    const position = { lat: lat, lng: lng };

    if (marker) {
        marker.setPosition(position);
        marker.setTitle(title || "Customer Location");
    } else {
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title || "Customer Location" 
        });
    }

    map.setCenter(position);
}

function geocodeLatLng(lat, lng, inputField) {
    const latlng = { lat: lat, lng: lng };

    geocoder.geocode({ location: latlng }, function (results, status) {
        if (status === "OK") {
            if (results[0]) {
                inputField.value = results[0].formatted_address; 
            } else {
                inputField.value = "Unknown Location";
            }
        } else {
            console.log("Geocoder failed due to: " + status);
        }
    });
}

inpCustomerLatitude.addEventListener('input', checkInputs);
inpCustomerLongitude.addEventListener('input', checkInputs);

function checkInputs() {
    const lat = inpCustomerLatitude.value;
    const lng = inpCustomerLongitude.value;

    if (lat && lng) {
        boxBtnShowCustomer.style.display = 'block';
    } else {
        boxBtnShowCustomer.style.display = 'none';
    }
}

viewPinCustomerOnMap.addEventListener('click', function (e) {
    e.preventDefault();
    const lat = parseFloat(inpCustomerLatitude.value);
    const lng = parseFloat(inpCustomerLongitude.value);

    if (!isNaN(lat) && !isNaN(lng)) {
        geocodeLatLng(lat, lng, inpCustomerAddressTitle); 
        placeMarker(lat, lng, inpCustomerAddressTitle.value);
    } else {
        alert("Please enter valid coordinates.");
    }
});

// Destination Map
let mapDestinationLocation = document.getElementById("mapDestinationLocation");
let inpDestinationAddressTitle = document.getElementById("inpDestinationAddressTitle");
let inpDestinationLatitude = document.getElementById("inpDestinationLatitude");
let inpDestinationLongitude = document.getElementById("inpDestinationLongitude");
let viewPinDestinationOnMap = document.getElementById("viewPinDestinationOnMap");
let boxBtnShowDestination = document.getElementById("boxBtnShowDestination");

let mapDestination;
let markerDestination;

function initMapDestination() {
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

    mapDestination = new google.maps.Map(mapDestinationLocation, {
        zoom: 11,
        center: initialLatLng,
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    });

    mapDestination.addListener("click", function (event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        inpDestinationLatitude.value = lat;
        inpDestinationLongitude.value = lng;

        geocodeLatLng(lat, lng, inpDestinationAddressTitle);

        placeMarkerDestination(lat, lng, inpDestinationAddressTitle.value);
    });
}

function placeMarkerDestination(lat, lng, title) {
    const position = { lat: lat, lng: lng };

    if (markerDestination) {
        markerDestination.setPosition(position);
        markerDestination.setTitle(title || "Destination Location");
    } else {
        markerDestination = new google.maps.Marker({
            position: position,
            map: mapDestination,
            title: title || "Destination Location" 
        });
    }

    mapDestination.setCenter(position);
}

inpDestinationLatitude.addEventListener('input', checkInputsDestination);
inpDestinationLongitude.addEventListener('input', checkInputsDestination);

function checkInputsDestination() {
    const lat = inpDestinationLatitude.value;
    const lng = inpDestinationLongitude.value;

    if (lat && lng) {
        boxBtnShowDestination.style.display = 'block';
    } else {
        boxBtnShowDestination.style.display = 'none';
    }
}

viewPinDestinationOnMap.addEventListener('click', function (e) {
    e.preventDefault();
    const lat = parseFloat(inpDestinationLatitude.value);
    const lng = parseFloat(inpDestinationLongitude.value);

    if (!isNaN(lat) && !isNaN(lng)) {
        geocodeLatLng(lat, lng, inpDestinationAddressTitle);
        placeMarkerDestination(lat, lng, inpDestinationAddressTitle.value);
    } else {
        alert("Please enter valid coordinates.");
    }
});

window.onload = function() {
    initMap();
    initMapDestination();
};
