<template>
  <div class="mynote_box">
    <div class="mynote_box_t">
      <div class="mynote_left">
        <div class="mynote_left_n">我的笔记</div>
        <div class="mynote_totle">共{{ mynoteData.total }}条</div>
      </div>
    </div>
    <div class="mynote_mine">
      <div
        class="mynote_mine_minebox"
        v-for="(item, index) in mynoteData.rows"
        :key="index"
      >
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
                  @click="del(item.id, index)"
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
              <textarea
                class="mynote_mine_tion_s"
                :readonly="index == editIndex ? true : false"
                v-model="item.noteContent"
              ></textarea>
              <span @click="edit(item)">确定修改</span>
            </div>
          </div>
          <div class="mynote_mine_b_btmbox">
            <div class="btmbox_l">时间：{{ item.createTime }}</div>
            <div class="btmbox_r">
              来源：{{ item.bookName }}/{{ item.menuName }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="resour_mine_page" v-if="mynoteData.total">
      <el-pagination
        layout="prev, pager, next"
        :total="mynoteData.total * 1"
        @current-change="page"
      >
      </el-pagination>
    </div>
    <!-- <Delete /> -->
  </div>
</template>

<script>
import { readNotesList, deleteReadNote, editReadNote, addReadNote } from '@/api/note'
import Delete from '@/components/Delete'

export default {
  components: {
    Delete
  },
  data() {
    return {
      showBtn: true,
      mynoteData: [],
      editIndex: 0,
      pageCurrent: 1
    };
  },
  created() {
    localStorage.setItem("leftBarIndex", 2)
    // const result = await addReadNote({
    //   bookId: '936689ea817b44209e22394b9639a372',
    //   menuId: '111111111',
    //   encodeFontUrl: '1',
    //   noteSrcWord: '22',
    //   noteContent: '笔记笔记笔记家那爱 ii 爱',
    // })
    this.getList(1)
  },
  methods: {
    async getList(page) {
      const result1 = await readNotesList({
        pageNum: page,
        pageSize: 10
      })

      this.mynoteData = result1
    },
    // 翻页
    page(e) {
      this.pageCurrent = e
      this.mynoteData.rows = []
      this.getList(e)
    },
    editShow(index, data) {
      this.editIndex = index
    },
    // 编辑
    edit(data) {
      editReadNote({
        id: data.id,
        noteContent: data.noteContent
      })
    },
    // 删除
    del(_id, index) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteReadNote({
          id: _id
        })

        // 刷新
        this.getList(this.pageCurrent)
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

<style lang="scss" scope>
.mynote_box {
  width: 100%;
  padding: 0 30px;
  height: 100vh;
  overflow: scroll;
  margin-left: 210px;
  background: rgba(237, 239, 243, 1);
  .resour_mine_page {
    display: inline-block;
    background-color: #fff;
    float: right;
    margin-right: 30px;
  }

  .mynote_box_right {
    width: auto;
    margin-left: 30px;
  }
  .mynote_box_t {
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
    margin: 22px 70px 0 0;
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
}
</style>