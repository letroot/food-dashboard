<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import OrderNavBar from "../components/OrderNavBar.vue";
import OrderSideBar from "../components/OrderSideBar.vue";
import CreateOrderNotes from "../components/CreateOrderNotes.vue";
</script>

<template>
  <div>
    <OrderNavBar />
    <div class="flex">
      <OrderSideBar />

      <CreateOrderNotes />
    </div>
  </div>
</template>
