<template>
  <div class="mynote_box">
    <div class="mynote_box_right">
      <div class="mynote_box_t">
        <div class="mynote_left">
          <div class="mynote_left_n">我的笔记</div>
          <div class="mynote_totle">共{{ mynoteData.total }}条</div>
        </div>
        <div class="mynote_right">
          <div class="mynote_input">
            <el-input v-model="input" placeholder="搜索"></el-input>
            <img src="@/assets/icon_search.png" alt="" class="mynote_input_i" />
          </div>
          <div class="mynote_manage">
            <img src="@/assets/manage.png" alt="" class="mynote_manage_i" />
            <div v-show="showManage" @click="manage()">批量管理</div>
            <div v-show="showDelete">
              <span class="delete_red">删除</span>
              完成
            </div>
          </div>
        </div>
      </div>
      <div class="mynote_mine">
        <div
          class="mynote_mine_minebox"
          v-for="(item, index) in mynoteData.rows"
          :key="index"
        >
          <div v-show="showChecked">
            <el-checkbox v-model="checked"></el-checkbox>
          </div>
          <div class="mynote_mine_box">
            <div class="mynote_mine_b_topbox">
              <div class="mynote_mine_b_top">
                <div class="mynote_mine_b_top_l">{{ item.bookName }}</div>
                <div class="mynote_mine_b_top_r">
                  <img
                    @click="editShow(index, item)"
                    src="@/assets/edit.png"
                    alt=""
                    class="top_r_edit"
                  />
                  <img
                    @click="del(item.id)"
                    src="@/assets/delete_red.png"
                    alt=""
                    class="top_r_delete"
                  />
                </div>
              </div>
              <div class="mynote_mine_tion">
                <div class="mynote_mine_tion_t">引文</div>
                <div class="mynote_mine_tion_s">{{ item.menuId }}</div>
              </div>
              <div class="mynote_mine_tion">
                <div class="mynote_mine_tion_t tionred">笔记</div>
                <!-- :readonly="item.eidt ? 'readonly' : ''" -->
                <textarea class="mynote_mine_tion_s">{{
                  item.noteContent
                }}</textarea>
                <span @click="edit(item)">确定修改</span>
              </div>
            </div>
            <div class="mynote_mine_b_btmbox">
              <div class="btmbox_l">时间：{{ item.createTime }}</div>
              <div class="btmbox_r">来源：{{ item.source }}</div>
            </div>
          </div>
        </div>
        <div v-show="showBtn" class="mynote_delebox">
          <div class="mynote_delebox_top">
            <div class="mynote_delebox_text">删除笔记</div>
            <img src="@/assets/delete_red.png" alt="" class="delebox_text_i" />
            <div>确认删除本条笔记吗？</div>
            <i class="el-icon-circle-close close"></i>
          </div>
          <div class="mynote_delebox_btm">
            <div class="delebox_btm btml">确认</div>
            <div class="delebox_btm rtml">取消</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { readNotesList, deleteReadNotes, readReadNotes } from '@/api/note'

export default {
  components: {
  },
  data() {
    return {
      input: '',
      showManage: true,
      showDelete: false,
      showChecked: false,
      showBtn: false,
      checked: '',
      mynoteData: []
    };
  },
  async created() {
    const result1 = await readNotesList({
      pageNum: 1,
      pageSize: 10
    })

    this.mynoteData = result1
  },
  methods: {
    manage() {
      this.showDelete = true
      this.showChecked = true
      this.showBtn = true
      this.showManage = false
    },
    editShow(index, data) {
      console.log('data.edit', data.edit)
      this.$set(this.mynoteData.rows, index, Object.assign({}, data, { edit: data.edit ? false : true }))
    },
    // 编辑
    edit(data) {
      readReadNotes({
        id: data.id,
        noteContent: data.noteContent + '111'
      })
    },
    // 删除
    del(_id) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteReadNotes({
          id: _id
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>
<style lang="scss">
/* reset element-ui css */
.mynote_box {
  .mynote_input .el-input__inner {
    width: 434px;
    height: 42px;
    color: #000;
    background: #f7f7f3;
    border-radius: 21px;
    border: 1px solid #c5c5c5;
  }
  .el-checkbox__inner {
    background-color: #edeff3;
    border-color: #000;
    border-radius: 50%;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #d0021b;
    border-color: #d0021b;
    border-radius: 50%;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #fff;
  }
  .el-checkbox.is-bordered.is-checked {
    border-color: #d0021b;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #000;
  }
}
</style>
<style lang="scss">
.mynote_box {
  width: 100%;
  height: auto;
  display: flex;
  background: rgba(237, 239, 243, 1);
}
.mynote_box_right {
  width: auto;
  margin-left: 30px;
}
.mynote_box_t {
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
.mynote_left {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.mynote_left_n {
  font-size: 24px;
  line-height: 35px;
}
.mynote_totle {
  margin-left: 34px;
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
}
.mynote_right {
  display: flex;
  align-items: center;
}
.mynote_input {
  margin-right: 36px;
  position: relative;
}
.mynote_input_i {
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.mynote_manage {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
}
.delete_red {
  font-size: 14px;
  font-weight: 400;
  color: #d0021b;
}
.mynote_manage_i {
  width: 21px;
  height: 17px;
  margin-right: 20px;
}
.mynote_mine {
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.mynote_mine_minebox {
  display: flex;
  margin-left: 10px;
}
.mynote_mine_box {
  width: 520px;
  height: 249px;
  background: #fff;
  margin: 0 0 20px 5px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #e6e6e6;
  padding: 8px 12px 12px;
  display: flex;
  flex-direction: column;
}
.mynote_mine_b_topbox {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #979797;
  padding-bottom: 22px;
}
.mynote_mine_b_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_r_edit,
.top_r_delete {
  width: 15px;
  height: 15px;
}
.top_r_delete {
  margin: 0 10px 0 14px;
}
.mynote_mine_tion {
  margin-top: 14px;
}
.mynote_mine_tion_t {
  width: 45px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
  background: #d0021b;
}
.mynote_mine_tion_s {
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-top: 10px;
}
.tionred {
  background: #99bfff;
}
.mynote_mine_b_btmbox {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  margin-top: 20px;
}
.btmbox_l {
  color: #363636;
}
.btmbox_r {
  color: #999999;
}
.mynote_delebox {
  width: 368px;
  height: 249px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #e6e6e6;
  margin-left: 15px;
}
.mynote_delebox_top {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  position: relative;
}
.mynote_delebox_text {
  width: 81px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #d0021b;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin: 27px auto 40px;
}
.delebox_text_i {
  width: 15px;
  height: 15px;
  margin: 0 auto 12px;
}
.close {
  position: absolute;
  right: 18px;
  top: 10px;
  color: #9b9b9b;
}
.mynote_delebox_btm {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #979797;
  margin-top: 56px;
  padding-top: 10px;
}
.delebox_btm {
  width: 183px;
  height: 38px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 38px;
  cursor: pointer;
}
.btml {
  color: #d0021b;
  border-right: 2px solid #979797;
}
.rtml {
  color: #363636;
}
</style>