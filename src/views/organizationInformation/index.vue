<template>
  <div class="organizat_box">
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
          <el-input v-model="ruleForm.orgName" class="input_name"></el-input>
        </el-form-item>
        <el-form-item label="机构类型">
          <el-select v-model="ruleForm.orgType" placeholder="请选择机构类型">
            <el-option label="院校" value="shanghai"></el-option>
            <el-option label="机构" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="机构IP"
          class="institution_top"
          v-for="item in ruleForm.orgIps"
          :key="item.ipRange"
        >
          <el-input v-model="item.pRange"></el-input>
        </el-form-item>
        <el-form-item label="机构授权时间" class="form_times">
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.authStartTime"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
          <el-col class="line" :span="2"></el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.authEndTime"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { organWeb } from "@/api/index"
import { mapGetters } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      ruleForm: {},
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  async created() {
    localStorage.setItem("leftBarIndex", 3)
    const res = await organWeb({
      id: this.userInfo.id
    })

    this.ruleForm = res
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
  height: 100vh;
  overflow: scroll;
  background: rgba(237, 239, 243, 1);
  padding: 0 30px;
  margin-left: -210px;
  position: relative;
  z-index: 10;
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