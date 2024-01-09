<template>
  <p class="text-lg font-bold mb-2">Movies</p>
  <div class="flex flex-col gap-3 mb-14">
    <img src="https://ychef.files.bbci.co.uk/1600x900/p0h3pfy1.webp" alt="random image" class="w-full" />
    <p class="text-[#898989] font-extralight">April 9, 2024</p>
    <div>
      <img src="https://i.pravatar.cc/100?img=3" alt="avatar" class="rounded-full w-8 inline-block mr-2" />
      <span>By </span>
      <span class="text-[#171717] font-bold">John Doe</span>
    </div>
    <p class="text-[#171717] text-xl font-bold">For 'Fantastic Beasts' Series, a Case of
Diminishing Returns</p>
    <p class="text-[#171717] font-extralight">{{truncatedText('Image via Warner Bros. Image via Warner Bros. Fantastic Beasts: The Secrets of Dumbledore is currently set to premiere in the United States on April 15, 2022. The movie will be coming out a bit earlier in the UK, arriving in theaters onApril 8, 2022.')}}</p>
      <button v-if="truncated" class="underline underline-offset-auto w-20 text-sm text-left font-medium">Read More</button>
  </div>
</template>

<script setup>

  let truncated = false;
  const truncatedText = (text) => {
    if (text.length > 250) {
      truncated = true;
      return text.slice(0, 100) + '...';
    } else {
      return text;
    }
  }
</script>