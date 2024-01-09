<template>
  <p class="text-lg font-bold mb-2">Latest Blogs</p>
  <div class="flex flex-col gap-2 border-b-4 border-dotted border-[#CECECE] pb-4 ">
    <div class="flex gap-4 items-center">
      <p class="px-2 py-1 border-2 text-sm font-semibold">Politics</p>
      <p class="text-[#898989] font-extralight text-sm font-semibold">April 9, 2024</p>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-2xl font-semibold">Nicola Sturgeon Reported to Police
Over Apparent Face Mask Law Breach</p>
      <p class="text-[#171717] font-extralight">{{truncatedText('Image via Warner Bros. Image via Warner Bros. Fantastic Beasts: The Secrets of Dumbledore is currently set to premiere in the United States on April 15, 2022. The movie will be coming out a bit earlier in the UK, arriving in theaters onApril 8, 2022.')}}</p>
      <div>
        <img src="https://i.pravatar.cc/100?img=3" alt="avatar" class="rounded-full w-8 inline-block mr-2" />
        <span>By </span>
        <span class="text-[#171717] font-bold">John Doe</span>
      </div>
      <button v-if="truncated" class="underline underline-offset-auto w-20 text-sm text-left font-medium">Read More</button>
    </div>
  </div>
</template>

<script setup>
  let truncated = false;
  const truncatedText = (text) => {
    if (text.length > 100) {
      truncated = true;
      return text.slice(0, 100) + '...';
    } else {
      return text;
    }
  }
</script>