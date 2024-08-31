import { Weather, Main } from '@/models'

export const weatherNowMapper = ( weatherData ) => {

    const {
        weather,
        main,
        visibility,
        wind,
        clouds,
        dt,
        sys,
    } = weatherData;

    const {
        temp, 
        feels_like,
        temp_min,
        temp_max,
        pressure, 
        humidity
    } = main;

    return new Weather({
        dt,
        main: new Main({
            temp, 
            feelsLike: feels_like,
            tempMin: temp_min,
            tempMax: temp_max,
            pressure, 
            humidity
        }),
        banner: weather[0],
        clouds,
        wind,
        visibility,
        pop: null,
        sys,
        dtTxt: null
    });

}

export const weatherForecastMapper = ( weatherData ) => {

    const {
        dt,
        main,
        weather,
        clouds,
        wind,
        visibility,
        pop,
        sys,
        dt_txt
    } = weatherData;

    const {
        temp, 
        feels_like,
        temp_min,
        temp_max,
        pressure, 
        sea_level,
        grnd_level,
        humidity, 
        temp_kf
    } = main;

    return new Weather({
        dt,
        main: new Main({
            temp, 
            feelsLike: feels_like,
            tempMin: temp_min,
            tempMax: temp_max,
            pressure, 
            seaLevel: sea_level,
            grndLevel: grnd_level,
            humidity, 
            tempKf: temp_kf
        }),
        banner: weather[0],
        clouds,
        wind,
        visibility,
        pop,
        sys,
        dtTxt: dt_txt
    });

}