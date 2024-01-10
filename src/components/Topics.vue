<template>
  <div class="flex flex-col text-center md:flex-row gap-2 md:gap-10">
    <CurrentDate />
    <div class="flex flex-row overflow-y-auto gap-10 py-6 md:pb-6">
        <button class="text-base font-extralight text-left text-[#171717] hover:underline hover:underline-offset-1">All</button>
        <button class="text-base font-extralight text-left text-[#171717] hover:underline hover:underline-offset-1">World</button>
        <button class="text-base font-extralight text-left text-[#171717] hover:underline hover:underline-offset-1">Technology</button>
      </div>
  </div>
</template>

<script setup>
import CurrentDate from './CurrentDate.vue';
import { computed } from 'vue';
import store from '../store';

const selectedTopic = computed(() => store.state.selectedTopic);
</script>