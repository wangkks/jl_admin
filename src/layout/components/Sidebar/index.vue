<template>
  <div class="bar-box">
    <div class="leftBar">
      <ul class="leftBar-t">
        <li
          v-for="(item, index) in children"
          :key="index"
          @click="changeBtn(index)"
          :class="[index == leftBarIndex ? 'activited' : '']"
        >
          <img :src="index == leftBarIndex ? item.urlred : item.url" alt="" />
          {{ index }}-{{ leftBarIndex }}
        </li>
      </ul>
      <div class="leftBar-c">
        <img src="@/assets/second/icon_jianfan.png" alt="" />
        <img src="@/assets/second/icon_jinian.png" alt="" style="width: 30px" />
        <img src="@/assets/second/icon_biaodian.png" alt="" />
      </div>
      <div class="leftBar-b">
        <el-dropdown
          class="avatar-container"
          trigger="click"
          v-if="userRole == 1"
        >
          <img
            src="@/assets/second/icon_mine.png"
            alt=""
            style="width: 19px; height: 20px"
          />
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <div class="user-box">
              <div class="user-name">
                <span>王启川</span>
                <span>普通用户</span>
              </div>
              <div class="user-icon-right">
                <img src="@/assets/second/icon_myshape.png" alt="" />
              </div>
            </div>
            <router-link to="/myBook">
              <el-dropdown-item>
                <img
                  src="@/assets/second/icon_myshape.png"
                  alt=""
                  class="icon"
                  style="width: 14px; height: 14px"
                /><span class="user-dropdown-title">我的书架</span>
              </el-dropdown-item>
            </router-link>
            <router-link to="/myBook/myNote">
              <el-dropdown-item>
                <img
                  src="@/assets/second/icon_mynote.png"
                  alt=""
                  class="icon"
                /><span class="user-dropdown-title">我的笔记</span>
              </el-dropdown-item>
            </router-link>
            <router-link to="/myBook/searchRecords">
              <el-dropdown-item>
                <img
                  src="@/assets/second/icon_history.png"
                  alt=""
                  class="icon"
                /><span class="user-dropdown-title">检索历史</span>
              </el-dropdown-item>
            </router-link>
            <router-link to="/myBook/readingHistory">
              <el-dropdown-item>
                <img
                  src="@/assets/second/icon_read.png"
                  alt=""
                  class="icon"
                /><span class="user-dropdown-title">阅读历史</span>
              </el-dropdown-item>
            </router-link>
            <router-link to="/myBook/MyFeedback">
              <el-dropdown-item>
                <img
                  src="@/assets/second/icon_myFeedback.png"
                  alt=""
                  class="icon"
                /><span class="user-dropdown-title">我的反馈</span>
              </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>

        <img
          v-else
          src="@/assets/second/icon_mine.png"
          alt=""
          style="width: 19px; height: 20px"
          @click="userInfo"
        />
        <img src="@/assets/second/icon_logout.png" alt="" @click="loginOut" />
      </div>
    </div>
    <div class="rightBar">
      <logo v-if="showLogo" :collapse="isCollapse" />
      <template v-if="$route.path.split('/')[2] == 'resourceDetails'">
        <BookDetailBar v-if="detailData.bookName" :data="detailData" />
      </template>
      <template v-if="$route.path.split('/')[2] == 'resourceReading'">
        <BookSynopsisBar />
      </template>
      <!-- <template v-if="leftBarIndex == 1">
        <template v-if="userRole == 1">
          <BookLibrary />
        </template>
        <template v-else> <userInfo /></template>
      </template> -->
      <template v-if="leftBarIndex == 1">
        <BookLibrary />
      </template>
      <template v-if="leftBarIndex == 2">
        <MyBookshelf />
      </template>
      <template v-if="leftBarIndex == 3">
        <userInfo />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
import Logo from "./Logo";
import BookLibrary from "./BookLibrary";
import MyBookshelf from "./MyBookshelf";
import BookDetailBar from "./BookDetailBar";
import BookSynopsisBar from "./BookSynopsisBar";
import UserInfo from "./UserInfo";
import { booksDetail } from '@/api/bookLibrary'

export default {
  data() {
    return {
      leftBarIndex: 1,
      children: [
        {
          url: require("@/assets/second/icon_home.png"),
          urlred: require("@/assets/second/icon_home_red.png"),
        },
        {
          url: require("@/assets/second/icon_book.png"),
          urlred: require("@/assets/second/icon_book_red.png"),
        },
        {
          url: require("@/assets/second/icon_bookshelf.png"),
          urlred: require("@/assets/second/icon_bookshelf_red.png"),
        },
      ],
      userRole: 2,
      detailData: []
    };
  },
  components: {
    Logo,
    BookLibrary,
    MyBookshelf,
    BookDetailBar,
    BookSynopsisBar,
    UserInfo,
  },
  computed: {
    ...mapGetters(["sidebar"]),
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  watch: {
    leftBarIndex() {
      // this.leftBarIndex = localStorage.getItem('leftBarIndex')
    },
  },
  async created() {
    if (this.$route.path.split('/')[2] == 'resourceDetails') {
      const res = await booksDetail({ id: this.$route.params.id });
      this.detailData = res.data;
    }
  },
  mounted() {
    this.leftBarIndex = localStorage.getItem("leftBarIndex") || 1;
  },
  methods: {
    // 登出
    loginOut() {
      this.$store.dispatch("user/logout", {})
      this.$router.push('/login')
    },
    changeBtn(index) {
      if (index == 0) {
        this.$router.push("/");
        return;
      }
      if (index == 1) {
        // if (this.userRole == 1) {//角色判断
        this.$router.push("/example");
        // }
      }
      if (index == 2) {
        this.$router.push("/myBook/myNote");
      }

      if (index == 3) {
        this.$router.push("/userInfo");
      }
      localStorage.setItem("leftBarIndex", index);
      this.leftBarIndex = index;
    },
    userInfo() {
      this.leftBarIndex = 3
      this.$router.push("/userInfo");
    }
  },
};
</script>
<style lang="scss" scoped>
.icon {
  width: 14px;
  height: 14px;
  margin: 11px 16px 0 0;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: #d0021b;
  background-color: none !important;
}
.user-dropdown-title {
  border-bottom: 1px dashed #e9e9e9;
}
.el-dropdown-menu__item {
  display: flex;
}
.user-box {
  border-bottom: 1px dashed #e9e9e9;
  display: flex;
  justify-content: space-between;
  margin: 0 20px 10px;
  align-items: center;
  padding: 10px 0 18px;
  justify-content: space-between;
  .user-name {
    font-size: 14px;
    color: #000000;
    span {
      display: block;
      &:last-child {
        font-size: 12px;
        color: #95909e;
        margin-top: 10px;
      }
    }
  }
  .user-icon-right img {
    width: 7px;
    height: 11px;
  }
}
.bar-box {
  display: flex;
  .leftBar {
    width: 60px;
    height: 100%;
    background-color: #616161;
    ul {
      width: 100%;
      padding: 0;
      li {
        display: flex;
        justify-content: center;
        img {
          width: 26px;
          height: 24px;
          margin: 34px auto 0;
          padding: 0;
        }
        &.activited img {
          width: 42px;
          height: 42px;
        }
      }
    }
    .leftBar-c {
      width: 60px;
      position: absolute;
      top: 280px;
      left: 0;
      img {
        width: 24px;
        height: 24px;
        margin: 0 auto 33px;
        display: block;
      }
    }
    .leftBar-b {
      width: 60px;
      position: absolute;
      bottom: 7%;
      left: 0;
      .avatar-container {
        width: 100%;
        height: 29px;
        margin-bottom: 30px;
        .user-dropdown {
          .icon {
            width: 14px !important;
            height: 14px !important;
            padding: 0 16px 0 22px;
          }
        }
        .avatar-name {
          margin: 0 7px 0 4px;
          color: #000;
        }
      }
      img {
        width: 19px;
        height: 18px;
        margin: 0 auto 45px;
        display: block;
      }
    }
  }
  .rightBar {
    flex: 1;
  }
}
</style>