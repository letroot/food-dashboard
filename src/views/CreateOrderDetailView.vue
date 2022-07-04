<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateOrderDetails from "../components/CreateOrderDetails.vue";

</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar />

      <CreateOrderDetails />
    </div>
  </div>
</template>
