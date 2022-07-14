<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateOrderForm from "../components/CreateOrderForm.vue";
import CreateOrderDetails from "../components/CreateOrderDetails.vue";
import CreateOrderAtomicDetails from "../components/CreateOrderAtomicDetails.vue";
import CreateOrderNotes from "../components/CreateOrderNotes.vue";

import { ref } from "vue";

let formStage = ref(1);
</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar />

      <CreateOrderForm v-show="formStage == 1" />
      <CreateOrderDetails v-show="formStage == 2" />
      <CreateOrderAtomicDetails v-show="formStage == 3" />
      <CreateOrderNotes v-show="formStage == 4" />

      <!-- STEP ONE -->

      <div class="flex flex-col pt-12 px-12 w-full text-gray-800">
        <div id="form-header" class="flex flex-col">
          <span class="text-xl text-gray-800 font-semibold">Type of Order</span>
          <span class="text-xs text-gray-500 mt-1"
            >Please fill the form accordingly to create an order
          </span>
        </div>
        <hr class="border-slate-200 w-full mt-8" />

        <div class="mt-8 flex flex-col">
          <form>
            <label for="order-type" class="text-xs">Select type of order</label>
            <div class="flex">
              <div class="mt-1 xl:w-96">
                <select
                  class="form-select appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                  aria-label="Disabled select example"
                  id="order-type"
                  required
                >
                  <option selected>Standard order</option>
                  <option value="1">Order One</option>
                  <option value="2">Order Two</option>
                  <option value="3">Order Three</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col mt-10">
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pink-600 checked:border-pink-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  />
                  <label
                    class="form-check-label inline-block text-gray-800 text-sm"
                    for="flexCheckDefault"
                  >
                    I accept the terms and conditions
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pink-600 checked:border-pink-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label inline-block text-gray-800 text-sm"
                    for="flexCheckChecked"
                  >
                    Other things can be written here and checked
                  </label>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="inline-block mt-10 px-48 py-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create Order
            </button>
          </form>
        </div>
      </div>
      <!-- END OF STEP ONE -->
    </div>
  </div>
</template>
