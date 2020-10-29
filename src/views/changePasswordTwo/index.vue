<template>
  <div class="passTwo_box">
    <HeadIndex></HeadIndex>
    <div class="passTwo_box_t">基本信息</div>
    <div class="passTwo_form">
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
    <div class="passTwo_form form_two">
      <div class="passTwo_form_tit">
        <div class="passTwo_form_s"></div>
        邮箱验证
      </div>
      <el-form
        :model="ruleFormTwo"
        ref="ruleFormTwo"
        label-width="114px"
        class="demo-ruleForm"
      >
        <el-form-item label="请输入新密码">
          <el-input v-model="ruleForm.loginPass"></el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码">
          <el-input v-model="ruleForm.passwordTwo"></el-input>
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = Object.assign({}, this.ruleForm, {
            userEmail: this.userInfo.userEmail,
            id: this.userInfo.id
          })

          updatePassword(params)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitFormTwo(formNameTwo) {
      this.$refs[formNameTwo].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handlePass(index) {
      if (index == 0) {
        this.$router.push({
          path: '/changePasswordOne'
        })
      }

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
  padding: 124p x 0 17px;
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
}
.form_two {
  margin: 60px auto 0;
}
</style>