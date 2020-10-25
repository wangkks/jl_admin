import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/index/index'),
        name: '',
        hidden: false,
        redirect: '/index'
    },
    {
		path: '/index',
		component: () => import('@/views/index/index'),
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: '/personalCenter',//个人中心
        component: () => import('@/views/personalCenter/index'),
    },
    {
        path: '/changePasswordOne',//修改密码页面1
        component: () => import('@/views/changePasswordOne/index'),
    },
    {
        path: '/changePasswordTwo',//修改密码页面2
        component: () => import('@/views/changePasswordTwo/index'),
    },
    {
        path: '/advancedSearch',//高级检索
        component: () => import('@/views/advancedSearch/index'),
    },
    {
        path: '/detectionResult',//检索结果
        component: () => import('@/views/detectionResult/index'),
    },
    {
        path: '/libraryWindow',//书籍库橱窗
        component: () => import('@/views/libraryWindow/index'),
    },
    {
        path: '/bookLibraryList',//书籍库列表
        component: () => import('@/views/bookLibraryList/index'),
    },
    {
        path: '/resourceDetails',//资源详情页
        component: () => import('@/views/resourceDetails/index'),
    },
    {
        path: '/resourceReading',//资源阅读页
        component: () => import('@/views/resourceReading/index'),
    },
    {
        path: '/resourcesOrdered',//已订购资源
        component: () => import('@/views/resourcesOrdered/index'),
    },
    {
        path: '/myBookshelf',//我的书架
        component: () => import('@/views/myBookshelf/index'),
    },
    {
        path: '/myNotes',//我的笔记
        component: () => import('@/views/myNotes/index'),
    },
    {
        path: '/searchRecords',//检索记录
        component: () => import('@/views/searchRecords/index'),
    },
    {
        path: '/readingHistory',//阅读历史
        component: () => import('@/views/readingHistory/index'),
    },
    {
        path: '/myFeedback',//我的反馈
        component: () => import('@/views/myFeedback/index'),
    },
    {
        path: '/organizationInformation',//机构信息
        component: () => import('@/views/organizationInformation/index'),
    },
    {
        path: '/essentialInformation',//基本信息
        component: () => import('@/views/essentialInformation/index'),
    },
    {
        path: '/accountSecurity',//账号安全
        component: () => import('@/views/accountSecurity/index'),
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example',
        name: 'Example',
        meta: { title: '' },
        children: [
            {
                path: '/example',
                component: Layout,
                redirect: '/example/table',
                name: 'Example',
                meta: { title: '经部' },
                children: [
                    {
                        path: 'table',
                        name: 'Table',
                        component: () => import('@/views/table/index'),
                        meta: { title: 'Table', icon: 'table' }
                    },
                    {
                        path: 'tree',
                        name: 'Tree',
                        component: () => import('@/views/tree/index'),
                        meta: { title: 'Tree', icon: 'tree' }
                    }
                ]
            },
            {
                path: '/nested',
                component: Layout,
                redirect: '/nested',
                name: 'Nested',
                meta: { title: '史部' },
                children: [
                    {
                        path: 'menu1',
                        name: 'Menu1',
                        component: () => import('@/views/nested/menu1/index'), // Parent router-view
                        meta: { title: 'Menu1', icon: 'table' },
                    },
                    {
                        path: 'tree',
                        name: 'Tree',
                        component: () => import('@/views/tree/index'),
                        meta: { title: 'Tree', icon: 'tree' }
                    }
                ]
            },
        ]
    },
    {
        path: '/language',
        component: Layout,
        redirect: '/nested',
        name: 'Language',
        meta: { title: '' },
        children: [
            {
                path: '/nested',
                name: 'Menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                meta: { title: '语言文学' },
                children: [
                    {
                        path: 'menu1',
                        name: 'Menu1',
                        component: () => import('@/views/nested/menu1/index'), // Parent router-view
                        meta: { title: '中国语言文学' },
                    },
                    {
                        path: 'tree',
                        name: 'Tree',
                        component: () => import('@/views/tree/index'),
                        meta: { title: '二级分类'}
                    },
                    {
                        path: 'tree',
                        name: 'Tree',
                        component: () => import('@/views/tree/index'),
                        meta: { title: '二级分类'}
                    }
                ]
            },
        ]
    },

    // {
    //     path: '/nested',
    //     component: Layout,
    //     redirect: '/nested/menu1',
    //     name: 'Nested',
    //     meta: { title: '经部', icon: 'el-icon-s-help' },
    //     children: [
    //         {
    //             path: 'menu1',
    //             component: () => import('@/views/nested/menu1/index'), // Parent router-view
    //             name: 'Menu1',
    //             meta: { title: 'Menu1' },
    //             children: [
    //                 {
    //                     path: 'menu1-1',
    //                     component: () => import('@/views/nested/menu1/menu1-1'),
    //                     name: 'Menu1-1',
    //                     meta: { title: 'Menu1-1' }
    //                 },
    //                 {
    //                     path: 'menu1-2',
    //                     component: () => import('@/views/nested/menu1/menu1-2'),
    //                     name: 'Menu1-2',
    //                     meta: { title: 'Menu1-2' }
    //                 },
    //                 {
    //                     path: 'menu1-3',
    //                     component: () => import('@/views/nested/menu1/menu1-3'),
    //                     name: 'Menu1-3',
    //                     meta: { title: 'Menu1-3' }
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'menu2',
    //             component: () => import('@/views/nested/menu2/index'),
    //             name: 'Menu2',
    //             meta: { title: 'menu2' }
    //         }
    //     ]
    // },

    // {
    //     path: 'external-link',
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //             meta: { title: 'External Link', icon: 'link' }
    //         }
    //     ]
    // },

    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
