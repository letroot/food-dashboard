<script setup>
import { ref } from "vue";
const dateValue = ref("");
const orderCount = ref(8137);
const customerCount = ref(56);
const revenue = ref(495300);

const formatter = ref({
  date: "DD MMM YYYY",
  month: "MMM",
});
</script>

<template>
  <div id="container" class="px-4 py-2 bg-white rounded-md text-gray-800">
    <!-- CARD CONTENT -->

    <div class="flex flex-col">
      <!-- CARD HEADER -->

      <div
        id="card-header"
        class="flex items-center justify-between border-b-2 border-slate-50 pb-3"
      >
        <span class="text-base font-semibold text-gray-800"
          >Today's Status</span
        >
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
    </div>

    <!-- STATUS CARDS -->
    <div class="flex flex-col">
      <!-- ROW OF STATUS CARDS -->
      <div class="flex mt-4 justify-between space-x-3">
        <!-- ORDER CARD -->
        <div
          class="bg-white flex flex-col pt-2 pb-2 px-4 w-1/3 shadow-md rounded-md"
        >
          <img
            class="-ml-2 h-20 w-20 h-20 w-20"
            src="../assets/img/svgs/iconorders.svg"
            alt=""
            srcset=""
          />
          <span class="text-gray-400 text-tiny">Orders</span>
          <span class="text-xl font-semibold"> {{ orderCount }}</span>
        </div>
        <!-- ORDER CARD -->
        <div
          class="bg-white flex flex-col pt-2 pb-2 px-4 w-1/3 pr-9 shadow-md rounded-md"
        >
          <img
            class="-ml-2 h-20 w-20"
            src="../assets/img/svgs/iconcustomer.svg"
            alt=""
            srcset=""
          />
          <span class="text-gray-400 text-tiny">Customers</span>
          <span class="text-xl font-semibold"> {{ customerCount }}</span>
        </div>
        <!-- ORDER CARD -->
        <div
          class="bg-white flex flex-col pt-2 pb-2 px-4 w-1/3 pr-9 shadow-md rounded-md"
        >
          <img
            class="-ml-2 h-20 w-20"
            src="../assets/img/svgs/iconrevenue.svg"
            alt=""
            srcset=""
          />
          <span class="text-gray-400 text-tiny">Revenue</span>
          <span class="text-xl font-semibold"> {{ revenue }}</span>
        </div>
      </div>

      <!-- HIGHEST GMV -->
      <div class="py-3 px-4 bg-white rounded-md mt-4 shadow-md">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img
              src="../assets/img/svgs/icon_gmv_highest.svg"
              class="h-20 w-20"
              alt=""
            />
            <span> Today's highest GMV </span>
          </div>
          <div class="flex flex-col leading-snug pr-3">
            <span class="text-xl font-semibold">N495.43k</span>
            <span class="text-xl text-pink-600 font-semibold"
              >The Palace - VI</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
