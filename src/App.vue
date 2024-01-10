<template>
  <div class="flex flex-col items-center z-1">
    <Navbar />
    <div class="w-11/12">
      <Topics />
      <Home />
    </div>
    <!-- <router-view /> -->
  </div>
  <SideMenu />
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import Topics from './components/Topics.vue';
import Home from './views/Home.vue';
import SideMenu from './components/SideMenu.vue';
</script>

<style>
body {
  /* font-family: "Serif"; */
}
</style>
