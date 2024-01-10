<template>
  <div class="w-11/12 flex justify-center border-b-2 p-4 m-4">
    <div class="bg-white flex-1 max-w-screen-2xl text-center relative">
      <h1 class="font-black text-2xl absolute inset-x-0 mx-auto w-36 mt-2">NESTBLOG</h1>
      <div class="flex justify-end">
        <div class="ml-auto hidden md:flex">
          <LoginButtons />
        </div>
        <div class="ml-auto flex md:hidden">
          <MenuButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginButtons from './LoginButtons.vue';
import MenuButton from './MenuButton.vue';
</script>
