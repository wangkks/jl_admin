<template>
  <div class="essent_box">
    <div class="essent_box_right">
      <div class="essent_box_t">
        <div class="essent_left">基本信息</div>
      </div>
      <div class="essent_form">
        <el-form 
          :model="ruleForm" 
          :rules="rules" 
          ref="ruleForm" 
          label-width="100px" 
          class="demo-ruleForm">
          <el-form-item label="昵称" prop="name">
            <el-input v-model="ruleForm.name" class="input_name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="ruleForm.essentce">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="ruleForm.realName"></el-input>
          </el-form-item>
          <el-form-item label="国籍" prop="nationality">
            <el-input v-model="ruleForm.nationality"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="ruleForm.mailbox" class="mail_s"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components:{
    },
    data() {
      return {
        input: '',
        ruleForm: {
          name: '',
          essentce: '男',
          realName:'',
          nationality:'',
          phone:'',
          mailbox:'778866554@qq.com'
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          nationality:[
             { required: true, message: '请输入国籍', trigger: 'blur' }
          ],
          phone:[
             { required: true, message: '请输入手机号', trigger: 'blur' },
             { min: 3, max: 11, message: '手机号格式不正确', trigger: 'blur' }
          ]
        },
      };
    },
    methods: {
    }
  }
</script>
<style lang="scss">
$bg: #283443;
$cursor: #000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .essent_box .el-input input {
        color: $cursor;
    }
}

/* reset element-ui css */
.essent_box {
  .el-form-item__content{
    height: 30px;
    line-height: 30px;
    .el-input {
      height: 30px;
      width: 270px;
      input {
        background: #edeff3;
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
  .el-form-item__label{
    line-height: 30px;
  }
  .el-input__inner{
    border-radius: 0;
  }
  .mail_s input{
    border: 1px solid #edeff3!important;
  }
  .el-radio__inner{
    background: #D8D8D8;
    border: 1px solid #979797;
  }
  .el-radio__label{
    color: #000;
  }
  .el-radio__input.is-checked .el-radio__inner{
    background: #FF5747;
    border: 1px solid #D0021B;
  }
  .el-radio__inner::after{
    background-color: #FF5747;
  }
  .el-radio__input.is-checked+.el-radio__label{
    color: #000;
  }
}
</style>
<style lang="scss">
.essent_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.essent_box_right{
  width: auto;
  margin-left: 30px;
}
.essent_box_t{
  width: 1100px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 40px 0 38px;
  border-bottom: 1px dashed #979797;
  display: flex;
  justify-content: space-between;
}
.essent_left{
  font-weight: 400;
  color: #000000;
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 35px;
}
.essent_form{
  width: 320px;
  margin: 80px auto;
}
</style>