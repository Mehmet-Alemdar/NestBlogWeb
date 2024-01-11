<template>
  <p class="lg:text-lg text-2xl font-bold mb-4">Movies</p>
  <div class="flex flex-col gap-3 mb-7 lg:border-b-0 border-b-2 pb-6">
    <img src="https://ychef.files.bbci.co.uk/1600x900/p0h3pfy1.webp" alt="random image" class="w-full" />
    <p class="text-[#898989] text-xs md:text-sm  font-extralight">April 9, 2024</p>
    <div>
      <img src="https://i.pravatar.cc/100?img=3" alt="avatar" class="rounded-full w-8 inline-block mr-2" />
      <span class="text-sm md:text-base">By </span>
      <span class="text-[#171717] text-sm md:text-base font-bold">John Doe</span>
    </div>
    <p class="text-[#171717] text-lg md:text-xl font-bold">For 'Fantastic Beasts' Series, a Case of
Diminishing Returns</p>
    <p class="text-[#171717] text-sm md:text-base font-extralight">{{truncatedText('Image via Warner Bros. Image via Warner Bros. Fantastic Beasts: The Secrets of Dumbledore is currently set to premiere in the United States on April 15, 2022. The movie will be coming out a bit earlier in the UK, arriving in theaters onApril 8, 2022.')}}</p>
    <router-link v-if="truncated" to="blog" class="underline underline-offset-auto text-xs md:text-sm text-left font-medium">Continue Reading</router-link>
  </div>
  <div class="flex flex-col gap-3 mb-7 lg:border-b-0 border-b-2 pb-6">
    <img src="https://ychef.files.bbci.co.uk/1600x900/p0h3pfy1.webp" alt="random image" class="w-full" />
    <p class="text-[#898989] text-xs md:text-sm  font-extralight">April 9, 2024</p>
    <div>
      <img src="https://i.pravatar.cc/100?img=3" alt="avatar" class="rounded-full w-8 inline-block mr-2" />
      <span class="text-sm md:text-base">By </span>
      <span class="text-[#171717] text-sm md:text-base font-bold">John Doe</span>
    </div>
    <p class="text-[#171717] text-lg md:text-xl font-bold">For 'Fantastic Beasts' Series, a Case of
Diminishing Returns</p>
    <p class="text-[#171717] text-sm md:text-base font-extralight">{{truncatedText('Image via Warner Bros. Image via Warner Bros. Fantastic Beasts: The Secrets of Dumbledore is currently set to premiere in the United States on April 15, 2022. The movie will be coming out a bit earlier in the UK, arriving in theaters onApril 8, 2022.')}}</p>
    <router-link v-if="truncated" to="blog" class="underline underline-offset-auto text-xs md:text-sm text-left font-medium">Continue Reading</router-link>
  </div>
</template>

<script setup>

  let truncated = false;
  const truncatedText = (text) => {
    if (text.length > 50) {
      truncated = true;
      return text.slice(0, 50) + '...';
    } else {
      return text;
    }
  }
</script>