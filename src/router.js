import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'setup',
            component: () => import('./views/Setup.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('./views/Faq.vue')
        },
        {
            path: '/get-started',
            name: 'get-started',
            component: () => import('./views/GetStarted.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import( './views/Login.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./views/Dashboard.vue')
        }
    ]
})
