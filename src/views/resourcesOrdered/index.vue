<template>
  <div class="resour_box">
    <div class="resour_box_right">
      <div class="resour_box_t">已订阅资源</div>
      <div class="resour_mine">
        <div class="resour_mine_box">
          <div class="resour_right">
            <div class="resour_input">
              <el-select v-model="value" placeholder="分类">
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
            :class="['mine_taboxs_btn', index == orgId ? 'btn_red' : '']"
            v-for="(item, index) in typeList"
            @click="changeType(index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="resour_mine_table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              prop="bookName"
              label="书名"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="database"
              label="数据库"
              width="180"
            ></el-table-column>
            <el-table-column prop="charge" label="主要责任者"></el-table-column>
            <el-table-column prop="resourceType" label="分类">
            </el-table-column>
            <el-table-column prop="publishland" label="出版社">
            </el-table-column>
            <el-table-column prop="publishYear" label="出版时间">
            </el-table-column>
          </el-table>
        </div>
        <div class="resour_mine_page">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            @current-chang="page"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { recourseList } from "@/api/index"
import { pagList } from '@/api/index'
export default {
  components: {
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
      typeList: [
        { name: '方志编', id: 0 },
        { name: '史料编', id: 1 },
        { name: '文献编', id: 2 },
        { name: '档案编', id: 3 },
      ],
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      orgId: 0,
    };
  },
  async created() {
    this.getList(1);
  },
  methods: {
    async getList(page) {
      // 最新上架
      const res = await pagList({
        orgId: this.orgId
      })
      console.log(333, res)
      this.tableData = res.rows;
      this.total = res.total;
    },
    changeType(index) {
      this.orgId = index;
      this.getList(1);
    },
    // 分页
    page(e) {
      this.getList(e)
    }
  }
}
</script>
<style lang="scss">
/* reset element-ui css */
.resour_box {
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
.resour_box {
  width: 100%;
  height: auto;
  display: flex;
  background: rgba(237, 239, 243, 1);
  .resour_mine_page {
    display: inline-block;
    background-color: #fff;
    float: right;
    margin-right: 30px;
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
    width: 80px;
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