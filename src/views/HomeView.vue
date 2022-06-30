<script setup>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
import DashBoard from "../components/DashBoard.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="flex">
      <SideBar />
      <DashBoard class="flex-grow" />
    </div>
  </div>
</template>
