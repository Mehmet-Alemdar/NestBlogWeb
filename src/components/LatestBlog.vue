<template>
  <p class="lg:text-lg text-2xl font-bold mb-4">Latest Blogs</p>
  <div v-if="latestBlogs">
    <div class="flex flex-col gap-2 mb-4 border-b-2 lg:border-b-4 lg:border-dotted lg:border-[#CECECE] pb-6 " v-for="blog in latestBlogs" :key="blog.title">
    <div class="flex gap-4 items-center">
      <p class="px-2 py-1 border-2 text-xs md:text-sm font-semibold">{{ blog.topic }}</p>
      <p class="text-[#898989] font-extralight text-xs md:text-sm font-semibold">{{ dateFormat(blog.createdAt) }}</p>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-xl md:text-2xl font-semibold">{{ blog.title }}</p>
      <!-- <p class="text-[#171717] text-sm md:text-base font-extralight">{{truncateText('Image via Warner Bros. Image via Warner Bros. Fantastic Beasts: The Secrets of Dumbledore is currently set to premiere in the United States on April 15, 2022. The movie will be coming out a bit earlier in the UK, arriving in theaters onApril 8, 2022.')}}</p> -->
      <p class="text-[#171717] text-sm md:text-base font-extralight">{{truncateText(blog.content)}}</p>
      <div>
        <img :src="blog.user.profilePicture" alt="avatar" class="rounded-full w-8 h-8 inline-block mr-2 object-cover" />
        <span class="text-sm md:text-base">By </span>
        <span class="text-[#171717] text-sm md:text-base font-bold">{{ blog.user.name }}</span>
      </div>
      <router-link v-if="truncated" to="blog" class="underline underline-offset-auto text-xs md:text-sm text-left font-medium">Continue Reading</router-link>
    </div>
  </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex';
  import { dateFormat } from '../lib/dateFormatter';

  export default {
    name: 'LatestBlog',
    data() {
      return {
        truncated: false
      }
    },
    methods: {
      truncateText(text) {
        if (text.length > 100) {
          this.truncated = true;
          return text.slice(0, 100) + '...';
        } else {
          return text;
        }
      },
      dateFormat
    },
    computed: {
      ...mapGetters(['latestBlogs'])
    },
  }
</script>