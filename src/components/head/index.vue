<template>
  <div class="header">
    <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <i class="el-icon-user-solid"></i>
        <span class="avatar-name">幸会，王先生</span>
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link to="/">
          <el-dropdown-item>
            <img
              src="@/assets/qq.png"
              alt=""
              class="icon"
              style="width: 14px; height: 14px"
            />我的书架
          </el-dropdown-item>
        </router-link>
        <router-link to="/">
          <el-dropdown-item>
            <img src="@/assets/qq.png" alt="" class="icon" />我的笔记
          </el-dropdown-item>
        </router-link>
        <router-link to="/">
          <el-dropdown-item>
            <img src="@/assets/qq.png" alt="" class="icon" />检索历史
          </el-dropdown-item>
        </router-link>
        <router-link to="/">
          <el-dropdown-item>
            <img src="@/assets/qq.png" alt="" class="icon" />阅读历史
          </el-dropdown-item>
        </router-link>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="layout" @click="lagoutHandler">
      <span>登出</span>
      <i class="el-icon-user-solid"></i>
    </div>
    <div class="header-right">
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
</template>
<script>
export default {
  props: [],
  data() {
    return {

    };
  },
  mounted() {

  },

  computed: {

  },

  methods: {
    // 登出
    lagoutHandler() {
      this.$store.dispatch("user/logout", {})
    },
  },
};
</script>
<style lang="scss">
.icon {
  width: 14px;
  height: 14px;
  margin: 0 16px 0 0;
}
</style>
<style lang='scss' scoped>
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
  .logo {
    top: 26px;
    margin-left: 159px;
    img {
      width: 199px;
      height: 37px;
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
    span {
      margin-right: 8px;
    }
  }
  .header-right {
    // width: 49px;
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
