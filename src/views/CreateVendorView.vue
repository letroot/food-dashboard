<script setup>
import VendorNavBar from "../components/VendorNavBar.vue";
import VendorSideBar from "../components/VendorSideBar.vue";
import VendorStage1 from "../components/VendorStage1.vue";
import VendorStage2 from "../components/VendorStage2.vue";
import VendorStage3 from "../components/VendorStage3.vue";
import VendorStage4 from "../components/VendorStage4.vue";
import VendorStage5 from "../components/VendorStage5.vue";
import VendorStage6 from "../components/VendorStage6.vue";
import VendorStage7 from "../components/VendorStage7.vue";

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
    <VendorNavBar />
    <div class="flex">
      <VendorSideBar @previousPage="goBack()" :currentStep="formStage" />

      <VendorStage1
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 1"
      />
      <VendorStage2
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 2"
      />
      <VendorStage3
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 3"
      />
      <VendorStage4
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 4"
      />
      <VendorStage5
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 5"
      />
      <VendorStage6
        @nextStage="gotoStep(formStage + 1)"
        v-show="formStage == 6"
      />

      <VendorStage7 v-show="formStage == 7" />

      <!-- STEP ONE -->
    </div>
  </div>
</template>
