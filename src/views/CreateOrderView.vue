<script setup>
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateOrderDetails from "../components/CreateOrderDetails.vue";
import CreateOrderForm from "../components/CreateOrderForm.vue";
import CreateOrderAtomicDetails from "../components/CreateOrderAtomicDetails.vue";
import CreateOrderNotes from "../components/CreateOrderNotes.vue";

import { ref } from "vue";

let formStage = ref(1);

function gotoStep(step) {
  console.log("I emitted");
  formStage.value = step;
}
</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar :currentStep=formStage />

      <CreateOrderForm
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 1"
      />
      <CreateOrderDetails v-show="formStage == 2" />
      <CreateOrderAtomicDetails v-show="formStage == 3" />
      <CreateOrderNotes v-show="formStage == 4" />

      <!-- STEP ONE -->
    </div>
  </div>
</template>
