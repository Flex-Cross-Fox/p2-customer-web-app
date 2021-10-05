import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail-page.vue')
  },
  {
    path: '/bookmark',
    name: 'Bookmark',
    component: () => import('../views/favorite-page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  if (to.name === 'Register' && !isAuthenticated) next()
  else if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  else if (to.name === 'Register' && isAuthenticated) next({ name: 'Home' })
  else if (to.path === '/' && isAuthenticated) next({ name: 'Home' })
  else next()
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  // else if (to.path === '/' && isAuthenticated) next({ name: 'Home' })
  // else next()
})

export default router
