// src/router/index.js
import Vue from 'vue';
import { createApp } from 'vue'
import App from '../App.vue'
import {createRouter, createWebHistory} from 'vue-router'  
import LandingPage from '../components/LandingPage.vue';
import ListPage from '../components/ListPage.vue';

console.log('VueRouter:', Vue);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/listPage', component: ListPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

createApp(App).use(router).mount('#app')

export default router;
