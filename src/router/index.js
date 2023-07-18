import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {auth} from "../../public/firebase";
//fireBase
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth:true
    }
  },
  {
    path:'/login',
    name: 'LoginComp',
    component: () =>import('../views/LoginComp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if(to.path=== '/login && auth.currentUser'){
    next('/')
    return;
  }
  if(to.matched.some(record =>record.meta.requiresAuth)&& !auth.currentUser)
  {
    next('/login')
    return;
  }
  next();
})
export default router