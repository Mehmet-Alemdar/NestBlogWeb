<template>
  <div class="flex min-w-[500px]">
    <div class="relative mr-2.5">
    <div class="relative cursor-pointer">
      <img src="https://ychef.files.bbci.co.uk/1600x900/p0gq79q8.webp" class="w-[550px]" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 w-full"></div>
      <p class="absolute bottom-4 left-2.5 right-1 text-white text-lg font-bold truncate-2-lines">dffdfd</p>
      <div class="absolute flex flex-col gap-1 top-2.5 right-2.5 bg-black bg-opacity-80 rounded-full flex items-center justify-center p-1">
        <font-awesome-icon icon="fa-solid fa-heart" class="text-[#C7EC0E]" />
        <span class="text-white">32</span>
      </div>
    </div>
  </div>
  </div>

</template>

<style scoped>
.truncate-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
