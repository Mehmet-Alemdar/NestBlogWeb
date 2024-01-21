<template>
  <div class="flex flex-col">
    <Topics />
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
  </div>
</template>

<script>
import RandomTopic from '../components/RandomTopic.vue';
import LatestBlog from '../components/LatestBlog.vue';
import MostRead from '../components/MostRead.vue';
import Topics from '../components/Topics.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    RandomTopic,
    LatestBlog,
    MostRead,
    Topics
  },
  computed: {
    ...mapState(['allBlogs'])
  },
  mounted() {
    this.$store.dispatch('fetchAllBlogs')
  }
}
</script>