<script setup>
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import OrderStage1 from "../components/OrderStage1.vue";
import OrderStage2 from "../components/OrderStage2.vue";
import OrderStage3 from "../components/OrderStage3.vue";
import OrderStage4 from "../components/OrderStage4.vue";

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
      <OrderSideBar @previousPage="goBack()" :currentStep="formStage" />

      <OrderStage1
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 1"
      />
      <OrderStage2
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 2"
      />
      <OrderStage3
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 3"
      />
      <OrderStage4 v-show="formStage == 4" />
    </div>
  </div>
</template>
