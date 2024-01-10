<template>
  <transition name="fade">
    <div v-if="menuOpen" class="bg-black/50 fixed h-full w-full right-0 top-0 transition-opacity" @click="toggleMenu">
      <div class="bg-white h-full w-8/12 flex justify-end">
          <div class="text-2xl text-black h-full flex flex-col justify-center">
            <button class="bg-black text-white p-2">
              <font-awesome-icon icon="fa-solid fa-times" @click="toggleMenu"/>
            </button>
          </div>
        </div>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted, computed, ref} from 'vue';
import store from '../store';

const menuOpen = computed(() => store.state.menuOpen);
const toggleMenu = () => {
  store.commit('toggleMenu');
};

onMounted(() => {
  const checkWindowSize = () => {
    const lgSize = 1024;
    if (window.innerWidth >= lgSize && menuOpen.value) {
      toggleMenu();
    }
  };

  window.addEventListener('resize', checkWindowSize);
  checkWindowSize();

  onUnmounted(() => {
    window.removeEventListener('resize', checkWindowSize);
  });
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>