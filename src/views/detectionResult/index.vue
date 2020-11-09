<template>
  <div class="detection_box">
    <!-- <div class="detection_box_t">
      <div class="detection_left">
        <div>搜索 ”诗国 “</div>
        <div class="detection_totle">
          共有
          <span class="detection_num">{{ detectionData.total }}</span>
          条记录库
        </div>
      </div>
      <div class="detection_right">
        <div class="detection_sort_box">
          <div>出版时间</div>
          <img src="@/assets/second/sort_down.png" class="sort_box" />
        </div>
        <img src="@/assets/second/list_red.png" class="sort_list" />
        <img src="@/assets/second/window.png" class="sort_window" />
      </div>
    </div> -->
    <div class="detection_top">
      <div style="display: flex; align-items: center">
        <div class="tab">
          <span
            v-for="item in tabArr"
            :key="item.id"
            @click="tab(item.id)"
            :class="[{ active: item.checked }]"
          >
            {{ item.text }}
            <i></i>
          </span>
        </div>
        <p>
          检索 <b>书名-史记与文章内容 - 书</b> 共有
          <span>{{ detectionData.total }}</span>
          条记录
        </p>
      </div>
      <p class="back">返回高级检索</p>
    </div>
    <div v-loading="loading">
      <div v-if="tabArr[0].checked" class="detection_mine">
        <div
          class="detection_mine_OneBox"
          v-for="(item, index) in detectionData.rows"
          :key="index"
        >
          <h1>{{ item.menuName }}</h1>
          <p>
            <span>来源</span>：{{ item.menuName }} >
            {{ item.menuFullName }}
          </p>
          <p>
            <span>书目</span>：{{ item.bookName }} /
            {{ item.mainResponsibility }}/ {{ item.publisher }} /{{
              item.publishDate
            }}
            /
            {{ item.siClassification }}
          </p>
          <p>{{ item.fullText }}</p>
          <span class="big02">&#x28ef6;</span>
          <p><span>摘要</span>：<b v-html="item.fullText"></b></p>
        </div>
      </div>
      <div v-if="tabArr[1].checked" class="detection_mine">
        <div
          class="detection_mine_box"
          v-for="(item, index) in detectionData.rows"
          :key="index"
        >
          <img :src="item.coverUrl" class="detection_mine_box_i" />
          <div class="detection_mine_right">
            <div class="detection_mine_right_t">{{ item.bookName }}</div>
            <div class="detection_mine_cent">
              <div class="detection_mine_cent_l">
                <div>作者：{{ item.mainResponsibility }} 编</div>
              </div>
              <img
                src="../../assets/second/more.png"
                alt=""
                class="detection_mine_cent_i"
              />
            </div>
            <div class="detection_mine_cent_btm">{{ item.bookDesc }}</div>
          </div>
          <img src="../../assets/second/bookmark-line.png" class="bookmark" />
        </div>
      </div>

      <div class="resour_mine_page" v-if="detectionData.total">
        <el-pagination
          layout="prev, pager, next"
          :total="detectionData.total * 1"
          @current-change="page"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'
import { searchAllList, searchAllBook } from '@/api/search'
import { mapGetters } from "vuex";

export default {
  components: {
    HeadIndex
  },
  data() {
    return {
      detectionData: [],
      tabArr: [
        {
          id: 1,
          text: '全文结果',
          checked: 1
        },
        {
          id: 2,
          text: '图书结果',
          checked: 0
        }
      ],
      loading: false,
      filterArr: [
        {
          id: 'associatedWord',
          text: '关联字检索'
        },
        {
          id: 'synonymWord',
          text: '同义词关联'
        },
        {
          id: 'ignoreWord',
          text: '忽略一个字'
        },
        {
          id: 'ignorePoint',
          text: '忽略标点'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["searchData"])
  },
  async created() {
    this.tab(1, 1)
  },
  methods: {
    // 全文搜索或图书搜索
    async tab(id, page) {
      this.loading = true

      this.tabArr.map(item => {
        if (item.id == id) {
          item.checked = 1
        } else {
          item.checked = 0
        }
      })

      let params = {
        pageNum: page,
        pageSize: 10,
        searchList: this.searchData.list,
        associatedWord: 'N',
        synonymWord: 'N',
        ignoreWord: 'N',
        ignorePoint: 'N'
      }

      this.searchData.filter.map(item => {
        this.filterArr.map(itm => {
          if (item == itm.text) {
            params[itm.id] = 'Y'
          }
        })
      })

      if (id == 2) {
        const res = await searchAllBook(params)

        this.detectionData = res
      } else {
        const res = await searchAllList(params)

        this.detectionData = res
      }

      this.loading = false
    },
    page(e) {
      if (this.tabArr[0].checked) {
        this.tab(1, e)
      } else {
        this.tab(2, e)
      }
    },
    handledetection(index) {
      if (index == 0) {
        this.$router.push({
          path: '/changePasswordTwo'
        })
      }
    }
  }
}
</script>
<style lang="scss" scope>
.detection_top {
  display: flex;
  padding: 40px 0 26px;
  margin-bottom: 18px;
  justify-content: space-between;
  border-bottom: 1px dashed #979797;
  .tab {
    margin-right: 40px;
    cursor: pointer;
    display: flex;
    span {
      padding-bottom: 12px;
      margin-right: 10px;
      font-size: 24px;
    }
    .active {
      i {
        width: 15px;
        height: 5px;
        background: #d0021b;
        border-radius: 3px;
        display: block;
        margin: 0 auto;
      }
    }
  }
  p {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #9b9b9b;
    b {
      color: #000000;
      padding: 0 4px;
    }
    span {
      color: #d0021b;
      padding: 0 4px;
    }
  }
  .back {
    width: 117px;
    height: 30px;
    background: #d0021b;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
  }
}
.resour_mine_page {
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
}
.detection_box {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 0 30px;
  background: rgba(237, 239, 243, 1);
}
.detection_box_t {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 104px 0 17px;
  border-bottom: 1px dashed #979797;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.detection_left {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
}
.detection_totle {
  margin-left: 26px;
}
.detection_num {
  color: #d0021b;
}
.detection_right {
  display: flex;
  margin-right: 220px;
}
.detection_sort_box {
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
.detection_mine_OneBox {
  max-height: 187px;
  background: #fff;
  margin: 0 auto 10px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 12px 17px 15px 20px;
}
.detection_mine_OneBox h1 {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #363636;
  margin-bottom: 17px;
}

.detection_mine_OneBox p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
  color: #363636;
  margin-bottom: 13px;
  span {
    color: #9b9b9b;
  }
}
.detection_mine_box {
  height: 226px;
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
  width: 16px;
  height: 21px;
  position: absolute;
  right: 20px;
  top: -2px;
}
</style>