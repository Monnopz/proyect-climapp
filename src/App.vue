<script setup>
import PrincipalWeatherCard from '@/components/PrincipalWeatherCard.vue'
import OtherCityWeatherCard from '@/components/OtherCityWeatherCard.vue'
import DayForecastCard from '@/components/DayForecastCard.vue'
import UpcomingWeatherByTimeIntervalsCard from '@/components/UpcomingWeatherByTimeIntervalsCard.vue'
import NavBar from '@/components/NavBar.vue'

import { useApp } from '@/composables/useApp'

const { weatherNow, hasValueWeatherNow } = useApp();

</script>

<template>
  <main>
  <div class="min-h-screen min-w-screen px-16 background__mapamundi-image">
    <div class="h-auto w-full grid grid-cols-1 mb-4">
      <div class="col-auto">
        <NavBar/>
      </div>
    </div>
    <!-- TODO: Crear una pantalla en caso de que la carga haya fallado -->
    <!-- TODO: Crear un loader skeleton o un loader genérico -->
    <div v-if="hasValueWeatherNow" class="h-full w-full grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-10">
      <!-- La medida será md para arriba = vista escritorio
      La medida será sm para abajo = vista movil -->
      <div class="col-span-1">
        <PrincipalWeatherCard :weatherNow="weatherNow"/>
      </div>
      <div class="col-span-1 mb-8 lg:mb-0 lg:col-span-2">
        <UpcomingWeatherByTimeIntervalsCard />
      </div>
      <div class="hidden lg:block col-span-1">
        <div class="font-semibold text-xl text-white mb-4">Other large cities</div>
        <div class="space-y-6">
          <OtherCityWeatherCard />
        </div>
      </div>
      <div class="hidden lg:block col-span-2">
        <div class="font-semibold text-xl text-white mb-4">5-day forecast</div>
        <div class="space-y-3">
          <DayForecastCard />
        </div>
      </div>
      <div class="col-span-1 lg:col-span-3 text-center lg:text-end font-semibold text-sm">
        <span class="footer-label">Con información de <a href="https://openweathermap.org" target="_blank">openweathermap.org</a></span>
      </div>
    </div>
  </div>
  </main>
</template>

<style scoped>
.background__mapamundi-image {
  background-image: url('https://pngimg.com/uploads/world_map/world_map_PNG28.png');
}
.footer-label {
  background: #1f7dff51;
  padding: 4px 12px;
  border-radius: 4px;
}
</style>