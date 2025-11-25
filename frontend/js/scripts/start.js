// Manejo dinámico para categorías
document.querySelectorAll('[data-category]').forEach(button => {
  button.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    console.log('Filtrar por:', category);
    
    // Ejemplo: aplicar clase "active"
    document.querySelectorAll('[data-category]').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Tu lógica de filtrado aquí
  });
});

// Geolocalización (se mantiene separada)
document.getElementById('btn-geolocalizacion').addEventListener('click', () => {
  // ... mismo código que arriba
});


class MapSingleton {
  static instance;

  constructor() {
    // Si ya existe una instancia, retornamos esa misma
    if (MapSingleton.instance) return MapSingleton.instance;

    // Creamos el mapa solo una vez
    this.map = L.map('map').setView([-18.0066, -70.2463], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // Guardamos la instancia para futuras llamadas
    MapSingleton.instance = this;
  }

  getMap() {
    return this.map;
  }
}

var map = new MapSingleton().getMap()