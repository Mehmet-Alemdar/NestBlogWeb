import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;