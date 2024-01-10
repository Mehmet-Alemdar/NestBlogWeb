<template>
  <div class="flex justify-end ml-2 px-4 py-1.5">
    <button class="text-xl" @click="toggleMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '../store';

const menuOpen = computed(() => store.state.menuOpen);
const toggleMenu = () => {
  store.commit('toggleMenu');
};
</script>
