import axios from 'axios';

const _APPID = import.meta.env.VITE_OPENWEATHER_KEY;

const paramsWeather = {
    'appid': _APPID,
    'units': 'metric',
    'lang': 'en'
}

const weatherAPI = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: { ...paramsWeather, lat: 19.4254516, lon: -99.1500585 } // CDMX
});

export default weatherAPI;

// TODO: Obtener ubicacion del navegador. Si no se obtiene, utilizar una ubicación por defecto
// TODO: Agregar un loading al momento de cargar toda la información
// TODO: Agregar VueQuery al final


// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var latitud = position.coords.latitude;
//       var longitud = position.coords.longitude;
//       console.log("Latitud: " + latitud + ", Longitud: " + longitud);
//     }, function(error) {
//       console.error("Error al obtener la ubicación: ", error);
//     }, {
//       enableHighAccuracy: true, // Alta precisión
//       timeout: 10000, // Tiempo máximo en milisegundos (10 segundos)
//       maximumAge: 0 // No se acepta una ubicación en caché
//     });
//   } else {
//     console.log("La geolocalización no está disponible en este navegador.");
//   }

// getInitialLocation({ commit }) {
//     navigator.geolocation.getCurrentPosition(
//         ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),  // Se envia un objeto con esos valores
//         ( err ) => { 
//             console.log(err) 
//             throw new Error('No geolocation')
//         }
//     )
// },
  