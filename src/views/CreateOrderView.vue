<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateOrderForm from "../components/CreateOrderForm.vue";

</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar />

      <CreateOrderForm />
    </div>
  </div>
</template>
