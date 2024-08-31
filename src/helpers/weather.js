import { weatherAPI } from '@/api';

import { weatherForecastMapper, weatherNowMapper } from '@/mappers';

export const getInitialCoordinates = async () => {

    const { data } = await weatherAPI.get('/weather');

    // const weather = data.list.map( weatherForecastMapper )

    const {
        coord,
        weather,
        main,
        visibility,
        wind,
        clouds,
        dt,
        sys,
        timezone,
        id,
        name,
    } = data;

    const weatherNow = weatherNowMapper({ weather, main, visibility, wind, clouds, dt, sys });

    return weatherNow

}