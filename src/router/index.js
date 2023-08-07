import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'

import Navbar from '@/components/Navbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      navbar : Navbar
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
