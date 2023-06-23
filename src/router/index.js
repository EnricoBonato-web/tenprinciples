import { createRouter, createWebHistory } from 'vue-router';
import PageTemplate from '../views/PageTemplate.vue';
const routes = [
  { path: '/ui', component: PageTemplate, props: { title: 'ui', source: 'ui' } },
  { path: '/vue', component: PageTemplate, props: { title: 'test', source: 'ui' } },
  { path: '/design', component: PageTemplate, props: { title: 'test' } },
  { path: '/react', component: PageTemplate, props: { title: 'test' } },
  { path: '/', redirect: '/ui' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
