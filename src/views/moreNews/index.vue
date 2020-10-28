<template>
  <div class="wrapper">
    <HeadIndex></HeadIndex>
    <div class="news">
      <!-- <img src="@/assets/news_bg.png" alt="" class="news_bg" /> -->
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
            <li v-for="(item, index) in newsDateList.rows" :key="index">
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
          :total="50">
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
      searchContent: '',
      wordsContentList: [],
      mybookData: [
        {
          img: require("../../assets/second/bitmap_bg.png"),
          name: "诗国南京",
          author: "陈勇",
          collection: "12",
          details:
            "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
          bookmark: require("../../assets/second/bookmark-line.png"),
        }
      ],
      newsDateList: [],
    }
  },
  computed: {

  },
  async created() {
    // 四个库简介
    const result = await tProDatabase({})
    this.wordsContentList = result

    // 最新上架
    const result1 = await pagList({})
    this.mybookData = result1

    // 新闻资讯
    const res = await newsList({
      pageNum: 1,
      pageSize: 4
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

    // 新闻详情
    newsDetail({
      id: res.rows[0].id
    })
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
    background-repeat:no-repeat;
    background-size: 100%;
    padding-top: 150px;

    .news_bg {
      width: 100%;
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
        &:first-child{
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
    .resour_mine_page{
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
