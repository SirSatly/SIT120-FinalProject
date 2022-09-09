import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/saved',
    name: 'saved',
    component: () => import('../views/SavedView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/:id',
    name: 'cards',
    component: () => import('../views/DictionaryView.vue'),
    children: [
      {
        path: '',
        name: 'view',
        component: () => import('../views/ViewView.vue')
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import('../views/EditView.vue')
      },
      {
        path: 'cards',
        name: 'cards',
        component: () => import('../views/CardsView.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
