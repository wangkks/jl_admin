<template>
  <div class="personal_box">
    <HeadIndex></HeadIndex>
    <div class="personal_box_t">基本信息</div>
    <div class="personal_form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="wxName">
          <el-input v-model="ruleForm.wxName" class="input_name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="ruleForm.userSex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="国籍" prop="userArea">
          <el-input v-model="ruleForm.userArea"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="userTel">
          <el-input v-model="ruleForm.userTel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="ruleForm.userEmail" class="mail_s"></el-input>
        </el-form-item>
      </el-form>
      <button @click="ok">确定修改</button>
    </div>
    <div class="personal_box_t">账号安全</div>
    <div class="personal_centent">
      <div
        class="personal_centent_box"
        v-for="(item, index) in listData"
        :key="index"
        @click="handlePass(index)"
      >
        <img :src="item.img" alt="" class="personal_centent_i" />
        <div class="personal_centent_top">{{ item.name }}</div>
        <div class="personal_centent_s">{{ item.title }}</div>
        <div class="personal_centent_o"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'
import { getUser, updateUser } from "@/api/user"
export default {
  components: {
    HeadIndex
  },
  data() {
    return {
      ruleForm: {
        wxName: '',
        userSex: '',
        userName: '',
        userArea: '',
        userTel: '',
        userEmail: ''
      },
      rules: {
        wxName: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        userArea: [
          { required: true, message: '请输入国籍', trigger: 'blur' }
        ],
        userTel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 3, max: 11, message: '手机号格式不正确', trigger: 'blur' }
        ]
      },
      listData: [
        {
          'img': require('../../assets/second/password.png'),
          'name': '修改密码',
          'title': '通过绑定手机号或邮箱更改',
          'circular': ''
        },
        {
          'img': require('../../assets/second/phone_red.png'),
          'name': '修改手机号',
          'title': '通过绑定手机号或邮箱更改',
          'circular': ''
        },
        {
          'img': require('../../assets/second/mail.png'),
          'name': '修改邮箱',
          'title': '通过绑定手机号或邮箱更改',
          'circular': ''
        }
      ]
    };
  },
  async created() {
    const res = await getUser({})

    this.ruleForm = res.data
  },
  methods: {
    async ok() {
      try {
        const res = await updateUser(this.ruleForm)
        this.$message({
          message: '信息修改成功',
          type: 'success'
        });
      } catch (error) {
        console.log('error', error)
      }

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
  .personal_box .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.personal_box {
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
  .el-radio__inner {
    background: #d8d8d8;
    border: 1px solid #979797;
  }
  .el-radio__label {
    color: #000;
  }
  .el-radio__input.is-checked .el-radio__inner {
    background: #ff5747;
    border: 1px solid #d0021b;
  }
  .el-radio__inner::after {
    background-color: #ff5747;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #000;
  }
}
</style>
<style lang="scss">
.personal_box {
  width: 100%;
  height: auto;
}
.personal_box_t {
  width: 1286px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 124px 0 17px;
  border-bottom: 1px dashed #979797;
  margin: 0 auto;
}
.personal_form {
  width: 320px;
  margin: 35px auto;
}
.personal_centent {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.personal_centent_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 44px 100px;
}
.personal_centent_i {
  width: 27px;
  height: 32px;
}
.personal_centent_itwo {
  width: 23px;
  height: 32px;
}
.personal_centent_ithree {
  width: 32px;
  height: 27px;
}
.personal_centent_top {
  color: #000;
  font-size: 14px;
  margin-top: 30px;
}
.personal_centent_s {
  color: #000;
  font-size: 12px;
  line-height: 24px;
}
.personal_centent_o {
  width: 9px;
  height: 9px;
  background: #a20627;
  border-radius: 50%;
  margin-top: 60px;
}
</style>