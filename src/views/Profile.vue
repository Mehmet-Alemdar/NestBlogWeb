<template>
  <div class="flex items-center gap-1 border-b pb-3">
    <div class="flex flex-col text-center gap-2">
      <img src="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" alt="profile icon" class="w-28 md:w-64 rounded"/>
      <p class="font-light text-xs md:text-base lg:text-xl">Harrison</p>
    </div>
    <div class="flex flex-1 justify-around text-center">
      <div>
        <p class="font-bold text-xs md:text-sm lg:text-xl">Posted</p>
        <p class="text-xs md:text-sm lg:text-xl">0</p>
      </div>
      <div>
        <p class="font-bold text-xs md:text-sm lg:text-xl">Likes</p>
        <p class="text-xs md:text-sm lg:text-xl">0</p>
      </div>
      <div>
        <p class="font-bold text-xs md:text-sm lg:text-xl">You Liked</p>
        <p class="text-xs md:text-sm lg:text-xl">0</p>
      </div>
    </div>
  </div>
  <ProfileBlogs title="Your blogs"/>
  <ProfileBlogs title="Blogs you liked"/>
</template>

<script setup>
import ProfileBlogs from '../components/ProfileBlogs.vue';
</script>

