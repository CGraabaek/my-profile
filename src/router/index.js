import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Projects from '@/pages/Projects'
import Links from '@/pages/Links'
import Tools from '@/pages/Tools'


Vue.use(Router)

export default new Router({
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/links',
            name: 'Links',
            component: Links
        },
        {
            path: '/tools',
            name: 'Tools',
            component: Tools
        },
        // { path: '*', redirect: '/' }, // catch all use case
    ]
})
// export default new Router({
//     // mode: 'history',
//     // hash: false,
//     routes: [
//         {
//             path: '/',
//             name: 'Index',
//             component: Index
//         },
//         {
//             path: '/projects',
//             name: 'Projects',
//             component: Projects
//         },
//         {
//             path: '/links',
//             name: 'Links',
//             component: Links
//         },
//         {
//             path: '/tools',
//             name: 'Tools',
//             component: Tools
//         },
//         // { path: '*', redirect: '/' }, // catch all use case
//     ]
// })

// const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes
// });
// export default router;