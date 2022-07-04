<script setup>
import { ref } from "vue";
import CardDeliveryStatus from "./CardDeliveryStatus.vue";
const dateValue = ref("");
const newOrders = ref(412);
const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
</script>

<template>
  <div id="container" class="px-4 py-2 bg-white rounded-md tracking-tight">
    <!-- CARD CONTENT -->
    <div class="flex flex-col">
      <!-- CARD HEADER -->
      <div
        id="card-header"
        class="flex items-center justify-between border-b-2 border-slate-50 pb-3"
      >
        <span class="text-base font-semibold text-gray-800">Order Summary</span>
        <div class="">
          <litepie-datepicker
            as-single
            :formatter="formatter"
            v-model="dateValue"
            class="h-8"
            placeholder="Today"
          ></litepie-datepicker>
        </div>
      </div>

      <!-- NEW ORDERS STATUS -->
      <div
        id="new-orders"
        class="px-4 py-2 mt-2 flex items-center justify-between bg-green-50 rounded-md"
      >
        <div id="new-order-indicator" class="flex items-center">
          <div
            class="bg-emerald-400 text-white font-semibold px-4 py-2 rounded-md"
          >
            {{ newOrders }}
          </div>
          <span class="pl-3 text-gray-700 text-sm font-semibold"
            >New Orders</span
          >
        </div>
        <div
          class="font-semibold uppercase text-tiny cursor-pointer underline text-gray-700"
        >
          <a href="#">View all orders</a>
        </div>
      </div>

      <!-- DELIVERY STATUS CARDS -->
      <div id="delivery-status-cards" class="mt-4 flex items-center space-x-4">
        <CardDeliveryStatus class="w-full" status="onDelivery" value="28" />
        <CardDeliveryStatus class="w-full" status="delivered" value="412" />
        <CardDeliveryStatus class="w-full" status="cancelled" value="39" />
      </div>

      <!-- IMPLEMENT CHART HERE -->
    </div>
  </div>
</template>

<style></style>
