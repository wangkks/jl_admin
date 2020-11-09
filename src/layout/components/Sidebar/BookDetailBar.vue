<template>
  <div class="book-detail">
    <div class="book-img">
      <img :src="data.coverUrl" alt="" />
    </div>
    <div class="book-title">{{ data.bookName }}</div>
    <div class="book-join" @click="add">
      <img src="@/assets/second/bookmark-line.png" alt="" />
      <span>加入书架</span>
    </div>
    <div class="book-info">
      <span>作者：{{ data.mainResponsibility }}</span>
      <span>出版社：{{ data.publisher }}</span>
      <span>出版时间：{{ data.publishDate }}</span>
      <span>资源分类：{{ data.resourceClasses }}</span>
      <span>主题词：{{ data.subjectWord }}</span>
      <span>版次：{{ data.revision }}</span>
      <span>丛编：{{ data.dbName }}</span>
    </div>
  </div>
</template>

<script>
import { addBookClass } from '@/api/bookshelf'

export default {
  name: 'BookDetailBar',
  props: ['data'],
  data() {
    return {
    };
  },
  methods: {
    async add() {
      const res = await addBookClass({
        bookId: this.$route.params.bookid,
        classesId: this.data.siClassificationId,
      })

      this.$message({
        type: 'success',
        message: '添加成功!'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.book-detail {
  width: 210px;
  height: 100%;
  position: relative;
  .book-img {
    width: 100%;
    border-bottom: 1px dashed #979797;
    text-align: center;
    padding-bottom: 20px;
    margin-top: 20px;
    img {
      width: 145px;
      height: 199px;
      // margin: 0 auto 20px;
    }
  }
  .book-title {
    margin: 21px 0 13px 19px;
    color: #363636;
    font-size: 14px;
  }
  .book-join {
    width: 100px;
    height: 33px;
    display: flex;
    align-items: center;
    border: 1px solid #d0021b;
    margin-left: 19px;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
      margin: 0 8px 0 13px;
    }
    span {
      font-size: 12px;
      color: #d0021b;
    }
  }
  .book-info {
    color: #363636;
    font-size: 12px;
    margin: 23px 5px 0 19px;
    span {
      display: block;
      line-height: 25px;
    }
  }
}
</style>