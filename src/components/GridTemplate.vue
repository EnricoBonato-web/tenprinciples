<template>
  <div class="grid">
    <div v-for="(value, key) in gridItems.data" :key="key" class="grid-item">
      <h3>{{ key }}</h3>
      <p>
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const gridItems = defineProps({ data: Object });
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}

.grid-item {
  text-align: center;
  padding: 0 16px;
  background-color: aquamarine;
  border-radius: 8px;
}
</style>
