// Centrado en Tacna
var map = L.map('map').setView([-18.0066, -70.2463], 13);

// Tiles oscuros (Carto Dark)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20
}).addTo(map);

// Marcador en el centro
L.marker([-18.0066, -70.2463]).addTo(map)
    .bindPopup('Tacna, Perú')
    .openPopup();




map.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    console.log("Coordenadas:", lat, lng);
});


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject("Geolocalización no soportada por este navegador.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                resolve([lat, lng]);
            },
            (error) => {
                reject(error.message);
            }
        );
    });
}


async function mostrarUbicacion() {
    try {
        const coords = await getCurrentLocation();
        console.log(coords);

        // Ejemplo: centrar mapa de Leaflet y colocar marcador
        // map.setView([lat, lng], 15);
        // L.marker([lat, lng]).addTo(map).bindPopup("Tu ubicación").openPopup();

    } catch (error) {
        console.error("No se pudo obtener la ubicación:", error);
    }
}

// Llamada

/**
 * Funciones por parte del recolector, en el apartado
 * de transaccion de greenpoint
 */

function closeGreenpoint() {

}

function getGreenPoint() {
    
}

/**
 * Funciones por parte del productor, en el apartado
 * de transaccion de greenpoint
 */

function createGreenPoint() {

}

function deleteGreenPoint() {

}

function modifyGreenPoint() {

}

function getGreenPoint() {

}