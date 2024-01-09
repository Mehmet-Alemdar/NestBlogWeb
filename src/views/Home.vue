<template>
  <div class="w-full flex flex-row mt-10">
    <div class="flex-1 pr-3 border-r ">
      <RandomTopic />
    </div>
    <div class="flex-1 px-3 border-r ">
      <LatestBlog />
    </div>
    <div class="flex-1 px-3">4</div>
  </div>
</template>

<script setup>
import RandomTopic from '../components/RandomTopic.vue';
import LatestBlog from '../components/LatestBlog.vue';
</script>