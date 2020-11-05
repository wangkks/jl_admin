<template>
  <div class="resour_boxs">
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
                  :value="item.value"
                >
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
              <img
                src="@/assets/icon_search.png"
                alt=""
                class="resour_input_i"
              />
            </div>
          </div>
          <div class="resour_reset">重置</div>
        </div>
        <div class="resour_mine_taboxs">
          <div
            v-for="item in tab"
            :key="item.id"
            :class="['mine_taboxs_btn', { btn_red: item.checked }]"
          >
            {{ item.text }}
          </div>
        </div>
        <div class="resour_mine_table">
          <el-table :data="tableData.rows" style="width: 100%">
            <el-table-column prop="bookName" label="书名" width="180">
            </el-table-column>
            <!-- <el-table-column prop="database" label="数据库" width="180">
            </el-table-column> -->
            <el-table-column prop="mainResponsibility" label="主要责任者">
            </el-table-column>
            <!-- <el-table-column prop="class" label="分类"> </el-table-column> -->
            <!-- <el-table-column prop="publish" label="出版单位"> </el-table-column> -->
            <el-table-column prop="readTime" label="阅读时长">
            </el-table-column>
            <el-table-column prop="readPeoples" label="浏览人数">
            </el-table-column>
            <el-table-column prop="delFlag" label="是否删除">
              <template slot-scope="scope">
                {{ scope.row.scope == 1 ? '已删除' : '正常' }}
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="resour_mine_page">
          <el-pagination
            layout="prev, pager, next"
            :total="tableData.total * 1"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { recourseList } from "@/api/index"
export default {
  components: {
  },
  data() {
    return {
      input: '',
      tab: [
        {
          id: 1,
          text: '最近7天',
          checked: 1
        },
        {
          id: 2,
          text: '最近30天',
          checked: 0
        },
        {
          id: 3,
          text: '最近90天',
          checked: 0
        }
      ],
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
        class: '图书',
        publish: '南京出版社',
        time: '2020'
      }]
    };
  },
  async created() {
    const res = await recourseList({
      pagesize: 10,
      pageNum: 1,
      createTime: new Date()
    })

    this.tableData = res

  },
  methods: {

  }
}
</script>
<style lang="scss">
/* reset element-ui css */
.resour_boxs {
  .resour_input .el-input__inner {
    width: 260px;
    height: 34px;
    color: #000;
    background: #fff;
    border-radius: 21px;
    border: 1px solid #c5c5c5;
  }
  .el-input__icon {
    line-height: 34px;
  }
  .el-select .el-input .el-select__caret {
    color: #000;
  }
  .el-table th {
    background: #e2cfcf;
  }
  .el-table td,
  .el-table th {
    text-align: center;
    color: #000;
  }
  .el-table td {
    border-bottom: 1px dashed #979797;
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
<style lang="scss" scope>
.resour_boxs {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  display: flex;
  background: rgba(237, 239, 243, 1);
  .resour_mine_page {
    display: inline-block;
    background-color: #fff;
    float: right;
    margin-right: 30px;
  }

  .resour_box_left {
    width: 207px;
    height: auto;
    background: red;
  }
  .resour_box_right {
    width: auto;
    margin-left: 30px;
  }
  .resour_box_t {
    width: 1100px;
    font-weight: 400;
    color: #000000;
    font-size: 24px;
    line-height: 35px;
    padding: 40px 0 38px;
    border-bottom: 1px dashed #979797;
    display: flex;
  }
  .resour_mine {
    width: 1100px;
    margin: 22px 70px 80px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .resour_mine_box {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .resour_right {
    display: flex;
    align-items: center;
  }
  .resour_input {
    margin-right: 36px;
    position: relative;
  }
  .resour_input_i {
    width: 19px;
    height: 19px;
    position: absolute;
    right: 24px;
    top: 8px;
  }
  .resour_reset {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
  }
  .resour_mine_taboxs {
    display: flex;
    align-items: center;
    margin-bottom: 27px;
  }
  .mine_taboxs_btn {
    background: #edeff3;
    border: 1px solid #d0021b;
    font-size: 12px;
    font-weight: 400;
    color: #000;
    padding: 8px 20px;
    margin-right: 10px;
  }
  .btn_red {
    color: #fff;
    background: #d0021b;
    border: 1px solid #d0021b;
  }
  .resour_mine_table {
    margin-bottom: 100px;
  }
}
</style>