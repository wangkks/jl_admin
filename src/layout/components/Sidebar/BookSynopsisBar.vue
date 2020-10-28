<template>
  <div class="book-catalog">
    <div class="catalog-title">{{bookDeatil.bookTitle}}</div>
    <div class="catalog-note">
      <div class="catalog-c" v-for="item in catalog">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookDeatil:{
        bookTitle: '诗国南京'
      },
      catalog:[
        {title:'目录',icon: require('@/assets/second/catalog.png'), iconred: require('@/assets/second/icon_mynote_red.png')},
        {title:'笔记',icon: require('@/assets/second/icon_mynote_red.png'), iconred: require('@/assets/second/icon_mynote_red.png')},
      ]
    };
  },
  computed: {
    
  },
  mounted() {},
  methods: {
    
  },
  components: {
  },
};
</script>
<style lang="scss" scoped>
.book-catalog {
  width: 210px;
  height: 100%;
  position: relative;
  .catalog-title{
    margin: 0 0 13px 19px;
    color: #363636;
    font-size: 14px;
  }
  .catalog-note{
    // width: 100px;
    height: 33px;
    display: flex;
    align-items: center;
    margin: 13px 0 0 19px;
    .catalog-c{
      width: 66px;
      height: 33px;
      border: 1px solid #4A4A4A;
      img{
        width: 14px;
        height: 14px;
      }
    }

  }
}
</style>