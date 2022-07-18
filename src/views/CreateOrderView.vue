<script setup>
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateCustomerDetails from "../components/CreateCustomerDetails.vue";
import CreateOrderForm from "../components/CreateOrderForm.vue";
import CreateAtomicDetails from "../components/CreateAtomicDetails.vue";
import CreateOrderNotes from "../components/CreateOrderNotes.vue";

import { ref } from "vue";

let formStage = ref(1);

function gotoStep(step) {
  console.log("I emitted");
  formStage.value = step;
}

function goBack() {
  if (formStage.value === 1) {
    return;
  }
  formStage.value = formStage.value - 1;
}
</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar @previousPage="goBack()" :currentStep=formStage />

      <CreateOrderForm
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 1"
      />
      <CreateCustomerDetails @nextStage="gotoStep(formStage + 1)" v-show="formStage == 2" />
      <CreateAtomicDetails @nextStage="gotoStep(formStage + 1)" v-show="formStage == 3" />
      <CreateOrderNotes v-show="formStage == 4" />

      <!-- STEP ONE -->
    </div>
  </div>
</template>
