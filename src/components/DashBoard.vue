<script setup>
import { ref } from "vue";
import CardInfo from "./CardInfo.vue";
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});

const dateValue = ref([]);
</script>

<template>
  <div class="bg-gray-50">
    <div class="px-8 py-6">
      <main class="flex flex-col">
        <div
          id="dashboard-header"
          class="flex items-center justify-between border-b-2 pb-4 border-slate-200"
        >
          <div class="flex flex-col">
            <span class="text-bold text-lg">Dashboard</span>
            <span class="text-xs text-gray-500"
              >Last updated: 14:14 | Jan 13 2022</span
            >
          </div>
          <div class="w-1/4">
            <litepie-datepicker
              as-single
              use-range
              separator=" to "
              :formatter="formatter"
              v-model="dateValue"
            ></litepie-datepicker>
          </div>
        </div>

        <div class="flex mt-6 justify-between space-x-6">
          <CardInfo value="3.3k" label="Total Orders" icon="" />
          <CardInfo value="948" label="Total Restaurants" icon="" />
          <CardInfo value="12.9k" label="Total Customers" icon="" />
          <CardInfo value="528.34M" label="Total Revenue" icon="" />
        </div>
      </main>
    </div>
  </div>
</template>

<style></style>
