<template>
    <div class="py-4 flex flex-col gap-2">
    <div class="flex gap-2 text-xl font-bold">
      <p class="text-black">{{ props.title }},</p>
      <p class="text-[#b0b0b0]">54</p>
    </div>
    <div class="flex flex-nowrap overflow-x-auto scrollbar-hide" ref="scrollContainer">
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
      <UserProfileBlogCard />
    </div>
    <div class="mt-3 text-center flex justify-center gap-4">
      <button @click="scrollLeft" class="bg-white py-2 px-4 md:py-4 md:px-6 border border-black hover:bg-[#F5F5F5] ">
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-black" />
      </button>
    <button @click="scrollRight" class="bg-white py-2 px-4 md:py-4 md:px-6 border border-black hover:bg-[#F5F5F5] ">
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-black" />
    </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserProfileBlogCard from '../components/UserProfileBlogCard.vue';
const props = defineProps(["title"])
const scrollContainer = ref(null);

const scrollLeft = () => {
  scrollContainer.value.scrollTo({
    left: scrollContainer.value.scrollLeft - scrollContainer.value.offsetWidth,
    behavior: 'smooth'
  });
};

const scrollRight = () => {
  scrollContainer.value.scrollTo({
    left: scrollContainer.value.scrollLeft + scrollContainer.value.offsetWidth,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>