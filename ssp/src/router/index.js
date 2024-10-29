// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BestOfFive from '@/views/BestAvFem.vue' // Se till att denna komponent existerar

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView // Huvudsidan är nu HomeView
  },
  {
    path: '/best-of-five',
    name: 'BestAvFem', // Se till att namnet matchar
    component: BestOfFive
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
