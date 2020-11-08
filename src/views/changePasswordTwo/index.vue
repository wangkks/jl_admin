<template>
  <div class="passTwo_box">
    <HeadIndex></HeadIndex>
    <div class="passTwo_box_t">基本信息</div>
    <div class="passTwo_form" v-if="!ruleOk">
      <div class="passTwo_form_tit">
        <div class="passTwo_form_s"></div>
        邮箱验证
      </div>
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="邮箱账号">
          <el-input
            v-model="userInfo.userEmail"
            class="mail_s"
            readonly=""
          ></el-input>
        </el-form-item>
        <el-form-item class="yzm_box">
          <el-input v-model="ruleForm.code"></el-input>
          <div class="yzm_span" @click="ysz">获取验证码</div>
        </el-form-item>
        <el-form-item class="btn_box">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >下一步</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div v-else class="passTwo_form form_two">
      <div class="passTwo_form_tit">
        <div class="passTwo_form_s"></div>
        邮箱验证
      </div>
      <el-form label-width="114px" class="demo-ruleForm">
        <el-form-item label="请输入新密码">
          <el-input v-model="ruleForm.loginPass"></el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码">
          <el-input v-model="passwordTwo"></el-input>
        </el-form-item>
        <el-form-item class="btn_box">
          <el-button type="primary" @click="submitFormTwo('ruleFormTwo')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'
import { mapGetters } from "vuex";
import { sendEmail, updatePassword } from '@/api/user'

export default {
  data() {
    return {
      ruleOk: false,
      passwordTwo: '',
      ruleForm: {
        loginPass: '',
        uuid: '',
        code: ''
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    HeadIndex
  },
  created() {
  },
  methods: {
    async ysz() {
      const res = await sendEmail({
        to: this.userInfo.userEmail
      })

      this.ruleForm.uuid = res.data.uuid
    },
    submitForm() {
      if (!this.ruleForm.code) {
        this.$message({
          message: '请输入验证码',
          type: "error",
          duration: 1000
        });
        return
      }

      this.ruleOk = true
    },
    async submitFormTwo(formName) {
      if (!this.ruleForm.loginPass) {
        this.$message({
          message: '请输入要修改的密码',
          type: "error",
          duration: 1000
        });
        return
      }

      if (!this.passwordTwo) {
        this.$message({
          message: '请再次输入密码',
          type: "error",
          duration: 1000
        });
        return
      }

      if (this.ruleForm.loginPass !== this.passwordTwo) {
        this.$message({
          message: '两次密码不一致',
          type: "error",
          duration: 1000
        });
        return
      }

      let params = Object.assign({}, this.ruleForm, {
        userEmail: this.userInfo.userEmail,
        id: this.userInfo.id
      })

      const res = await updatePassword(params)

      this.$message({
        type: 'success',
        message: '修改成功!'
      });

      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
$bg: #283443;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .passTwo_box .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.passTwo_box {
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
  .el-form-item__label {
    line-height: 30px;
  }
  .el-input__inner {
    border-radius: 0;
  }
  .mail_s input {
    border: 1px solid #fff !important;
  }
  .yzm_box .el-form-item__content {
    display: flex;
    margin-left: 34px !important;
  }
  .btn_box .el-form-item__content {
    margin-left: 34px !important;
  }
  .btn_box .el-button--primary {
    background-color: #d0021b;
    border-color: #d0021b;
  }
  .btn_box .el-button {
    border-radius: 30px;
    padding: 10px 30px;
  }
}
</style>
<style lang="scss">
.passTwo_box {
  width: 100%;
  height: auto;
}
.passTwo_box_t {
  width: 1286px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 124px 0 17px;
  border-bottom: 1px dashed #979797;
  margin: 0 auto;
}
.passTwo_form {
  width: 380px;
  margin: 130px auto 0;
}
.passTwo_form_tit {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: #d0021b;
  margin-bottom: 20px;
}
.passTwo_form_s {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #a20627;
  margin-right: 22px;
}
.yzm_span {
  width: 100px;
  margin-left: 18px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
}
.form_two {
  margin: 60px auto 0;
}
</style>