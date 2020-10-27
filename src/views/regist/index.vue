<template>
  <div class="login-container">
    <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    <div class="login-bg"><img src="@/assets/login_bg.png" alt="" /></div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">用户注册</div>
      <el-form-item prop="userTel">
        <el-input
          ref="userTel"
          v-model="loginForm.userTel"
          placeholder="请输入手机号"
          name="userTel"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="code">
        <el-input
          v-model="loginForm.code"
          placeholder="验证码"
          name="code"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
        <span @click="ysz">输入验证码</span>
      </el-form-item>

      <el-form-item prop="userEmail">
        <el-input
          ref="userEmail"
          v-model="loginForm.userEmail"
          placeholder="请输入邮箱"
          name="userEmail"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="wxName">
        <el-input
          ref="wxName"
          v-model="loginForm.wxName"
          placeholder="请输入昵称"
          name="wxName"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="loginPass">
        <el-input
          :key="passwordType"
          ref="loginPass"
          v-model="loginForm.loginPass"
          :type="passwordType"
          placeholder="设置密码"
          name="loginPass"
          tabindex="2"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="再次确认密码"
          name="password"
          tabindex="2"
          auto-complete="on"
        />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        @click.native.prevent="handleRegist"
        >注册</el-button
      >

      <div class="loginOther">
        <div @click="jump('/login')">已有帐号，去登陆</div>
      </div>

      <div class="loginOther">
        <div>第三方登录</div>
        <div class="forget">
          <img src="@/assets//weibo.png" alt="" />
          <img src="@/assets//wechat.png" alt="" />
          <img src="@/assets//qq.png" alt="" />
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { newsList } from '@/api/index'
import { getToken } from "@/utils/auth";
import { createUser, sendSms } from "@/api/user"

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value < 11) {
        callback(new Error("请输入手机号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(
          new Error("请输入密码")
        );
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userTel: '',
        userEmail: '',
        wxName: '',
        loginPass: '',
        code: '',
        uuid: ''
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword,
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      type: 'phone'
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    // showPwd() {
    //   if (this.passwordType === "password") {
    //     this.passwordType = "";
    //   } else {
    //     this.passwordType = "password";
    //   }
    //   this.$nextTick(() => {
    //     this.$refs.password.focus();
    //   });
    // },
    async ysz() {
      if (!this.loginForm.userTel) {
        this.$message({
          showClose: true,
          message: '请先输入手机号'
        });
        return
      }

      const res = await sendSms({
        to: this.loginForm.userTel
      })

      this.loginForm.uuid = res.uuid
      console.log('res', res)
    },
    handleRegist() {
      createUser({
        userTel: '15010958957',
        userEmail: '15010958957@163.com',
        wxName: '哈哈哈',
        loginPass: '123456',
        // code: '123456',
        // uuid: '123456'
      })

      // this.$refs.loginForm.validate((valid) => {
      //   if (valid) {
      //     this.loading = true;
      //     this.$store
      //       .dispatch("user/login", this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: this.redirect || "/" });
      //         this.loading = false;
      //       })
      //       .catch(() => {
      //         this.loading = false;
      //       });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    jump(path) {
      this.$router.push(path)
    }
  },
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #d0021b;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-form-item__content {
    height: 30px;
    line-height: 30px;
    .el-input {
      height: 30px;
      width: 270px;
      input {
        background: #ffffff;
        border: 1px solid #979797;
        -webkit-appearance: none;
        color: #000;
        height: 30px;
        line-height: 30px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
  }
  .el-button--primary {
    width: 270px;
    height: 30px;
    background-color: #d0021b;
    border-radius: 30px;
    font-size: 14px;
    line-height: 0;
    letter-spacing: 1px;
    border: none;
  }
}
</style>

<style lang="scss" scoped>
$bg: #fbf9f1;
$dark_gray: #889aa4;
$light_gray: #d0021b;

.login-container {
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: $bg;
  overflow: hidden;
  .logo {
    position: fixed;
    top: 37px;
    left: 111px;
    img {
      width: 199px;
      height: 37px;
    }
  }
  .login-bg {
    width: 682px;
    height: 100%;
    overflow: hidden;
    img {
      width: 682px;
      height: 100%;
      display: block;
    }
  }
  .login-form {
    position: fixed;
    top: 50%;
    left: 54%;
    margin-top: -205px;
    margin-left: -197px;
    width: 394px;
    height: 411px;
    max-width: 100%;
    padding: 46px 64px 49px 60px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
  }
  .loginOther {
    display: flex;
    justify-content: space-between;
    margin: 21px 0 42px;
    font-size: 12px;
    color: #000000;
    cursor: pointer;
    .forget {
      span:last-child {
        margin-left: 20px;
        display: inline-block;
      }
      img {
        width: 22px;
        height: 19px;
        margin-left: 36px;
        &:last-child {
          width: 18px;
          height: 20px;
        }
      }
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    font-size: 24px;
    color: $light_gray;
    margin: 0px auto 20px;
    text-align: center;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
