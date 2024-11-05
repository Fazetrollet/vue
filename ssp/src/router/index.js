// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import bestAvFem from '@/views/bestAvFem.vue' // Ensure the path and casing match your file structure

const routes = [
  { path: '/', name: 'Home', component: () => import('@/App.vue') }, // Using App.vue as the main component
  { path: '/best-of-five', name: 'bestAvFem', View: bestAvFem } // Route for the Best of Five game
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
