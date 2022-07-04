<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateOrderAtomicDetails from "../components/CreateOrderAtomicDetails.vue";
</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar />

      <CreateOrderAtomicDetails />
    </div>
  </div>
</template>
