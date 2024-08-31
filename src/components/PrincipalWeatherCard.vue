<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = defineProps({
  weatherNow: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="card card-side bg-neutral w-auto">
    <div class="w-36 card-body px-6 lg:px-4 pt-8 pb-6">
      <div class="h-20 flex rounded text-white">
        <div class="font-bold w-full text-start content-start">
          <div class="text-6xl">{{parseInt(weatherNow.main.temp)}}°</div>
        </div>
      </div> 
      <div class="h-10 flex rounded text-gray-400">
        <div class="w-full text-start content-center">
          <FontAwesomeIcon class="mr-3" style="color: #67e8f9" icon="fa-solid fa-snowflake" size="2xl" />
          <span class="font-light text-xs">{{weatherNow.banner.main}}</span>
        </div>
      </div> 
      <div class="flex rounded text-slate-300">
        <div class="w-full text-start content-center">
          <span class="font-medium text-xs">Feels like: {{parseInt(weatherNow.main.feelsLike)}}°</span>
        </div>
      </div>
    </div>
    <div class="w-36 card-body px-6 lg:px-4 pt-8 pb-6">
      <div class="h-20 flex rounded text-white pt-1 overflow-hidden">
        <div class="w-full flex justify-end text-end lg:block content-start">
          <!-- TODO: Agregar la ciudad desde la clase -->
          <div class="font-semibold text-2xl">Mexico</div>
          <div class="font-medium text-xs order-first lg:order-last px-4 lg:px-0">
            <div>Last update time</div>
            <div>{{weatherNow.dt}} HRS</div>
          </div>
        </div>
      </div> 
      <div class="h-10 flex rounded text-white">
        <div class="w-full text-end content-center">
          <!-- TODO: Añadir imagenes de iconos y mapearlos -->
          <!-- <img src="https://openweathermap.org/img/wn/10d@2x.png" alt=""> -->
          <FontAwesomeIcon class="mr-3" style="color: #fde047" icon="fa-solid fa-wind" size="lg" />
          <span class="font-semibold">{{weatherNow.wind.speed}} m/s</span>
        </div>
      </div>
      <div class="flex rounded text-slate-300">
        <div class="w-full text-end content-center">
          <span class="font-medium text-xs">{{parseInt(weatherNow.main.tempMin)}}° to {{parseInt(weatherNow.main.tempMax)}}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>