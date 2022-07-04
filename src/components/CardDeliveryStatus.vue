<script setup>
const props = defineProps(["status", "value"]);

const statusColors = {
  onDelivery: "bg-blue-500",
  delivered: "bg-emerald-500",
  cancelled: "bg-red-500",
};

const statusNames = {
  onDelivery: "On delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
}
</script>

<template>
  <div>
    <div class="pl-4 py-4 flex flex-col rounded-lg text-white" :class="{ [statusColors[status]]: true }">
      <span class="font-semibold text-xl">{{ value }}</span>
      <span class="font-normal uppercase tracking-normal text-tiny">{{ statusNames[status] }}</span>
    </div>
  </div>
</template>

<style></style>
