<template>
  <div class="booklibrary_box">
    <div class="booklibrary_box_t">
      <div class="booklibrary_left">
        <div class="booklibrary_left_n">书籍库</div>
        <div class="booklibrary_totle">
          共有
          <span class="booklibrary_num">{{ total }}</span>
          条记录库
        </div>
      </div>
      <div class="booklibrary_right">
        <div class="booklibrary_input">
          <el-input
            v-model="bookname"
            placeholder="请输入关键字"
            @keyup.enter.native="search()"
          ></el-input>
          <img
            src="@/assets/icon_search.png"
            alt=""
            class="booklibrary_input_i"
            @click="search()"
          />
        </div>
        <div class="booklibrary_sort_box" @click="changeIsAsc">
          <div>出版时间</div>
          <img
            :src="
              isAsc
                ? require('@/assets/second/sort_out.png')
                : require('@/assets/second/sort_down.png')
            "
            alt=""
            class="sort_box"
          />
        </div>
        <img
          :src="
            layoutStyle
              ? require('@/assets/second/list_red.png')
              : require('@/assets/second/list.png')
          "
          alt=""
          class="sort_list"
          @click="changeLayoutStyle"
        />
        <img
          :src="
            layoutStyle
              ? require('@/assets/second/window.png')
              : require('@/assets/second/window_red.png')
          "
          alt=""
          class="sort_window"
          @click="changeLayoutStyle"
        />
      </div>
    </div>
    <div class="detection_mine" v-if="layoutStyle">
      <div
        class="detection_mine_box"
        v-for="(item, index) in detectionList.rows"
        :key="index"
        @click="goBookDetail(item.uniqueId)"
      >
        <img :src="item.coverUrl" class="detection_mine_box_i" />
        <div class="detection_mine_right">
          <div class="detection_mine_right_t">
            {{ item.bookName }}
          </div>
          <div class="detection_mine_cent">
            <div class="detection_mine_cent_l">
              <div>作者：{{ item.mainResponsibility }} 编</div>
            </div>
            <img
              src="@/assets/second/more.png"
              alt=""
              class="detection_mine_cent_i"
            />
          </div>
          <div class="detection_mine_cent_btm">
            {{ item.bookDesc }}
          </div>
        </div>
        <img src="@/assets/second/bookmark-line.png" alt="" class="bookmark" />
      </div>
    </div>
    <div class="library_mine" v-else>
      <div
        class="library_mine_box"
        v-for="(item, index) in detectionList.rows"
        :key="index"
        @click="goBookDetail(item.id)"
      >
        <div class="library_mine_box_img">
          <img :src="item.coverUrl" alt="" class="library_mine_box_i" />
        </div>
        <div class="library_mine_right">
          <div class="library_mine_right_t">{{ item.bookName }}</div>
          <div class="library_mine_cent">
            <div>作者：{{ item.mainResponsibility }} 编</div>
          </div>
        </div>
        <img src="@/assets/second/bookmark-line.png" alt="" class="bookmark" />
      </div>
    </div>
    <div class="resour_mine_page" v-if="detectionList.total">
      <el-pagination
        layout="prev, pager, next"
        :total="detectionList.total"
        @current-change="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { bookLibraryList } from '@/api/bookLibrary'
import { searchBook } from '@/api/search'

export default {
  components: {},
  data() {
    return {
      bookname: "",
      layoutStyle: false,
      isAsc: true,
      total: 0,
      pageSize: 1,
      pageNum: 10,
      detectionList: [],
    };
  },
  async created() {
    this.getList(1);
  },
  methods: {
    async search() {
      if (!this.bookname) {
        this.$message({
          message: '请输入关键字',
          type: "error",
          duration: 1000
        });

        return
      }

      const res = await searchBook({
        pageNum: 1,
        pageSize: 10,
        keyword: this.bookname,
        orderByColumn: '',
        isAsc: ''
      })

      this.detectionList = res;

    },
    async getList(page) {
      let param = {
        pageNum: page,
        pageSize: this.pageNum,
        Bookname: this.bookname,
        isAsc: this.isAsc
      }
      if (this.isAsc) {
        delete param.isAsc
      }
      const res = await bookLibraryList(param);
      this.detectionList = res
    },
    goBookDetail(id) {
      this.$router.push(`/myBook/resourceDetails/${id}`);
    },
    changeLayoutStyle() {
      this.layoutStyle = !this.layoutStyle;
    },
    changeIsAsc() {
      this.isAsc = !this.isAsc;
      this.getList(1);
    },
    // 分页
    page(e) {
      this.getList(e)
    }
  },
};
</script>
<style lang="scss">
/* reset element-ui css */
.booklibrary_box {
  .booklibrary_input .el-input__inner {
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
.booklibrary_box {
  width: 100%;
  padding: 0 30px;
  height: 100vh;
  overflow: scroll;
  background: rgba(237, 239, 243, 1);
}
.booklibrary_box_t {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 40px 0 38px;
  border-bottom: 1px dashed #979797;
  display: flex;
  justify-content: space-between;
}
.booklibrary_left {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.booklibrary_left_n {
  font-size: 24px;
  line-height: 35px;
}
.booklibrary_totle {
  margin-left: 14px;
}
.booklibrary_num {
  color: #d0021b;
}
.booklibrary_right {
  display: flex;
  align-items: center;
}
.booklibrary_input {
  margin-right: 67px;
  position: relative;
}
.booklibrary_input_i {
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.booklibrary_sort_box {
  display: flex;
}
.sort_box {
  width: 8px;
  height: 18px;
  margin: 0 40px 0 10px;
}
.sort_list {
  width: 18px;
  height: 16px;
  margin-right: 25px;
}
.sort_window {
  width: 20px;
  height: 19px;
}
.detection_mine {
  margin: 22px auto;
  .detection_mine_box {
    height: auto;
    background: #fff;
    margin: 0 auto 10px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    padding: 12px 17px 15px 20px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .detection_mine_box_i {
    width: 145px;
    height: 199px;
    margin-right: 44px;
  }
  .detection_mine_right {
    margin-top: 20px;
    flex: 1;
  }
  .detection_mine_right_t {
    font-size: 14px;
    font-weight: 500;
    color: #363636;
  }
  .detection_mine_cent {
    display: flex;
    justify-content: space-between;
  }
  .detection_mine_cent_l {
    display: flex;
    width: 200px;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    color: #363636;
    margin-top: 14px;
  }
  .detection_mine_cent_i {
    width: 100px;
    height: 33px;
  }
  .detection_mine_cent_btm {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    margin-top: 50px;
  }
  .bookmark {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
    top: -2px;
  }
}
.library_mine {
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
  .library_mine_box {
    width: 230px;
    height: 333px;
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
  .library_mine_box_img {
    text-align: center;
    border-bottom: 1px dashed #979797;
  }
  .library_mine_box_i {
    width: 145px;
    height: 199px;
    margin: 30px auto 20px;
  }
  .library_mine_right {
    margin-top: 20px;
  }
  .library_mine_right_t {
    font-size: 14px;
    font-weight: 500;
    color: #363636;
  }
  .library_mine_cent {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    color: #363636;
    margin-top: 14px;
  }
  .bookmark {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    top: -2px;
  }
}
.resour_mine_page {
  display: inline-block;
  background-color: #fff;
  float: right;
  margin-right: 30px;
}
</style>