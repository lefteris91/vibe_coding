<template>
  <div class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
    <div class="absolute inset-0 bg-[url('/images/logo.png')] opacity-5 bg-cover bg-center"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-pink-900/20 to-transparent"></div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
