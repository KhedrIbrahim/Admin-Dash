let mapBox = document.getElementById("mapEl");

const availableVehicles = {
    vehicles: [
        {
            title: "Vehicle 1",
            driver: "Alex",
            contact: "+971 123 456 789",
            lat: 25.2303336136819,
            lng: 55.3348231846243
        },
        {
            title: "Vehicle 2",
            driver: "Mark",
            contact: "+971 123 456 789",
            lat: 25.230550314135,
            lng: 55.29950010041193
        },
        {
            title: "Vehicle 2 Pro Max",
            driver: "Naveed",
            contact: "+971 123 456 789",
            lat: 25.23730550314135,
            lng: 55.29950010041193
        },
        {
            title: "Vehicle 3",
            driver: "Ahmad",
            contact: "+971 123 456 789",
            lat: 25.218680491643028,
            lng: 55.26949262960758
        },
        {
            title: "Vehicle 4",
            driver: "Mohamad",
            contact: "+971 123 456 789",
            lat: 25.196793838949638,
            lng: 55.2978030721138
        },
        {
            title: "Vehicle 5",
            driver: "William",
            contact: "+971 123 456 789",
            lat: 25.218465328918295,
            lng: 55.30045652677135
        },
    ]
};

let map;
let infoWindow;

function initMap() {
    const mapStyles = [
        {
            featureType: 'poi.business',
            stylers: [{ visibility: 'off' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
        }
    ];

    map = new google.maps.Map(mapBox, {
        zoom: 14,
        center: { lat: 25.276987, lng: 55.296249 },
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: mapStyles
    });

    availableVehicles.vehicles.forEach(vehicle => {
        getDirections(vehicle.lat, vehicle.lng, vehicle);
    });

    const bounds = new google.maps.LatLngBounds();
    availableVehicles.vehicles.forEach(vehicle => {
        bounds.extend({ lat: vehicle.lat, lng: vehicle.lng });
    });
    map.fitBounds(bounds);
}

function getDirections(lat, lng, vehicle) {
    const directionsService = new google.maps.DirectionsService();

    const destination = { lat: lat + 0.01, lng: lng + 0.01 };

    directionsService.route({
        origin: { lat, lng },
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            const route = response.routes[0];
            const leg = route.legs[0];
            if (leg.steps.length > 1) {
                const startLocation = leg.steps[0].start_location;
                const nextLocation = leg.steps[1].start_location;

                const heading = google.maps.geometry.spherical.computeHeading(startLocation, nextLocation);
                createRotatedIcon(heading, vehicle, lat, lng);
            }
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}

function createRotatedIcon(heading, vehicle, lat, lng) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = '../../img/icon/watt-vehicle5.png';
    
    image.onload = function() {
        const size = 40;
        canvas.width = size;
        canvas.height = size;

        context.translate(size / 2, size / 2);
        context.rotate(heading * Math.PI / 180);
        context.drawImage(image, -size / 2, -size / 2, size, size);

        const vehicleMarker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: vehicle.title,
            icon: {
                url: canvas.toDataURL(),
                scaledSize: new google.maps.Size(40, 40),
                anchor: new google.maps.Point(20, 20)
            }
        });

        const newInfoWindow = new google.maps.InfoWindow();

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results[0]) {
                const address = results[0].formatted_address;
                newInfoWindow.setContent(`<div class="map-pop-dtls">
                                        <div class="dtl title">${vehicle.title}</div>
                                        <div class="dtl"><span class="tit">Driver:</span> ${vehicle.driver}</div>
                                        <div class="dtl"><span class="tit">Contact:</span> ${vehicle.contact}</div>
                                        <div class="dtl"><span class="tit">Location:</span> ${address}</div>
                                    </div>`);
            } else {
                newInfoWindow.setContent(`<div class="map-pop-dtls">
                    <div class="dtl title">${vehicle.title}</div>
                    <div class="dtl"><span class="tit">Driver:</span> ${vehicle.driver}</div>
                    <div class="dtl"><span class="tit">Contact:</span> ${vehicle.contact}</div>
                    <div class="dtl"><span class="tit">Location:</span> Unable to retrieve address.</div>
                </div>`);
            }
        });

        vehicleMarker.addListener('click', () => {
            if (infoWindow) {
                infoWindow.close();
            }
            infoWindow = newInfoWindow;
            newInfoWindow.open(map, vehicleMarker);
        });
    };
    
    image.onerror = function() {
        console.error("Failed to load the image.");
    };
}
