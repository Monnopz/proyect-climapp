<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="card card-side bg-neutral w-auto" v-for="num in 3" :key="num">
    <div class="w-36 card-body px-4 pt-4 pb-5">
      <div class="max-h-28 flex rounded">
        <div class="w-full text-start content-start">
          <span class="font-semibold text-gray-400">US</span>
          <div class="font-semibold text-2xl text-white">New York</div>
          <span class="font-medium text-xs text-slate-300">Clear Sky</span>
        </div>
      </div> 
    </div>
    <div class="w-36 card-body px-4 pt-4 pb-5">
      <div class="w-full h-full pt-2 text-end">
        <FontAwesomeIcon class="pb-2" style="color: #fcd34d" icon="fa-solid fa-sun" size="2xl" />
        <div class="font-semibold text-2xl text-white">14°</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>