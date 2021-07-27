import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home';
import Beds from '../pages/Beds';
import SingleProduct from '../pages/SingleProduct';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beds',
    name: 'Beds',
    component: Beds
  },
  {
    path: '/single-product',
    name: 'SingleProduct',
    component: SingleProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
