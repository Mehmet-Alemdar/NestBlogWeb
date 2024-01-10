<template>
  <div class="text-sm flex flex-col justify-center">
    <p class="font-bold	">{{ formattedDay }}</p>
    <p class="font-extralight">{{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const formattedDate = ref('');
const formattedDay = ref('');
onMounted(() => {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dayOptions = { weekday: 'long' };
  formattedDay.value = currentDate.toLocaleDateString('en-US', dayOptions);
  formattedDate.value = currentDate.toLocaleDateString('en-US', options);
});
</script>