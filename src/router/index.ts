import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/shop'
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    meta: { showSiteCategory: true }
  },
  {
    path: '/shop/buy/:id',
    name: 'buy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buy" */ '../views/Buy.vue'),
    meta: { showSiteCategory: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
