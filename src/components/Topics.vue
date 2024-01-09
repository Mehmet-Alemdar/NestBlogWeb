<template>
  <div class="flex flex-row gap-10">
    <CurrentDate />
    <button class="text-base font-extralight text-[#171717] hover:font-light min-w-16">All</button>
    <button class="text-base font-extralight text-[#171717] hover:font-light min-w-16">World</button>
    <button class="text-base font-extralight text-[#171717] hover:font-light min-w-16">Technology</button>

  </div>
</template>

<script setup>
import CurrentDate from './CurrentDate.vue';
import { computed } from 'vue';
import store from '../store';

const selectedTopic = computed(() => store.state.selectedTopic);
</script>