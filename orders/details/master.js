let mapBox = document.getElementById("map");
let wattVehicleLocation = document.getElementById('wattVehicleLocation');
let wattVehicleLat = parseFloat(wattVehicleLocation.getAttribute("lat"));
let wattVehicleLng = parseFloat(wattVehicleLocation.getAttribute("lng"));

let customerLocation = document.getElementById("customerLocation");
let customerLat = parseFloat(customerLocation.getAttribute("lat"));
let customerLng = parseFloat(customerLocation.getAttribute("lng"));

let btnCustomerLocation = document.getElementById("btnCustomerLocation");

let map;

function initMap() {
    map = new google.maps.Map(mapBox, {
        zoom: 14,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });

    const customerIcon = {
        url: '../../img/icon/location-pin.png',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50)
    };

    const vehicleIcon = {
        url: '../../img/icon/location-arrow.png',
        scaledSize: new google.maps.Size(40, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 50)
    };

    const customerMarker = new google.maps.Marker({
        position: { lat: customerLat, lng: customerLng },
        map: map,
        title: 'Customer Location',
        icon: customerIcon
    });

    const vehicleMarker = new google.maps.Marker({
        position: { lat: wattVehicleLat, lng: wattVehicleLng },
        map: map,
        title: 'Watt Vehicle Location',
        icon: vehicleIcon
    });

    const bounds = new google.maps.LatLngBounds();
    bounds.extend({ lat: customerLat, lng: customerLng });
    bounds.extend({ lat: wattVehicleLat, lng: wattVehicleLng });
    map.fitBounds(bounds);
    btnCustomerLocation.addEventListener("click", () => {
        map.panTo({ lat: customerLat, lng: customerLng });
        map.setZoom(16);
    });
}
