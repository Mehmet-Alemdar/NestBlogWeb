<template>
  <div class="flex flex-col items-center justify-center">
    <p class="py-5 lg:text-4xl text-2xl text-center font-extralight">For 'Fantastic Beasts' Series, a Case of Diminishing Returns</p>
    <div class="md:relative">
      <img src="https://ychef.files.bbci.co.uk/1600x900/p0h3pfy1.webp" alt="random image" class="object-cover w-full" />
      <div class="md:absolute md:bottom-0 bg-white text-center md:left-1/2 md:-translate-x-1/2 md:w-9/12 w-full p-4">
        <div class="flex gap-4 border-b py-2 justify-between">
          <div class="flex gap-4">
            <span class="text-[#171717] text-sm md:text-base">By John Doe</span>
            <span class="text-[#898989] font-extralight text-sm md:text-base">April 9, 2024</span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <font-awesome-icon
              :class="{ 'text-[#D9D9D9]': !liked, 'text-[#FFD700]': liked }"
              @click="toggleLike"
              class="text-sm md:text-lg hover:cursor-pointer"
              icon="fa-solid fa-star"
            />
            <p class="text-sm md:text-base" :class="{'text-black': !liked, 'text-[#FFD700]': liked}">{{ likeCount }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:w-9/12 w-full md:text-base text-sm px-4 mb-24">
      <p>How long does a pair of boots last? For the Princess of Wales, nearly two decades and counting. Her favourite tassled riding boots by Penelope Chilvers recently featured in Netflix's The Crown worn by the young student Kate (played by Meg Bellamy) at university. They were first worn in public by Kate Middleton in 2004, and are still her go-to boots for countryside engagements.

If well-made and well looked-after, footwear can last for decades, and retain its value. When she was a bride-to-be, Wassima Gamal dreamed of wearing "Cinderella" shoes on her wedding day. Designed by Amina Muaddi, the glass-like slingbacks, with their crystal-embellished brooch and distinctive fluted heels, retail for around £850 ($1,080). Already over-budget and conscious that she'd probably only wear them once, Gamal wondered if there was an alternative to buying a new pair. Enter her fairy godmother: By Rotation.

More like this:

-          How to avoid buying new clothes

-          The people living low-waste lives

-          The nasty truth about trainers

She found the slingbacks in her size on the app-based, peer-to-peer rental service. "It was my first time renting so I didn't know what to expect, but the process was fairly easy," she explains. "I had to send a request to the lender – I remember waiting for their response with bated breath. Thankfully they accepted, and I was ecstatic. The next stressful part was waiting for the shoes to arrive – and they did, a day or two before the actual renting start date, which I was so grateful for."How long does a pair of boots last? For the Princess of Wales, nearly two decades and counting. Her favourite tassled riding boots by Penelope Chilvers recently featured in Netflix's The Crown worn by the young student Kate (played by Meg Bellamy) at university. They were first worn in public by Kate Middleton in 2004, and are still her go-to boots for countryside engagements.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const liked = ref(false);
const likeCount = ref(32);

const toggleLike = () => {
  liked.value = !liked.value;
  likeCount.value += liked.value ? 1 : -1;
};
</script>