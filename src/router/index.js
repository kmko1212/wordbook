import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResisterView from '../views/RegisterView.vue'
import ConfirmView from '../views/ConfirmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resister',
      name: 'resister',
      component: ResisterView
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: ConfirmView
    }
  ]
})

export default router
