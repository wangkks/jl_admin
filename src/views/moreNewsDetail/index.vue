<template>
  <div class="wrapper">
    <HeadIndex></HeadIndex>
    <div class="news">
      <h3 class="new-title"><span>新闻动态</span></h3>
      <div
        class="news-box"
        v-if="newsDateList.rows && newsDateList.rows.length > 0"
      >
        <div class="news-box-l">
          <ul>
            <li>
              <span>{{ newsDateList.rows[0].day }}</span>
              <span
                >{{ newsDateList.rows[0].month }}
                {{ newsDateList.rows[0].year }}</span
              >
            </li>
          </ul>
        </div>
        <div class="news-box-r">
          <ul>
            <li>
              <span class="news-box-r-title">{{
                newsDateList.rows[0].newsTitle
              }}</span>
              <img :src="newsDateList.rows[0].iconUrl" alt="" />
              <span
                >去问问撒打算的阿 dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大去问问撒打算的阿
                dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大去问问撒打算的阿
                dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大去问问撒打算的阿
                dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大去问问撒打算的阿
                dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大去问问撒打算的阿
                dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大去问问撒打算的阿
                dads阿
                dasd哈说古道今啊还是感动阿斯顿噶会及时赶到安德森给大家哈是个大阿水给大家哈公司的哈说古道今哈是个大卡说古道今卡是个大</span
              >
            </li>
          </ul>
        </div>
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
      padding-bottom: 100px;
    }
    .news-box-l {
      width: 33%;
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
        // height: 171px;
        border-bottom: 2px solid #d0021b;
        padding-left: 12px;
        color: #363636;
        margin-right: 9px;
        line-height: 30px;
        span {
          display: block;
          font-size: 14px;
          &:first-child {
            margin: 50px 0 12px;
            font-size: 24px;
          }
        }
      }
    }
    .news-box-r {
      flex: 1;
      ul {
        width: 100%;
        margin: 0;
        margin-left: 9px;
        li {
          padding-right: 20px;
          position: relative;
          border-bottom: none;
          .news-box-r-title {
            border-bottom: 2px solid #cbcbcb;
          }
          span {
            display: block;
            font-size: 14px;
            line-height: 30px;
            padding-bottom: 40px;
            &:first-child {
              margin: 30px 0 12px;
              font-size: 16px;
            }
          }
          img {
            width: 400px;
            height: 249px;
            margin: 22px auto 56px;
            display: block;
          }
        }
      }
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
