<script setup>
const props = defineProps(["value", "label", "icon"]);
</script>

<template>
  <div
    class="p-6 bg-gradient-to-r to-indigo-500 via-purple-600 from-pink-500 w-full px-4 pl-6 py-8 rounded-md"
  >
    <div class="flex items-center">
      <div id="icon text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <div class="flex flex-col text-white pl-2">
        <span class="text-xl font-semibold">{{ value }}</span>
        <span class="text-xs font-normal">{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<style></style>
