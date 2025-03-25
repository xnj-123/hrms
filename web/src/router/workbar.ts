export default [
    {
        path:'workhome',
        component: () => import('@/views/workbar/workhome/index.vue'),
        name:'workhome'
    },
    {
        path:'broadcast',
        component: () => import('@/views/workbar/broadcast/index.vue'),
        name:'broadcast'
    },
    {
        path:'personn',
        component: () => import('@/views/workbar/personn/index.vue'),
        name:'personn'
    },
    {
        path:'attendance',
        component: () => import('@/views/workbar/attendance/index.vue'),
        name:'attendance'
    }
]