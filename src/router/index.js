import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Table from '../views/Table.vue'
// import UserInputForm from '../views/UserInputForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/InputForm.vue')
    },

    {
      path: '/table2',
      name: 'table2',
      component: () => import('../views/Table2.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('../views/InputForm.vue')
      
    },
  ]
})

export default router