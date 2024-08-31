export class Weather {

    constructor({dt, main, banner, clouds, wind, visibility, pop, sys, dtTxt}) {
        this.dt = this.convertEPOCHToTimeDate(dt),
        this.main = main,
        this.banner = new Banner(banner),
        this.clouds = new Clouds(clouds),
        this.wind = new Wind(wind),
        this.visibility = visibility,
        this.pop = pop,
        this.sys = new Sys(sys),
        this.dtTxt = this.convertEPOCHToTimeDate(dtTxt)
    }

    convertEPOCHToTimeDate( epocValue ) {
        return new Date(parseInt(epocValue) * 1000).toLocaleTimeString().slice(0,-3)
    }

}

export class Main {

    constructor({temp, feelsLike, tempMin, tempMax, pressure, seaLevel, grndLevel, humidity, tempKf}) {
        this.temp = temp, 
        this.feelsLike = feelsLike,
        this.tempMin = tempMin,
        this.tempMax = tempMax,
        this.pressure = pressure, 
        this.seaLevel = seaLevel,
        this.grndLevel = grndLevel,
        this.humidity = humidity, 
        this.tempKf = tempKf
    }

}

class Banner {

    constructor({id, main, description, icon}) {
        this.id = id,
        this.main = main,
        this.description = description,
        this.icon = icon
    }

}

class Clouds {

    constructor({all}) {
        this.all = all
    }

}

class Wind {

    constructor({speed, deg, gust}) {
        this.speed = speed,
        this.deg = deg,
        this.gust = gust
    }

}

class Sys {
    
    constructor({id, podtype, country, sunrise, sunset}) {
        this.id = id, 
        this.podtype = podtype, 
        this.country = country, 
        this.sunrise = sunrise, 
        this.sunset = sunset
    }

}