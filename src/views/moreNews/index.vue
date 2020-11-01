<template>
  <div class="wrapper">
    <HeadIndex></HeadIndex>
    <div class="news">
      <h3 class="new-title"><span>新闻动态</span></h3>
      <div class="news-box">
        <div class="news-box-l">
          <ul>
            <li v-for="(item, index) in newsDateList.rows" :key="index">
              <span>{{ item.day }}</span>
              <span>{{ item.month }} {{ item.year }}</span>
            </li>
          </ul>
        </div>
        <div class="news-box-r">
          <ul>
            <li
              v-for="(item, index) in newsDateList.rows"
              :key="index"
              @click="goDetail(item.id)"
            >
              <span>{{ item.newsTitle }}</span>
              <span v-html="item.newsContent"></span>
              <img :src="item.iconUrl" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div class="resour_mine_page">
        <el-pagination
          layout="prev, pager, next"
          :total="newsDateList.total"
          @current-change="page"
        >
        </el-pagination>
      </div>
    </div>
    <div class="footer">
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
      <img src="@/assets/icon_banner_b.png" alt="" class="banner-img" />
      <span
        >京公网安备 11010102004165号 京ICP备05067311号-1 © 2001- 现在
        南京出版社</span
      >
    </div>
  </div>
</template>

<script>
import HeadIndex from '@/components/head/index.vue'
import { tProDatabase, pagList, newsList, newsDetail } from '@/api/index'

export default {
  name: "Index",
  components: {
    HeadIndex
  },
  data() {
    return {
      newsDateList: [],
    }
  },
  computed: {

  },
  created() {

    this.getList(1)
    // // 新闻详情
    // newsDetail({
    //   id: res.rows[0].id
    // })
  },
  methods: {
    // 新闻资讯
    async getList(page) {
      const res = await newsList({
        pageNum: page,
        pageSize: 10
      })

      res.rows.map(item => {
        if (item.publishTime) {
          item.date = item.publishTime.split(' ')[0]
          item.date = item.date.split('-')
          item.year = item.date[0]
          item.month = item.date[1]
          item.day = item.date[2]
        }
      })

      this.newsDateList = res
    },
    // 翻页
    page(e) {
      this.getList(e)
    },
    goDetail(id) {
      this.$router.push(`newsDetail/${id}`)
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #f5f5f4;
  .news {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 84px;
    background-image: url('../../assets/news_bg.png');
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 10px;

    .new-title {
      width: 27%;
      span {
        width: 225px;
        height: 50px;
        font-size: 24px;
        color: #d0021b;
        border-bottom: 1px solid #d0021b;
        display: block;
        margin: 0 0 30px auto;
      }
    }
    .news-box {
      width: 84%;
      background-color: #fff;
      display: flex;
    }
    .news-box-l {
      width: 33%;
      border-right: 1px solid #cbcbcb;
      h3 {
        width: 225px;
        height: 120px;
        line-height: 120px;
        color: #d0021b;
        font-size: 24px;
        padding-left: 12px;
        margin: 0 0 0 auto;
      }
    }
    ul {
      width: 225px;
      margin: 0 0 0 auto;
      padding: 0;
      li {
        height: 171px;
        border-top: 2px solid #d0021b;
        padding-left: 12px;
        color: #363636;
        margin-right: 9px;
        span {
          display: block;
          font-size: 14px;
          &:first-child {
            margin: 50px 0 12px;
            font-size: 24px;
          }
        }
        &:first-child {
          border-top: 2px solid #fff;
        }
      }
    }
    .news-box-r {
      flex: 1;
      .news-more {
        display: flex;
        justify-content: flex-end;
        height: 120px;
        cursor: pointer;
        span {
          width: 100px;
          height: 33px;
          text-align: center;
          line-height: 33px;
          font-size: 14px;
          color: #363636;
          border: 1px solid #979797;
          margin: 43px 35px 0 0;
        }
      }
      ul {
        width: 500px;
        margin: 0;
        margin-left: 9px;
        li {
          border-top: 1px solid #cbcbcb;
          padding-right: 20px;
          position: relative;
          span {
            display: block;
            font-size: 14px;
            line-height: 20px;
            &:first-child {
              margin: 50px 0 12px;
              font-size: 16px;
            }
            &:nth-of-type(2) {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }
          img {
            width: 225px;
            height: 140px;
            position: absolute;
            top: 2px;
            right: -270px;
          }
        }
      }
    }
    .resour_mine_page {
      background-color: #fff;
      padding: 80px 0;
      text-align: center;
    }
  }
  .footer {
    width: 100%;
    height: 198px;
    background-color: rgba(221, 162, 129, 0.15);
    text-align: center;
    .logo {
      img {
        width: 141px;
        height: 26px;
        margin: 47px auto 21px;
      }
    }
    .banner-img {
      margin: 0 auto 17px;
      width: 49px;
      height: 42px;
      display: block;
    }
    span {
      font-size: 14px;
      color: #4a4a4a;
    }
  }
}
</style>
