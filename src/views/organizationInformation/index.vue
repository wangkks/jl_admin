<template>
  <div class="organizat_box">
    <div class="organizat_box_right">
      <div class="organizat_box_t">
        <div class="organizat_left">机构基本信息</div>
      </div>
      <div class="organizat_form">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="机构名称">
            <el-input v-model="ruleForm.name" class="input_name"></el-input>
          </el-form-item>
          <el-form-item label="机构类型">
            <el-select v-model="ruleForm.region" placeholder="请选择机构类型">
              <el-option label="院校" value="shanghai"></el-option>
              <el-option label="机构" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="机构IP" class="institution_top">
            <el-input v-model="ruleForm.institution"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="ruleForm.institution"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="ruleForm.institution"></el-input>
          </el-form-item>
          <el-form-item label="机构授权时间" class="form_times">
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date1"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="ruleForm.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { organWeb } from "@/api/index"
export default {
  components: {
  },
  data() {
    return {
      input: '',
      ruleForm: {
        name: '',
        region: '',
        institution: '',
        date1: '',
        date2: ''
      },
    };
  },
  created() {
    organWeb({})
  },
  methods: {
  }
}
</script>
<style lang="scss">
$bg: #283443;
$cursor: #000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .organizat_box .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.organizat_box {
  .el-form-item__content {
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
  .el-form-item__label {
    line-height: 30px;
  }
  .el-input__inner {
    border-radius: 0;
  }

  .form_times .el-form-item__content .el-input input {
    width: 120px;
  }
  .form_times .el-form-item__content {
    display: flex;
    align-items: center;
  }
  .form_times .el-input__icon {
    line-height: 30px;
  }
}
</style>
<style lang="scss">
.organizat_box {
  width: 100%;
  height: auto;
  display: flex;
  background: rgba(237, 239, 243, 1);
}
.organizat_box_right {
  width: auto;
  margin-left: 30px;
}
.organizat_box_t {
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
.organizat_left {
  font-weight: 400;
  color: #000000;
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 35px;
}
.organizat_form {
  width: 380px;
  margin: 80px auto;
}
.institution_top {
  margin-top: 50px;
}
.line {
  width: 20px;
  height: 1px;
  background: #979797;
  margin-right: 8px;
}
</style>