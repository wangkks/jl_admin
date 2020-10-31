<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert>
    1111
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { asyncRoutes, constantRoutes } from '@/router'

export default {
  data() {
    return {
      input: '',
      readingData: [],
      sortType: 'desc'
    };
  },
  computed: {
    ...mapGetters(["permission_routes"])
  },
  created() {
    let newRouter = constantRoutes
    console.log(' newRouter[2].children[0]', newRouter[2].children[0].children)

    // newRouter[2].children[0].children = []

    newRouter[2].children[0].children = [
      {
        path: "/myBook/menu/1",
        name: "Menu1",
        component: () => import("@/views/nested/menu1/index"),
        meta: { title: "古典文学" }
      },
      {
        path: "/myBook/menu/2",
        name: "Menu2",
        component: () => import("@/views/nested/menu1/index"),
        meta: { title: "古典文学1" }
      },
    ]

    console.log('this', this.$route.params)
    // console.log('newRouter', newRouter)

    this.$store.commit("permission/SET_ROUTES", newRouter);
  }
}
</script>
