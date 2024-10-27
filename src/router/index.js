import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import('../views/Activities.vue')
    }
  ]
})

export default new Router({
  mode: 'history',
  base: '/iris2664.com/',
  routes
})
