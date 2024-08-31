<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <!-- flex flex-wrap justify-between lg:grid lg:grid-cols-8 gap-x-3 gap-y-3 lg:gap-y-0 h-full w-full -->
  <div class="flex flex-wrap justify-start sm:justify-start lg:grid lg:grid-cols-8 gap-x-3 gap-y-3 lg:gap-y-0 h-full w-full">
    <div class="card card-side bg-neutral max-w-26 pb-4 pt-2 lg:pt-0 px-2" v-for="num in 8" :key="num">
      <div class="w-full grid">
        <div class="flex rounded text-white">
          <div class="w-full text-center content-center">
            <div class="font-medium text-xs my-1">09:00 HRS</div>
            <div class="divider my-0 mx-2"></div>
          </div>
        </div> 
        <div class="flex rounded text-gray-400">
          <div class="w-full text-center content-center">
            <FontAwesomeIcon class="mb-2" style="color: #67e8f9" icon="fa-solid fa-snowflake" size="2xl" />
            <div class="font-light text-xs">Snow</div>
          </div>
        </div> 
        <div class="flex rounded text-white mt-4">
          <div class="font-bold w-full text-center content-center">
            <div class="text-4xl">-{{num}}°</div>
          </div>
        </div> 
      </div>
    </div>
    
  </div>
</template>

<style scoped>

</style>