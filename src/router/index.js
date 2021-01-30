import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: () => import('../views/Beranda.vue')
  },
  {
    path: '/tentang',
    name: 'Tentang',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: () => import('../views/Kontak.vue')
  },
  {
    path: '/riwayat_pengiriman',
    name: 'riwayatpengiriman',
    component: () => import('../views/RiwayatPengiriman.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
