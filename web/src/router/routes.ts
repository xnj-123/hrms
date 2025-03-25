import workbarChildren from './workbar'

export const defaultRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name:'login',
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name:'layout',
        redirect: '/home',
        children:[
            {
                path: 'home',
                component: () => import('@/views/home/index.vue'),
                name:'home',
            },
            {
                path:'chatroom',
                component: () => import('@/views/chatroom/index.vue'),
                name:'chatroom',
            },
            {
                path:'workbar',
                component: () => import('@/views/workbar/index.vue'),
                name:'workbar',
                redirect:'/workbar/workhome',
                children: workbarChildren,
            },
            {
                path:'about',
                component: () => import('@/views/about/index.vue'),
                name:'about'
            }
        ]
    },
    {
        path:'/salary',
        component: () => import('@/layout/index.vue'),
        name:'salary',
        redirect:'/salary/overview',
        children:[
            {
                path:'overview',
                component: () => import('@/views/salary/overview/index.vue'),
                name:'overview'
            },
            {
                path:'adjust',
                component: () => import('@/views/salary/adjust/index.vue'),
                name:'salaryAdjust'
            }
        ]
    },
    {  
        path:'/department',
        component: () => import('@/layout/index.vue'),
        name:'department',
        children:[
            {
                path:'overview',
                component: () => import('@/views/department/overview/index.vue'),
                name:'departmentOverview'
            },
            {
                path:'adjust',
                component: () => import('@/views/department/adjust/index.vue'),
                name:'departmentAdjust'
            }
        ]
    },
    {
        path:'/permission',
        component: () => import('@/layout/index.vue'),
        name:'permission',
        children: [
            {
                path:'user',
                component: () => import('@/views/permission/user/index.vue'),
                name:'user'
            },
            {
                path:'role',
                component: () => import('@/views/permission/role/index.vue'),
                name:'role'
            },
            {
                path:'menu',
                component: () => import('@/views/permission/menu/index.vue'),
                name:'menu'
            },
        ]
    }
]

export const anyRoutes = [
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404/index.vue'),
        name:'Any',
    }
]