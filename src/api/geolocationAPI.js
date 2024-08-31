import axios from 'axios';

const _APPID = import.meta.env.VITE_OPENWEATHER_KEY;

const paramsGeolocation = {
    'appid': _APPID,
    'limit': '5'
}

const geolocationAPI = axios.create({
    baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
    params: { ...paramsGeolocation, q: 'Uriangato' }
});

export default geolocationAPI;