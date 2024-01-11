<template>
  <div class="w-full flex flex-col mt-2 py-5 lg:flex-row">
    <div class="flex-1 px-3 lg:border-r">
      <RandomTopic />
    </div>
    <div class="flex-1 px-3 lg:border-r">
      <LatestBlog />
    </div>
    <div class="flex-1 px-3">
      <MostRead />
    </div>
  </div>
</template>

<script setup>
import RandomTopic from '../components/RandomTopic.vue';
import LatestBlog from '../components/LatestBlog.vue';
import MostRead from '../components/MostRead.vue';
</script>