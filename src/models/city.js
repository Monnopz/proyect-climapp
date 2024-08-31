
export class City {

    constructor({ id, name, coord, country, population, timezone, sunrise, sunset }) {
        this.id = id,
        this.name = name,
        this.coord = new Coord(coord),
        this.country = country,
        this.population = population,
        this.timezone = timezone,
        this.sunrise = sunrise,
        this.sunset = sunset
    }
}

class Coord {
    constructor({ lat, lon }) {
        this.lat = lat,
        this.lon = lon
    }
}