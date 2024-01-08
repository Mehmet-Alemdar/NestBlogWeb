<template>
  <pre>{{ user }}</pre>
</template>

<script setup>
  import { computed } from 'vue'
  import store from '../store';

  const user = computed(() => store.state.meals)
</script>