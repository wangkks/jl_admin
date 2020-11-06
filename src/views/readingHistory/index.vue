<template>
  <div class="reading_box">
    <div class="reading_box_t">
      <div class="reading_left">
        <div class="reading_left_n">阅读历史</div>
      </div>
      <div class="reading_right">
        <div class="reading_sort_box">
          <div>阅读时间</div>
          <img src="@/assets/second/sort_down.png" alt="" class="sort_box" />
        </div>
      </div>
    </div>
    <div class="reading_record">共{{ readingData.total }}条</div>
    <div class="reading_mine">
      <div
        class="reading_mine_box"
        v-for="(item, index) in readingData.rows"
        :key="index"
      >
        <div class="reading_mine_box_img">
          <img :src="item.thumbCoverUrl" alt="" class="reading_mine_box_i" />
        </div>
        <div class="reading_mine_right">
          <div class="reading_mine_right_t">{{ item.bookName }}</div>
          <div class="reading_mine_cent">
            <div>作者：{{ item.mainResponsibility }} 编</div>
          </div>
          <div class="reading_mine_time">
            <div>阅读时间：{{ item.createTime }}</div>
            <img
              src="@/assets/delete_red.png"
              class="reading_mine_time_i"
              @click="del(item.id, index)"
            />
          </div>
        </div>
        <img
          src="../../assets/second/bookmark-red.png"
          alt=""
          class="bookmark"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { readHistoryList, deleteReadHistory } from '@/api/read'
export default {
  components: {
  },
  data() {
    return {
      input: '',
      readingData: [],
      sortType: 'desc'
    };
  },
  async created() {
    localStorage.setItem("leftBarIndex", 2)
    const result1 = await readHistoryList({
      pageNum: 1,
      pageSize: 10,
      orderByColumn: '',
      isAsc: this.sortType
    })

    this.readingData = result1
  },
  methods: {
    sort() {
      this.sortType = this.sortType == 'desc' ? 'asc' : 'desc'
    },
    del(_id, index) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await deleteReadHistory({
          id: _id
        })

        this.readingData.rows.splice(index, 1)
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
.reading_box {
  .reading_input .el-input__inner {
    width: 434px;
    height: 42px;
    color: #000;
    background: #f7f7f3;
    border-radius: 21px;
    border: 1px solid #c5c5c5;
  }
}
</style>
<style lang="scss">
.reading_box {
  width: 100%;
  padding: 0 30px;
  height: 100vh;
  overflow: scroll;
  margin-right: 270px;
  background: rgba(237, 239, 243, 1);
}
.reading_box_t {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 40px 0 38px;
  border-bottom: 1px dashed #979797;
  display: flex;
  justify-content: space-between;
}
.reading_left {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.reading_left_n {
  font-size: 24px;
  line-height: 35px;
}
.reading_right {
  display: flex;
  align-items: center;
}
.reading_input {
  margin-right: 67px;
  position: relative;
}
.reading_input_i {
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.reading_sort_box {
  display: flex;
}
.sort_box {
  width: 8px;
  height: 18px;
  margin: 0 28px 0 10px;
}
.reading_manage {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
}
.reading_manage_i {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.reading_record {
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
  margin: 20px 15px 0;
}
.reading_mine {
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.reading_mine_box {
  width: 230px;
  height: 360px;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 0 15px 15px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.reading_mine_box_img {
  text-align: center;
  border-bottom: 1px dashed #979797;
}
.reading_mine_box_i {
  width: 145px;
  height: 199px;
  margin: 30px auto 20px;
}
.reading_mine_right {
  margin-top: 20px;
}
.reading_mine_right_t {
  font-size: 14px;
  font-weight: 500;
  color: #363636;
}
.reading_mine_cent {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: #363636;
  margin-top: 14px;
}
.reading_mine_time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #363636;
  margin-top: 14px;
}
.reading_mine_time_i {
  width: 15px;
  height: 15px;
}
.bookmark {
  width: 16px;
  height: 21px;
  position: absolute;
  left: 10px;
  top: -2px;
}
</style>