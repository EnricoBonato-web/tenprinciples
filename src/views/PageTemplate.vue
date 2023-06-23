<template>
  <div class="page">
    <h1>Ten Principles</h1>
    <h2>{{ props.title }}</h2>
    <Grid :data="json" />
  </div>
</template>

<script setup>
import Grid from '@/components/GridTemplate.vue';
import { ref, defineProps } from 'vue';
let json = ref([]);
const props = defineProps({
  title: String,
  source: String
});

import(`@/assets/${props.source}.json`).then((module) => {
  json.value = module.default;
});
</script>
<style>
.page {
  margin-left: 200px;
  margin-right: 40px;
  width: 100%;
  text-align: center;
}
</style>
