<script setup>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";
import OrderTable from "../components/OrderTable.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="flex">
      <SideBar />
      <!--  -->
      <div class="flex-grow">
        <div class="bg-gray-50">
          <div class="px-8 py-6">
            <main class="flex flex-col">
              <div
                id="dashboard-header"
                class="flex items-center justify-between b-4 border-slate-200"
              >
                <div class="flex flex-col flex-grow">
                  <span class="font-bold text-2xl text-gray-800">Orders</span>
                  <span class="text-xs text-gray-500"
                    >All orders show on this page</span
                  >
                  <OrderTable />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
