<template>
  <div class="search_box">
    <div class="search_box_t">
      <div class="serchre_left">
        <div class="serchre_left_n">检索记录</div>
        <div class="serchre_totle">共{{ searchData.total }}条</div>
      </div>
    </div>
    <div class="serchre_mine">
      <div
        class="serchre_mine_box_max"
        v-for="(item, index) in searchData.rows"
        :key="index"
      >
        <div class="serchre_mine_box">
          <div class="serchre_mine_box_t">
            <div>{{ item.searchContent }}</div>
            <div class="serchre_mine_box_t_s">
              检索时间：{{ item.createTime }}
            </div>
          </div>
          <img
            @click="del(item.id)"
            src="@/assets/delete_red.png"
            alt=""
            class="serchre_manage_i"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchHistory, deleteSearchHistory } from '@/api/search'

export default {
  components: {
  },
  data() {
    return {
      input: '',
      searchData: []
    };
  },
  async created() {
    localStorage.setItem("leftBarIndex", 2)
    const result = await searchHistory({
      pageNum: 1,
      pageSize: 10
    })

    this.searchData = result
  },
  methods: {
    del(_id) {
      this.$confirm('确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteSearchHistory({
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
.search_box {
  width: 100%;
  padding: 0 30px;
  height: 100vh;
  overflow: scroll;
  background: rgba(237, 239, 243, 1);
  .search_box_t {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    padding: 40px 0 38px;
    border-bottom: 1px dashed #979797;
    display: flex;
    justify-content: space-between;
  }
  .serchre_left {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
  .serchre_left_n {
    font-size: 24px;
    line-height: 35px;
  }
  .serchre_totle {
    margin-left: 34px;
    font-size: 12px;
    font-weight: 400;
    color: #9b9b9b;
  }
  .serchre_right {
    display: flex;
    align-items: center;
  }
  .serchre_input {
    margin-right: 36px;
    position: relative;
  }
  .serchre_input_i {
    width: 19px;
    height: 19px;
    position: absolute;
    right: 30px;
    top: 10px;
  }
  .serchre_manage {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
  }
  .serchre_manage_i {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  .serchre_mine {
    margin: 22px 70px 80px 0;
    display: flex;
    flex-wrap: wrap;
  }
  .serchre_mine_box_max {
    border-right: 2px dashed #979797;
  }
  .serchre_mine_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
    border-bottom: 1px solid #979797;
    margin: 10px;
  }
  .serchre_mine_box_t {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    line-height: 22px;
    margin: 0 0 7px 10px;
  }
  .serchre_mine_box_t_s {
    font-size: 12px;
    color: #363636;
  }
}
</style>