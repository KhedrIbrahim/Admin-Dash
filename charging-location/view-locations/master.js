function initMap() {
    const mapStyles = [
        {
            featureType: "poi",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit.station",
            stylers: [{ visibility: "off" }]
        }
    ];

    let map = new google.maps.Map(document.getElementById('mapEl'), {
        center: { lat: 25.200304116063112, lng: 55.27134701788259 },
        zoom: 11,
        styles: mapStyles
    });

    let buttons = document.querySelectorAll('.map-btn');

    function smoothZoom(map, targetZoom, callback) {
        let currentZoom = map.getZoom();
        if (currentZoom !== targetZoom) {
            let zoomStep = targetZoom > currentZoom ? 1 : -1;
            let zoomInterval = setInterval(() => {
                if (currentZoom === targetZoom) {
                    clearInterval(zoomInterval);
                    if (callback) callback();
                } else {
                    currentZoom += zoomStep;
                    map.setZoom(currentZoom);
                }
            }, 100);
        } else {
            if (callback) callback();
        }
    }
    buttons.forEach(function (btn) {
        let lat = parseFloat(btn.getAttribute('lat-data'));
        let lng = parseFloat(btn.getAttribute('lng-data'));
        let position = { lat: lat, lng: lng };

        let marker = new google.maps.Marker({
            position: position,
            map: map,
        });

        btn.addEventListener('click', function () {
            map.panTo(marker.getPosition());
            smoothZoom(map, 15);
        });
    });
}
