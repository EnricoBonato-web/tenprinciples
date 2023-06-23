<template>
  <div id="app">
    <SideNavigation />
    <router-view />
  </div>
</template>

<script>
import SideNavigation from '@/components/SideNavigation.vue';

export default {
  components: {
    SideNavigation
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
