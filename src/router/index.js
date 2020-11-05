import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/layout";
import Empty from "@/components/empty";

export const constantRoutes = [
  {
    path: "/example",
    component: Layout,
    // redirect: '/example',
    name: "Example",
    meta: { title: "" },
    children: [
      {
        path: "/example",
        component: Empty,
        redirect: "/example/bookLibraryList",
        name: "Example",
        meta: { title: "经部" },
        children: [
          {
            path: "bookLibraryList",
            name: "Table",
            component: () => import("@/views/bookLibraryList/index"),
            meta: { title: "书籍库" }
          },
          {
            path: "tree",
            name: "Tree",
            component: () => import("@/views/tree/index"),
            meta: { title: "Tree" }
          }
        ]
      },
      {
        path: "/nested",
        component: Empty,
        redirect: "/nested",
        name: "Nested",
        meta: { title: "史部" },
        children: [
          {
            path: "menu1",
            name: "Menu1",
            component: () => import("@/views/nested/menu1/index"),
            meta: { title: "Menu1" }
          },
          {
            path: "tree",
            name: "Tree",
            component: () => import("@/views/tree/index"),
            meta: { title: "Tree" }
          }
        ]
      }
    ]
  },
  {
    path: "/language",
    component: Layout,
    redirect: "/language",
    name: "Language",
    meta: { title: "" },
    children: [
      {
        path: "/language",
        name: "Menu1",
        component: () => import("@/views/nested/menu1/index"),
        meta: { title: "语言文学" },
        children: [
          {
            path: "menu1",
            name: "Menu1",
            component: () => import("@/views/nested/menu1/index"),
            meta: { title: "中国语言文学" }
          },
          {
            path: "tree",
            name: "Tree",
            component: () => import("@/views/tree/index"),
            meta: { title: "二级分类" }
          },
          {
            path: "tree",
            name: "Tree",
            component: () => import("@/views/tree/index"),
            meta: { title: "二级分类" }
          }
        ]
      }
    ]
  },
  {
    path: "/myBook",
    component: Layout,
    redirect: "/myBook/myNote",
    name: "MyBook",
    meta: { title: "" },
    children: [
      {
        path: "/myBook/myNote",
        name: "MyNote",
        component: () => import("@/views/myNotes/index"),
        meta: {
          title: "我的笔记",
          icon: require("@/assets/second/icon_mynote.png"),
          iconred: require("@/assets/second/icon_mynote_red.png")
        }
      },
      {
        path: "/myBook",
        name: "MyBook",
        redirect: "/myBook/menu/:id",
        component: () => import("@/views/nested/menu1/index"),
        meta: {
          title: "我的书架"
        },
        children: [
          {
            path: "/myBook/menu/:id",
            name: "Menu1",
            component: () => import("@/views/nested/menu1/index"),
            meta: { title: "古典文学" }
          }
        ]
      },
      {
        path: "/myBook/searchRecords",
        name: "SearchRecords",
        component: () => import("@/views/searchRecords/index"),
        meta: {
          title: "检索记录",
          icon: require("@/assets/second/icon_history.png"),
          iconred: require("@/assets/second/icon_history_red.png")
        }
      },
      {
        path: "/myBook/readingHistory",
        name: "ReadingHistory",
        component: () => import("@/views/readingHistory/index"),
        meta: {
          title: "阅读历史",
          icon: require("@/assets/second/icon_read.png"),
          iconred: require("@/assets/second/icon_read_red.png")
        }
      },
      {
        path: "/myBook/MyFeedback",
        name: "MyFeedback",
        component: () => import("@/views/myFeedback/index"),
        meta: {
          title: "我的反馈",
          icon: require("@/assets/second/icon_myFeedback.png"),
          iconred: require("@/assets/second/icon_myFeedback_red.png")
        }
      },
      {
        path: "resourceDetails/:id", //资源详情页
        component: () => import("@/views/resourceDetails/index"),
        hidden: true,
        meta: {}
      },
      {
        path: "resourceReading/:bookid/:id", //资源阅读页
        component: () => import("@/views/resourceReading/index"),
        hidden: true,
        meta: {}
      }
    ]
  },
  {
    path: "/userInfo",
    component: Layout,
    redirect: "/userInfo/organization",
    name: "UserInfo",
    meta: { title: "" },
    children: [
      {
        path: "organization",
        name: "Organization",
        component: () => import("@/views/organizationInformation/index"),
        meta: {title: "机构信息"}
      },
      {
        path: "searchRecords",
        name: "ResourcesOrdered",
        component: () => import("@/views/resourcesOrdered/index"),
        meta: {title: "已订阅资源"}
      },
      // {
      //   path: "resourcesOrdered",
      //   name: "ResourcesOrdered",
      //   component: () => import("@/views/resourcesOrdered/index"),
      //   meta: {title: "资源统计"}
      // },
      {
        path: "resourcesOrderedS",
        name: "resourcesOrderedS",
        component: () => import("@/views/resourcesOrderedS/index"),
        meta: {title: "资源统计"}
      },
      {
        path: "baseInfo",
        name: "BaseInfo",
        component: () => import("@/views/essentialInformation/index"),
        meta: {title: "基本信息"}
      },
      {
        path: "accountSecurity",
        name: "AccountSecurity",
        component: () => import("@/views/accountSecurity/index"),
        meta: {title: "账号安全"}
      },
    ]
  },
  {
    path: "/",
    component: () => import("@/views/index/index"),
    name: "",
    hidden: false,
    redirect: "/index"
  },
  {
    path: "/index",
    component: () => import("@/views/index/index")
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/regist",
    component: () => import("@/views/regist/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/news", //新闻列表
    component: () => import("@/views/moreNews/index")
  },
  {
    path: "/newsDetail/:id", //新闻详情
    component: () => import("@/views/moreNewsDetail/index")
  },
  {
    path: "/personalCenter", //个人中心
    component: () => import("@/views/personalCenter/index")
  },
  {
    path: "/changePasswordOne", //修改密码页面1
    component: () => import("@/views/changePasswordOne/index")
  },
  {
    path: "/changePasswordTwo", //修改密码页面2
    component: () => import("@/views/changePasswordTwo/index")
  },
  {
    path: "/advancedSearch", //高级检索
    component: () => import("@/views/advancedSearch/index")
  },
  {
    path: "/detectionResult", //检索结果
    component: () => import("@/views/detectionResult/index")
  },
  {
    path: "/libraryWindow", //书籍库橱窗
    component: () => import("@/views/libraryWindow/index")
  },
  { path: "*", redirect: "/404", hidden: true }
];

// 动态路由，根据权限的不同显示不同的内容, 暂时没有根据之后的需求做的保留
export const asyncRoutes = [];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
