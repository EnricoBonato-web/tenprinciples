<template>
  <nav :class="'side-navigation ' + path">
    <ul>
      <li v-for="(page, index) in pages" :key="index" @click="selectPage(index)">
        {{ page }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import router from '@/router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const path = computed(() => route.path.substring(1).toLocaleLowerCase());
const pages = ['Vue', 'React', 'Design'];

const selectPage = (index) => {
  router.push(pages[index]);
};
</script>

<style scoped>
.side-navigation {
  width: 160px;
  height: 100%;
  text-align: center;
  display: flex;
  vertical-align: middle;
  background-color: red;
  position: fixed;
}
.side-navigation ul {
  margin: auto 0;
  list-style: none;
}

.side-navigation li {
  padding: 24px 0;
  /* Add your styles for the list items */
}
</style>
