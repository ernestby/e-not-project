import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/components',
      name: 'components',
      meta: {
        layout: 'user',
      },
      component: () => import('../views/Components.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue'),
    },
    {
      path: '/notarius-page/:id',
      name: 'NotariusPage',
      component: () => import('../views/NotariusPage.vue'),
    },
    {
      path: '/heirs-search',
      name: 'HeirsSearch',
      component: () => import('../views/HeirsSearch.vue'),
    },
    {
      path: '/notarius-list',
      name: 'register',
      component: () => import('../views/NotariusList.vue'),
    },
    {
      path: '/messages-user',
      name: 'messages-user',
      meta: {
        layout: 'user',
      },
      component: () => import('../views/Messages.vue'),
    },,
    {
      path: '/messages-notarius',
      name: 'messages-notarius',
      meta: {
        layout: 'notarius',
      },
      component: () => import('../views/Messages.vue'),
    },
    {
      path: '/wrapper',
      name: 'wrapper',
      component: () => import('../views/Wrapper.vue'),
    },
    {
      path: '/OrderSend',
      name: 'OrderSend',
      meta: {
        layout: 'user',
      },
      component: () => import('../views/OrderSend.vue'),
    },
    {
      path: '/order-list',
      name: 'order-list',
      meta: {
        layout: 'notarius',
      },
      component: () => import('../views/OrderList.vue'),
    },
    {
      path: '/files-list',
      name: 'files-list',
      meta: {
        layout: 'user',
      },
      component: () => import('../views/Files.vue'),
    },
    {
      path: '/applications',
      name: 'applications',
      meta: {
        layout: 'user',
      },
      component: () => import('../views/user/Applications.vue'),
    },
    {
      path: '/info',
      name: 'info',
      meta: {
        layout: 'user',
      },
      component: () => import('../views/Info.vue'),
    },
  ],
})

export default router
