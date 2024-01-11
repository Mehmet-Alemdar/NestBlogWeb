<template>
  <div class="flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
    <img src="/images/signup-icon.png" alt="signin icon"/>
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-black">
          Create an account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-1" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">{{ errorMessage }}</span>
          </div>
          <div>
            <label for="name" class="sr-only">Name</label>
            <input id="name" name="name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-black text-black rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Name" v-model="name" />
          </div>
          <div>
            <label for="age" class="sr-only">Age</label>
            <input id="age" name="age" type="number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-black text-black focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Age" v-model="age" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-black text-black focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Email address" v-model="email" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-black placeholder-black text-black rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm" placeholder="Password" v-model="password" />
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    submit() {
      if (this.age < 0) {
        this.errorMessage = 'Age cannot be negative';
        return;
      }

      // Handle the form submission here
      console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Password: ${this.password}`);
    },
  },
};
</script>