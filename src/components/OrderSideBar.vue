<script setup>
const props = defineProps({
  currentStep: Number,
});

defineEmits(["previousPage"]);

const orderSteps = [
  {
    step: "1",
    title: "Type of Order",
    subtitle: "Please select the type of order",
  },
  {
    step: "2",
    title: "Customer Details",
    subtitle: "Fill in customer details",
  },
  {
    step: "3",
    title: "Order Details",
    subtitle: "Fill in order details",
  },
  {
    step: "4",
    title: "Comments/Notes",
    subtitle: "Anything else we should know",
  },
];

console.log(props.currentStep);
</script>

<!-- TODO -->
<!-- Use loop to populate sidebar list -->

<!-- TODO -->
<!-- Replace SVGs with HeroIcon components -->

<template>
  <aside class="w-96 min-h-screen bg-gray-100" aria-label="Sidebar">
    <div class="pl-10 pt-12">
      <div class="flex flex-col">
        <!-- back to previous page -->
        <div>
          <button
            @click="$emit('previousPage')"
            class="flex items-center mb-12"
            v-show="currentStep > 1"
          >
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
            <span class="text-gray-600 text-xs ml-3 flex-1">
              Go back to previous page
            </span>
          </button>
        </div>
        <!-- END back to previous page -->

        <div
          v-for="(stage, index) in orderSteps"
          :key="index"
          class="flex mt-2"
          :class="[
            { 'text-red-800': currentStep >= index + 1 },
            'text-gray-500',
          ]"
        >
          <span class="w-8"
            ><svg
              viewBox="0 0 17 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.48416"
                cy="8.48416"
                r="7.80543"
                fill="white"
                stroke="currentColor"
                stroke-width="1.35747"
              />
              <circle
                cx="8.48417"
                cy="8.48416"
                r="2.82805"
                fill="currentColor"
              />
              <rect
                :class="{ hidden: index === 3 }"
                x="8.14479"
                y="18.7783"
                width="0.904977"
                height="31.2217"
                fill="currentColor"
              />
            </svg>
          </span>
          <div class="flex flex-col ml-4">
            <span class="text-xs">Step {{ orderSteps[index].step }} of 4</span>
            <span class="text-sm font-semibold">{{
              orderSteps[index].title
            }}</span>
            <span class="text-xs">{{ orderSteps[index].subtitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style></style>
