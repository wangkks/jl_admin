<template>
  <div class="resour_box">
    <div class="resour_box_left"></div>
    <div class="resour_box_right">
      <div class="resour_box_t">已订阅资源</div>
      <div class="resour_mine">
        <div class="resour_mine_box">
          <div class="resour_right">
            <div class="resour_input">
              <el-select v-model="value" placeholder="机构名称">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="resour_right">
            <div class="resour_input">
              <el-input v-model="input" placeholder="书名名称"></el-input>
            </div>
          </div>
           <div class="resour_right">
            <div class="resour_input">
              <el-input v-model="input" placeholder="主要责任者"></el-input>
              <img src="@/assets/icon_search.png" alt="" class="resour_input_i"/>
            </div>
          </div>
          <div class="resour_reset">重置</div>
        </div>
        <div class="resour_mine_taboxs">
          <div class="mine_taboxs_btn btn_red">史料编</div>
          <div class="mine_taboxs_btn">史料编</div>
          <div class="mine_taboxs_btn">文献编</div>
          <div class="mine_taboxs_btn">档案编</div>
        </div>
        <div class="resour_mine_table">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="书名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="database"
              label="数据库"
              width="180">
            </el-table-column>
            <el-table-column
              prop="charge"
              label="主要责任者">
            </el-table-column>
             <el-table-column
              prop="class"
              label="分类">
            </el-table-column>
             <el-table-column
              prop="publish"
              label="出版社">
            </el-table-column>
             <el-table-column
              prop="time"
              label="出版时间">
            </el-table-column>
          </el-table>
        </div>
        <div class="resour_mine_page">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
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
         options: [{
          value: '选项1',
          label: '机构1'
        }, {
          value: '选项2',
          label: '机构2'
        }],
        value: '',
        tableData: [{
          name: '诗国南京',
          database: '史料编',
          charge: '（清）马士图 ',
          class:'图书',
          publish:'南京出版社',
          time:'2020'
        },
        {
          name: '诗国南京',
          database: '史料编',
          charge: '（清）马士图 ',
          class:'图书',
          publish:'南京出版社',
          time:'2020'
        },
        {
          name: '诗国南京',
          database: '史料编',
          charge: '（清）马士图 ',
          class:'图书',
          publish:'南京出版社',
          time:'2020'
        },
        {
          name: '诗国南京',
          database: '史料编',
          charge: '（清）马士图 ',
          class:'图书',
          publish:'南京出版社',
          time:'2020'
        },]
      };
    },
    methods: {
    }
  }
</script>
<style lang="scss">
/* reset element-ui css */
.resour_box{
  .resour_input .el-input__inner{
    width: 260px;
    height: 34px;
    color: #000;
    background: #fff;
    border-radius: 21px;
    border: 1px solid #C5C5C5;
  }
  .el-input__icon{
    line-height: 34px;
  }
  .el-select .el-input .el-select__caret{
    color: #000;
  }
  .el-table th{
    background: #E2CFCF;
  }
  .el-table td, .el-table th{
    text-align: center;
    color: #000;
  }
  .el-table td{
    border-bottom: 1px dashed #979797;
  }
  .el-pagination{
    text-align: center;
  }
}


</style>
<style lang="scss">
.resour_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.resour_box_left{
  width: 207px;
  height: auto;
  background: red;
}
.resour_box_right{
  width: auto;
  margin-left: 30px;
}
.resour_box_t{
  width: 1100px;
  font-weight: 400;
  color: #000000;
  font-size: 24px;
  line-height: 35px;
  padding: 40px 0 38px;
  border-bottom: 1px dashed #979797;
  display: flex;
}
.resour_mine{
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.resour_mine_box{
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.resour_right{
  display: flex;
  align-items: center;
}
.resour_input{
  margin-right: 36px;
  position: relative;
}
.resour_input_i{
  width: 19px;
  height: 19px;
  position: absolute;
  right: 24px;
  top: 8px;
}
.resour_reset{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
}
.resour_mine_taboxs{
  display: flex;
  align-items: center;
  margin-bottom: 27px;
}
.mine_taboxs_btn{
  background: #edeff3;
  border: 1px solid #D0021B;
  font-size: 12px;
  font-weight: 400;
  color: #000;
  padding: 8px 20px;
  width: 80px;
  margin-right: 10px;
}
.btn_red{
  color: #fff;
  background: #D0021B;
  border: 1px solid #D0021B;
}
.resour_mine_table{
  margin-bottom: 100px;
}
</style>