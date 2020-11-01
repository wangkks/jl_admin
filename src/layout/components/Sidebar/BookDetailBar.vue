<template>
  <div class="book-detail">
    <div class="book-img"><img src="@/assets/second/bitmap_bg.png" alt=""></div>
    <div class="book-title">{{bookDeatil.bookName}}</div>
    <div class="book-join">
      <img src="@/assets/second/bookmark-line.png" alt="">
      <span>加入书架</span>
    </div>
    <div class="book-info">
      <span>作者：{{bookDeatil.mainResponsibility}}</span>
      <span>出版社：{{bookDeatil.publisher}}</span>
      <span>出版时间：{{bookDeatil.publishDate}}</span>
      <span>资源分类：{{bookDeatil.resourceClasses}}</span>
      <span>主题词：{{bookDeatil.subjectWord}}</span>
      <span>版次：{{bookDeatil.revision}}</span>
      <span>丛编：{{bookDeatil.dbName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookDeatil: {},
    };
  },
  computed: {},
  mounted() {
    this.bookDetal = localStorage.getItem('bookDetal');
    console.log(222, this.bookDetal)
  },
  methods: {
    
  },
  components: {
  },
};
</script>
<style lang="scss" scoped>
.book-detail {
  width: 210px;
  height: 100%;
  position: relative;
  .book-img{
    width: 100%;
    border-bottom: 1px dashed #979797;
    text-align: center;
    padding-bottom: 20px;
    img {
      width: 145px;
      height: 199px;
      // margin: 0 auto 20px;
    }
  }
  .book-title{
    margin: 21px 0 13px 19px;
    color: #363636;
    font-size: 14px;
  }
  .book-join{
    width: 100px;
    height: 33px;
    display: flex;
    align-items: center;
    border: 1px solid #D0021B;
    margin-left: 19px;
    img{
      width :20px;
      height: 20px;
      margin: 0 8px 0 13px;
    }
    span{
      font-size: 12px;
      color: #D0021B;
    }
  }
  .book-info{
    color: #363636;
    font-size: 12px;
    margin: 23px 0 0 19px;
    span{
      display: block;
      line-height: 25px;
    }
  }
}
</style>