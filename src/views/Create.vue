<template>
  <div class="flex flex-col justify-center items-center mb-12">
    <div>
      <font-awesome-icon
        icon="fa-solid fa-eye"
        class="text-xl text-black cursor-pointer hover:text-gray-700"
      />
    </div>

    <form
      class="mt-8 space-y-6 w-1/2 flex flex-col items-center gap-4"
      @submit.prevent="submit"
    >
      <div class="flex flex-col gap-2 w-full">
        <p class="font-bold text-xl">Add an Image</p>
        <input
          type="file"
          id="fileInput"
          ref="fileInput"
          @change="handleFileChange"
          required
        />
        <div class="w-full flex justify-center bg-black">
          <img :src="imagePreview || defaultImage" alt="Image" class="w-96" />
        </div>
      </div>
      <div class="flex flex-col gap-1 w-full">
        <p class="font-bold text-xl">Title</p>
        <label for="title" class="sr-only">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          required
          class="w-full px-3 py-4 border border-black text-black sm:text-sm"
          placeholder="Title"
          v-model="title"
        />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <p class="font-bold text-xl">Topic</p>
        <label for="topic" class="sr-only">Topic</label>
        <input
          id="topic"
          name="topic"
          type="text"
          required
          class="w-full px-3 py-4 border border-black text-black sm:text-sm"
          placeholder="Topic"
          v-model="topic"
        />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <p class="font-bold text-xl">Content</p>
        <label for="content" class="sr-only">Content</label>
        <textarea
          id="textArea"
          class="w-full h-32 p-2 border border-gray-400 rounded-md"
          placeholder="content"
          v-model="content"
          required
        ></textarea>
      </div>
      <div class="w-full">
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      defaultImage: "/images/empty-img.png",
      title: "",
      topic: "",
      content: "",
    };
  },
  computed: {
    imagePreview() {
      return this.selectedFile ? URL.createObjectURL(this.selectedFile) : null;
    },
  },
  methods: {
    handleFileChange(event) {
      // Dosya değiştiğinde bu yöntem çağrılır
      this.selectedFile = event.target.files[0];
    },
    submit() {
      // Handle the form submission here
      console.log(`title: ${this.title}, topic: ${this.topic}, content: ${this.content}`);
    },
  },
};
</script>
