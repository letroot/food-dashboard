<script setup>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="flex">
      <SideBar  />
      <DashBoard />
    </div>
  </div>
</template>
