<script setup>
// import { BeakerIcon } from "@heroicons/vue/solid";
</script>

<!-- TODO -->
<!-- Use loop to populate sidebar list -->

<!-- TODO -->
<!-- Replace SVGs with HeroIcon components -->

<template>
  <aside class="w-64 min-h-screen bg-gray-100" aria-label="Sidebar">
    <div class="pl-10 pt-12 px-8">
      <div class="flex flex-col">
        <div class="flex items-center">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
          <span class="text-gray-600 text-xs ml-3">
            Go back to previous page
          </span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style></style>
