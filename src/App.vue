<template>
  <div class="flex flex-col items-center">
    <Navbar />
    <router-view />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
</style>
