<script setup>
defineEmits(["nextStage"]);
</script>

<template>
  <div class="flex flex-col pt-12 px-12 w-full text-gray-800">
    <div id="form-header" class="flex flex-col">
      <span class="text-xl text-gray-800 font-semibold">Add Your Menu</span>
      <span class="text-xs text-gray-500 mt-1">Upload Restaurant Logo </span>
    </div>
    <hr class="border-slate-200 w-full mt-8" />

    <div class="mt-8 flex flex-col">
      <form @submit.prevent="$emit('nextStage')">
        <div class="flex space-x-12">
          <div>
            <label for="small_size" class="text-xs"
              >Upload restaurant logo</label
            >
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <input
                  class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                />
              </div>
            </div>
          </div>

          <div>
            <label for="banner_image" class="text-xs"
              >Upload banner image</label
            >
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <input
                  class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="banner_image"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-left items-left w-1/2">
          <span class="text-xs mt-2">Upload menu list</span>
          <label
            for="dropzone-file"
            class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Excel, PNG, JPG or PNG
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        <button
          type="submit"
          class="inline-block mt-10 px-32 py-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
