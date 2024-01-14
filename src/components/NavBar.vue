<template>
  <div class="w-11/12 flex justify-center border-b-2 py-4 my-4">
    <div class="bg-white flex-1 text-center relative">
      <router-link to="/" class="font-black text-2xl absolute inset-x-0 mx-auto w-36 mt-1">NESTBLOG</router-link>
      <div class="flex justify-end">
        <div class="ml-auto hidden lg:flex">
          <!-- <LoginButtons /> -->
          <ProfileAndCreateButtons />
        </div>
        <div class="ml-auto flex lg:hidden">
          <MenuButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginButtons from './LoginButtons.vue';
import MenuButton from './MenuButton.vue';
import ProfileAndCreateButtons from './ProfileAndCreateButtons.vue';
</script>
