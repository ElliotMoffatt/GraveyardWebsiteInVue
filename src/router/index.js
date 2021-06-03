import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
    path: '/Repairs',
    name: 'Repairs',
    component: () => import(/* webpackChunkName: "repairs" */ '../views/Repairs.vue')
    },
    {
        path: '/Volunteer',
        name: 'Volunteer',
        component: () => import(/* webpackChunkName: "volunteer" */ '../views/Volunteer.vue')
    },
    {
        path: '/Videos',
        name: 'Videos',
        component: () => import(/* webpackChunkName: "videos" */ '../views/Videos.vue')
    },
    {
        path: '/Photos',
        name: 'Photos',
        component: () => import(/* webpackChunkName: "photos" */ '../views/Photos.vue')
    },
    {
        path: '/History',
        name: 'History',
        component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
    },
    {
        path: '/Headstones',
        name: 'Headstones',
        component: () => import(/* webpackChunkName: "headstones" */ '../views/Headstones.vue')
    },
    {
        path: '/HistoriesOfBuried',
        name: 'HistoriesOfBuried',
        component: () => import(/* webpackChunkName: "historiesOfBuried" */ '../views/HistoriesOfBuried.vue')
    },
    {
        path: '/Events',
        name: 'Events',
        component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUs.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
