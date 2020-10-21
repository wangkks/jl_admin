<template>
  <div class="serchre_box">
    <div class="serchre_box_left"></div>
    <div class="serchre_box_right">
      <div class="serchre_box_t">
        <div class="serchre_left">
          <div class="serchre_left_n">检索记录</div>
          <div class="serchre_totle">
            共12条
          </div>
        </div>
        <div class="serchre_right">
          <div class="serchre_input">
            <el-input v-model="input" placeholder="搜索"></el-input>
            <img src="@/assets/icon_search.png" alt="" class="serchre_input_i"/>
          </div>
          <div class="serchre_manage">
            <img src="@/assets/delete_red.png" alt="" class="serchre_manage_i"/>
            <div>批量删除</div>
          </div>
        </div>
      </div>
      <div class="serchre_mine">
        <div 
          class="serchre_mine_box_max"
          v-for="(item,index) in serchreData"
          :key='index'
          >
          <div class="serchre_mine_box">
            <div class="serchre_mine_box_t">
              <div>{{item.name}}</div>
              <div class="serchre_mine_box_t_s">检索时间：{{item.time}}  </div>
            </div>
            <img src="@/assets/delete_red.png" alt="" class="serchre_manage_i"/>
          </div>
        </div>
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
        serchreData:[
          {
            'name':'检索内容01',
            'time':'2020-09-12',
          },
          {
            'name':'检索内容01',
            'time':'2020-09-12',
          },
          {
            'name':'检索内容01',
            'time':'2020-09-12',
          },
          {
            'name':'检索内容01',
            'time':'2020-09-12',
          },
          {
            'name':'检索内容01',
            'time':'2020-09-12',
          },
        ]
      };
    },
    methods: {
      
    }
  }
</script>
<style lang="scss">
/* reset element-ui css */
.serchre_box{
  .serchre_input .el-input__inner{
    width: 434px;
    height: 42px;
    color: #000;
    background: #F7F7F3;
    border-radius: 21px;
    border: 1px solid #C5C5C5;
  }
}


</style>
<style lang="scss">
.serchre_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.serchre_box_left{
  width: 207px;
  height: auto;
  background: red;
}
.serchre_box_right{
  width: auto;
  margin-left: 30px;
}
.serchre_box_t{
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
.serchre_left{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.serchre_left_n{
  font-size: 24px;
  line-height: 35px;
}
.serchre_totle{
  margin-left: 34px;
  font-size: 12px;
  font-weight: 400;
  color: #9B9B9B;
}
.serchre_right{
  display: flex;
  align-items: center;
}
.serchre_input{
  margin-right: 36px;
  position: relative;
}
.serchre_input_i{
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.serchre_manage{
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
}
.serchre_manage_i{
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.serchre_mine{
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.serchre_mine_box_max{
  border-right: 2px dashed #979797;
}
.serchre_mine_box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  border-bottom: 1px solid #979797;
  margin: 10px;
}
.serchre_mine_box_t{
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  line-height: 22px;
  margin: 0 0 7px 10px;
}
.serchre_mine_box_t_s{
  font-size: 12px;
  color: #363636;
}
</style>