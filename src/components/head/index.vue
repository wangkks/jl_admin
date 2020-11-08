<template>
  <div class="header">
    <div class="logo" @click="goIndex">
      <img src="@/assets/logo.png" alt="" />
    </div>

    <div style="display: flex; align-items: center">
      <el-dropdown v-if="userInfo.id" class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-user-solid"></i>
          <span class="avatar-name">幸会，{{ userInfo.userName }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/myBook/menu/0">
            <el-dropdown-item>
              <img
                src="@/assets/second/icon_myshape.png"
                alt=""
                class="icon"
                style="width: 14px; height: 14px"
              />
              <span class="user-dropdown-title">我的书架</span>
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
        </el-dropdown-menu>
      </el-dropdown>
      <div v-if="userInfo.id" class="layout" @click="lagoutHandler">
        <span>登出</span>
        <i class="el-icon-user-solid"></i>
      </div>

      <div class="header-right">
        <div v-if="!userInfo.id" class="layout" @click="login">
          <span>登录</span>
          <i class="el-icon-user-solid"></i>
        </div>
        <div class="header-right-item">
          <img src="@/assets/icon_jianfan.png" alt="" />
          <span>简繁转换</span>
        </div>
        <div class="header-right-item">
          <img src="@/assets/icon_jinian.png" alt="" />
          <span>纪年换月</span>
        </div>
        <div class="header-right-item">
          <img src="@/assets/icon_biaodian.png" alt="" />
          <span>自动标点</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
  },
  methods: {
    // 登出
    lagoutHandler() {
      this.$store.dispatch("user/logout", {})
      this.$router.push('/login')
    },
    goIndex() {
      this.$router.push('/index');
    },
    login() {
      this.$router.push('/login');
    }
  },
};
</script>
<style lang="scss">
.icon {
  width: 14px;
  height: 14px;
  margin: 11px 16px 0 0;
}
.el-dropdown-menu__item {
  display: flex;
}
</style>
<style lang='scss' scoped>
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: #d0021b;
  background-color: none !important;
}
.user-dropdown-title {
  border-bottom: 1px dashed #e9e9e9;
}
.header {
  width: 100%;
  // height: 900px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 84px;
  align-items: center;
  background-color: rgba(221, 162, 129, 0.15);
  padding-right: 80px;
  font-size: 12px;
  color: #000;
  z-index: 99;
  justify-content: space-between;
  .logo {
    top: 17px;
    margin-left: 159px;
    img {
      width: 171px;
      height: 50px;
    }
  }
  .avatar-container {
    margin-left: auto;
    height: 29px;
    line-height: 29px;
    border-right: 3px solid #979797;
    padding: 0 14px;
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
  .layout {
    margin: 0 0 0 14px;
    line-height: 84px;
    span {
      margin-right: 8px;
    }
  }
  .header-right {
    height: 150px;
    display: flex;
    margin: 68px 0 0 21px;

    .header-right-item {
      width: 49px;
      height: 150px;
      margin-left: 19px;
      background: url(../../assets/icon_shu.png);
      background-size: 100%;
      img {
        width: 29px;
        height: 29px;
        display: block;
        margin: 21px auto 0;
      }
      span {
        width: 12px;
        word-wrap: break-word;
        font-size: 12px;
        color: #333333;
        display: block;
        float: right;
        margin: 15px 9px 0 0;
      }
    }
  }
}
</style>
