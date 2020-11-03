<template>
  <div class="my-book">
    <div class="book-top">
      <div class="book-title">机构中心</div>
      <div class="circular"></div>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          router
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <el-menu-item
            v-for="item in routesT"
            :key="item.path"
            :index="item.path"
            :class="[
              'submenu-title-noDropdown',
              '/' + $route.path.split('/')[1] + '/' + item.path ==
                $route.path || item.path == $route.path
                ? 'activited'
                : '',
            ]"
            >{{ (item.meta && item.meta.title) || '' }}
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
      <div class="book-title user">个人中心</div>
      <div class="circular"></div>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          router
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <el-menu-item
            v-for="item in routesB"
            :key="item.path"
            :index="item.path"
            :class="[
              'submenu-title-noDropdown',
              '/' + $route.path.split('/')[1] + '/' + item.path ==
                $route.path || item.path == $route.path
                ? 'activited'
                : '',
            ]"
            >{{ (item.meta && item.meta.title) || '' }}
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
import variables from "@/styles/variables.scss";
export default {
  data() {
    return {
      bookTypeList: [
        { name: "中国语言文学" },
        { name: "二级分类" },
        { name: "三级分类" },
        { name: "四级分类" },
      ],
      routesT: [],
      routesB: [],
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    secondPath: function () {
      // let pathSecound = this.$route.path.split("/");
      // if(pathSecound.length > 2){
      //     return pathSecound[2];
      // }
      // else{
      //     return 'null';
      // }
    },
  },
  mounted() {
    let route = this.$router.options.routes.find((item) => item.path == "/userInfo")
    this.routesT = route.children.slice(0, 3);
    this.routesB = route.children.slice(3);
  },
  methods: {
    changeBtn: function (index, path) {
      this.num = index;
      localStorage.setItem("appCreateSetUp", index);
      this.$store.commit("updateAppCreateSetUp", index);
      this.$router.push("/activity/" + path);
    },
  },
  components: {
    SidebarItem
  },
};
</script>
<style lang="scss" scoped>
.el-menu {
  .submenu-title-noDropdown {
    margin: 0 25px 0 50px !important;
    padding: 0 !important;
  }
  .submenu-title-noDropdown:last-child {
    border: none;
  }
}
.my-book {
  width: 210px;
  position: relative;
  .book-top {
    // border-bottom: 1px dashed #979797;
    padding-bottom: 50px;
    margin-bottom: 24px;
  }
  .circular {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #d0021b;
    position: absolute;
    top: 68px;
    left: 26px;
    z-index: 1;
  }
  .book-title {
    font-size: 16px;
    font-family: SourceHanSerifTC-Heavy, SourceHanSerifTC;
    font-weight: 800;
    color: #000000;
    line-height: 23px;
    letter-spacing: 2px;
    padding-left: 23px;
    margin-bottom: 22px;
    &.user {
      margin-top: 50px;
      border-top: 1px dashed #979797;
      padding-top: 24px;
    }
  }
}
</style>