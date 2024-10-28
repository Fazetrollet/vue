import { createRouter, createWebHistory } from 'vue-router'
import ForecastView from '@/views/ForecastView.vue'
import LocationView from '@/views/LocationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: ForecastView,
    },
    {
      path: '/location',
      name: 'location',
      component: LocationView,
    },
    {
      path: '/forecast/:location',
      name: 'forecast',
      component: ForecastView,
      props: true,
    },
    /*
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  */
  ],
})

export default router
