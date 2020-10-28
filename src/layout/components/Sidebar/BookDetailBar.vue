<template>
  <div class="book-detail">
    <div class="book-img"><img :src="bookDeatil.bookImg" alt=""></div>
    <div class="book-title">{{bookDeatil.bookTitle}}</div>
    <div class="book-join">
      <img :src="bookDeatil.bookmark" alt="">
      <span>加入书架</span>
    </div>
    <div class="book-info">
      <span>作者：{{bookDeatil.author}}</span>
      <span>出版社：</span>
      <span>出版时间：</span>
      <span>资源分类：</span>
      <span>主题词：</span>
      <span>版次：</span>
      <span>丛编：</span>
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
      bookDeatil: {
        bookImg: require("@/assets/second/bitmap_bg.png"),
        bookTitle: "诗国南京",
        author: "陈勇",
        more: require("@/assets/second/more.png"),
        details:
          "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
        bookmark: require("@/assets/second/bookmark-line.png"),
      },
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
    routes() {
      return this.$router.options.routes.find(
        (item) => item.path == "/example"
      );
    },
    routesT() {
      return this.$router.options.routes.find(
        (item) => item.path == "/language"
      );
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
  mounted() {},
  methods: {
    changeBtn: function (index, path) {
      this.num = index;
      localStorage.setItem("appCreateSetUp", index);
      this.$store.commit("updateAppCreateSetUp", index);
      this.$router.push("/activity/" + path);
    },
  },
  components: {
    SidebarItem,
  },
};
</script>
<style lang="scss" scoped>
.book-detail {
  width: 210px;
  height: 100%;
  position: relative;
  .book-img{
    width: 100%;
    border-bottom: 1px dashed #979797;
    text-align: center;
    padding-bottom: 20px;
    img {
      width: 145px;
      height: 199px;
      // margin: 0 auto 20px;
    }
  }
  .book-title{
    margin: 21px 0 13px 19px;
    color: #363636;
    font-size: 14px;
  }
  .book-join{
    width: 100px;
    height: 33px;
    display: flex;
    align-items: center;
    border: 1px solid #D0021B;
    margin-left: 19px;
    img{
      width :20px;
      height: 20px;
      margin: 0 8px 0 13px;
    }
    span{
      font-size: 12px;
      color: #D0021B;
    }
  }
  .book-info{
    color: #363636;
    font-size: 12px;
    margin: 23px 0 0 19px;
    span{
      display: block;
      line-height: 25px;
    }
  }
}
</style>