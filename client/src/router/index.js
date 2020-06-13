import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import RoomDetail from '@/views/room/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room/:roomId',
    name: 'RoomDetail',
    component: RoomDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
