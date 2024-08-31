<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="card card-side bg-neutral w-auto" v-for="num in 5" :key="num">
    <div class="w-1/12 card-body px-4 pt-4 pb-5">
      <div class="h-6 w-full flex rounded">
        <div class="w-full text-start content-center">
          <div class="font-semibold text-xl text-white">Today</div>
        </div>
      </div> 
    </div>
    <div class="w-1/12 card-body px-4 pt-4 pb-5">
      <div class="w-full h-full content-center">
        <FontAwesomeIcon class="mr-4"style="color: #fde047" icon="fa-solid fa-wind" size="xl" />
        <span class="font-medium text-xs font-semibold">Clouds</span>
      </div>
    </div>
    <div class="w-5/12 card-body px-4 pt-4 pb-5">
      <div class="rounded-full text-white font-semibold text-end overflow-hidden">
        <!-- <progress class="progress progress-primary w-2/2 h-2" value="40" max="100"></progress> -->
        <span class="mx-2">Min: -1°</span>
        <span class="mx-2">Max: 30°</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>