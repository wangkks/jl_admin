<template>
  <div class="advance_box">
    <HeadIndex></HeadIndex>
    <div class="advance_box_t">
      <div class="advance_box_span">
        <div>高级检索</div>
        <div class="advance_box_totle">
          共有 
          <span class="advance_box_num">10000</span> 
          条记录库
        </div>
      </div>
    </div>
    <div class="advance_centent">
      <div class="advance_centent_add">
        <div><i class="el-icon-plus addplus"></i></div>
        <div class="advance_centent_input">
          <el-input
            placeholder="请选择日期"
            suffix-icon="el-icon-d-caret"
            v-model="input1">
          </el-input>
        </div>
      </div>
      <div class="advance_select">
        <el-checkbox-group 
          v-model="checkedCities"
          >
          <el-checkbox 
            v-for="city in cities" 
            :label="city" 
            :key="city">{{city}}
          </el-checkbox>
        </el-checkbox-group>
        <div 
          class="advance_select_btn"
          @click="clickBtn()"
          >
          搜索
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'
const cityOptions = ['关联字检索', '同义词关联', '忽略一个字', '忽略标点'];
  export default {
    data() {
      return {
        input1: '文章名',
        checkedCities: ['关联字检索', '忽略一个字'],
        cities: cityOptions
      };
    },
    components:{
      HeadIndex
    },
    methods: {
      clickBtn(){
        this.$router.push({
          path:'/detectionResult'
        })
      }
    }
  }
</script>
<style lang="scss">
.advance_box{
  width: 100%;
  height: 900px;
  background:  rgba(237, 239, 243, 1);
}
.advance_box_t{
  width: 1286px;
  padding: 90px 0 44px;
  border-bottom: 1px dashed #979797;
  margin: 84px auto 0;
}
.advance_box_span{
  font-size: 24px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
}
.advance_box_totle{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  margin-left: 7px;
}
.advance_box_num{
  color: #D0021B;
}
.advance_centent{
  width: 800px;
  margin: 52px auto 0;
}
.advance_centent_add{
  width: 19px;
  height: 20px;
  border: 1px solid #BCBCBC;
  border-radius: 2px;
}
.addplus{
  color: #BCBCBC;
}
.advance_select{
  margin-top: 80px;
  margin: 80px 0 0 100px;
}
.advance_select_btn{
  width: 97px;
  height: 30px;
  background: #D0021B;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 30px;
  text-align: center;
  border-radius: 30px;
  margin: 60px auto 0;
  cursor: pointer;
}
</style>