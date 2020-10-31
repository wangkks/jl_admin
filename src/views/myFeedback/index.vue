<template>
  <div class="feed_box">
    <div class="feed_box_right">
      <div class="feed_box_t">
        <div class="feed_left">
          <div class="feed_left_n">我的反馈</div>
        </div>
        <div class="feed_right">
          <div
            :class="['feed_right_title', { redcolr: item.checked }]"
            v-for="item in feedTab"
            :key="item.id"
            @click="tab(item.id)"
          >
            {{ item.content }}（{{ item.num }})
          </div>
        </div>
      </div>
      <div class="feed_mine">
        <div
          class="feed_mine_minebox"
          v-for="(item, index) in feedData.rows"
          :key="index"
        >
          <div class="feed_mine_box">
            <div class="feed_mine_b_topbox">
              <div class="feed_mine_b_top" v-if="item.handleStatus == 1">
                <div class="feed_mine_b_top_l">反馈内容</div>
                <div class="feed_mine_b_top_r">
                  <img
                    src="@/assets/delete_red.png"
                    alt=""
                    class="top_r_delete"
                  />
                </div>
              </div>
              <div class="feed_centent_b_top" v-if="item.handleStatus == 0">
                <div>待回复</div>
                <div class="feed_centent_b_top_l">反馈内容</div>
              </div>
              <div class="feed_mine_tion">
                <div class="feed_mine_tion_s">{{ item.recContent }}</div>
              </div>
              <div class="feed_mine_b_btmbox">
                <div>反馈时间：{{ item.createTime }}</div>
                <div>来源：{{ item.bookName }} / {{ item.bookMenuName }}</div>
              </div>
            </div>
            <div v-if="item.handleStatus == 1">
              <div class="feed_mine_tion">
                <div class="feed_mine_tion_t tionred">回复</div>
                <div class="feed_mine_tion_s notecolor">
                  {{ item.feedbackContent }}
                </div>
              </div>
              <div class="feed_mine_b_btmbox">
                <div>回复时间：{{ item.handleTime }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="resour_mine_page">
        <el-pagination
          layout="prev, pager, next"
          :total="feedData.total"
          @current-chang="page"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { feedbackCount, feedbackList } from "@/api/feedback"

export default {
  components: {
  },
  data() {
    return {
      feedTab: [
        {
          id: 1,
          content: '已回复',
          num: 0,
          checked: 1
        },
        {
          id: 0,
          content: '待回复',
          num: 0,
          checked: 0
        }
      ],
      feedData: [],
      status: 1
    };
  },
  async created() {
    const res1 = await feedbackCount({})

    this.feedTab[0].num = res1.data.doneCount
    this.feedTab[1].num = res1.data.notCount

    this.getList(1)

  },
  methods: {
    async getList(page) {
      const res = await feedbackList({
        pageNum: page,
        pageSize: 10,
        handleStatus: this.status
      })

      this.feedData = res
    },
    tab(id) {
      this.status = id
      this.feedTab.map(item => {
        if (item.id == id) {
          item.checked = 1
        } else {
          item.checked = 0
        }
      })

      this.getList(1)
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
.feed_box {
  .feed_input .el-input__inner {
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
<style lang="scss" scope>
.feed_box {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  background: rgba(237, 239, 243, 1);
  .resour_mine_page {
    display: inline-block;
    background-color: #fff;
    float: right;
    margin-right: 30px;
  }
  .feed_box_right {
    width: 100%;
    margin-left: 30px;
  }
  .feed_box_t {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    padding: 40px 0 38px;
    border-bottom: 1px dashed #979797;
    display: flex;
    justify-content: space-between;
  }
  .feed_left {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
  .feed_left_n {
    font-size: 24px;
    line-height: 35px;
  }
  .feed_right {
    display: flex;
    align-items: center;
  }
  .feed_right_title {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 30px;
    cursor: pointer;
  }
  .redcolr {
    color: #d0021b;
  }
  .greycolr {
    color: #000000;
  }
  .feed_input {
    margin-right: 36px;
    position: relative;
  }
  .feed_input_i {
    width: 19px;
    height: 19px;
    position: absolute;
    right: 30px;
    top: 10px;
  }
  .feed_mine {
    margin: 22px 70px 0 0;
    display: flex;
    flex-wrap: wrap;
  }
  .feed_mine_minebox {
    display: flex;
    margin-left: 10px;
  }
  .feed_mine_box {
    width: 520px;
    height: auto;
    background: #fff;
    margin: 0 0 20px 5px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid #e6e6e6;
    padding: 8px 12px 12px;
    display: flex;
    flex-direction: column;
  }
  .feed_mine_b_topbox {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #979797;
    padding-bottom: 10px;
  }
  .feed_mine_b_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feed_mine_b_top_l {
    width: 72px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    background: #d0021b;
  }
  .top_r_delete {
    width: 15px;
    height: 15px;
    margin: 0 10px 0 14px;
  }
  .feed_mine_tion_t {
    width: 45px;
    height: 24px;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    line-height: 24px;
    background: #d0021b;
  }
  .feed_mine_tion_s {
    font-size: 14px;
    font-weight: 400;
    color: #9b9b9b;
    margin-top: 10px;
  }
  .notecolor {
    color: #000;
  }
  .tionred {
    margin-top: 14px;
    background: #99bfff;
  }
  .feed_mine_b_btmbox {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;
    color: #999999;
  }

  .feed_centent_b_top {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #000000;
  }
  .feed_centent_b_top_l {
    width: 72px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    background: #d0021b;
    margin-left: 16px;
  }
  .feed_centent_tion_s {
    font-size: 14px;
    font-weight: 400;
    color: #9b9b9b;
    margin-top: 10px;
  }
  .feed_centent_b_btmbox {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;
    color: #999999;
  }
}
</style>