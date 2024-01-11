<template>
  <div class="flex justify-end">
    <div class="flex items-center justify-center">
      <div class="bg-[#171717] ml-2 text-[#fff] px-4 py-1.5 rounded flex flex-row items-center">
        <font-awesome-icon icon="fa-solid fa-user" class="text-white mr-2" />
        <router-link to="signin" class="text-[#fff] ml-auto">Sign in</router-link>
      </div>
    </div>
    <router-link to="signup" class="ml-2 px-4 py-1.5 rounded border border-[#171717]">Sign up</router-link>
  </div>
</template>
