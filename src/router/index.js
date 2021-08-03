import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home';
import Home from '../views/Home';
import CategoryPage from '../views/CategoryPage';
// import Products from '../pages/Products';
// import SingleProduct from '../pages/SingleProduct';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/products/:id',
  //   name: 'Products',
  //   component: Products,
  //   props: true
  // },
  // {
  //   path: '/single-product',
  //   name: 'SingleProduct',
  //   component: SingleProduct
  // },
  {
    path: '/category/:rooms',
    name: 'Room',
    component: CategoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
