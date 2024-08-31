import { ref, computed, onMounted } from 'vue'

import { getInitialCoordinates } from '@/helpers'

const weatherNow = ref({});

export const useApp = () => {

    const getWeatherNow = async () => {
        weatherNow.value = await getInitialCoordinates();
    }

    // En los Hooks de Vue se puede agregar codigo asincrono
    onMounted(async() =>{
        await getWeatherNow()
    })

    return {

        weatherNow,

        // // Si el valor cambia, se vuelve a computar
        hasValueWeatherNow: computed(() => !!Object.keys(weatherNow.value).length)
    }
}