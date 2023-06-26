import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/services',
      name: 'services',
      component: () => import('../components/HomePublic/CardsOffers.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/HomePublic/LocationHome.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/HomePublic/VideoHome.vue')
    }
  ]
})

export default router
