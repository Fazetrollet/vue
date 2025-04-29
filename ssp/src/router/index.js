// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import bestAvFem from '@/views/bestAvFem.vue' // Ensure the path and casing match your file structure

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/best-of-five',
    name: 'bestAvFem',
    component: bestAvFem
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // updated
  routes
})

export default router
