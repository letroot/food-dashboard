<script setup>
import TableLite from "vue3-table-lite";
</script>

<template>
  <div class="bg-white mt-4 rounded-sm">
    <div class="px-4 pt-6 pb-6">
      <main class="flex flex-col">
        <div
          id="order-header"
          class="flex items-center justify-between border-b-2 pb-8 border-slate-200"
        >
          <div class="flex flex-col">
            <div class="flex items-center">
              <span class="font-bold text-2xl text-gray-800">All Orders</span>
              <span class="ml-4 p-1 bg-red-50 text-xs rounded-sm"
                >1234 Orders</span
              >
            </div>
            <span class="text-xs text-gray-500"
              >This is the number of orders</span
            >
          </div>

          <!-- EXPORT FILE AND CREATE ORDER BUTTONS -->
          <div class="space-x-4">
            <button class="px-5 py-3 rounded-md bg-red-50 text-sm">
              Export File
            </button>
            <button class="px-5 py-3 rounded-md bg-pink-600 text-sm text-white">
              Create Order
            </button>
          </div>
        </div>

        <!-- CONTROLS -->
        <div class="flex items-center mt-4 justify-between">
          <div id="table-controls">
            <div class="">
              <litepie-datepicker
                as-single
                use-range
                separator=" to "
                :formatter="formatter"
                v-model="dateValue"
              ></litepie-datepicker>
            </div>
          </div>

          <div>
            <form class="ml-20">
              <div class="relative">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  class="block p-3 pl-10 w-full text-sm text-gray-700 bg-slate-100 rounded-md border-gray-50 focus:ring-slate-100 focus:border-slate-100"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <!-- <div></div> -->
        </div>

        
      </main>
    </div>
  </div>
</template>

<style></style>
