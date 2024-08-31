<script setup>

</script>

<template>
  <div class="navbar py-6">
    <div class="flex-1">
      <div class="form-control">
        <label class="input input-bordered rounded-full input-md bg-neutral flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-7 h-7 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
          <input type="text" class="lg:grow" placeholder="Search city..." />
        </label>
      </div>
    </div>
    <div class="flex-none gap-2">
      <label class="cursor-pointer grid place-items-center">
        <input type="checkbox" class="toggle toggle-lg toggleCustom row-start-1 col-start-1 col-span-2"/>
        <div class="font-semibold text-md col-start-1 row-start-1">°C</div>
        <div class="font-semibold text-md col-start-2 row-start-1 mr-1">°F</div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.toggleCustom {
  background-color: white;
}
</style>