<template>
  <div class="book-catalog">
    <div class="catalog-title">{{bookDeatil.bookTitle}}</div>
    <div class="catalog-note">
      <div v-for="(item,index) in catalog" :class="['catalog-c', selected == index ? 'actived':'']" @click="changeBtn(index)">
        <img :src="selected == index? item.iconred:item.icon" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="dashed-line"></div>
    <div class="book-synopsis" v-if="selected == 0">
      <div class="book-synopsis-title">
        <img src="@/assets/second/icon_goldFoil.png" alt="">
        讀四書大全説
      </div>
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in activities"
          :key="index"
          :type="item.type"
          :size="item.size"
          @click.native="goSynopsis(item.id)"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="mynote-mine" v-else>
      <div class="mynote-name">{{mynoteData.name}}</div>
      <div class="mynote-t">引文</div>
      <div class="mynote-citation">{{mynoteData.citation}}</div>
      <div class="mynote-t tionred">笔记</div>
      <div class="mynote-n">{{mynoteData.note}}</div>
      <div class="mynote-time">
        <div class="btmbox_l">时间：{{mynoteData.time}}</div>
        <div class="btmbox_r">来源：{{mynoteData.source}}</div>
      </div>
      <div class="mynote-btn">
        <div><img src="@/assets/edit.png" alt="" class="edit"/></div>
        <div><img src="@/assets/delete_red.png" alt="" class="delete"/></div>
      </div>
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
        {title:'目录',icon: require('@/assets/second/catalog.png'), iconred: require('@/assets/second/catalogred.png')},
        {title:'笔记',icon: require('@/assets/second/icon_mynote.png'), iconred: require('@/assets/second/icon_mynote_red.png')},
      ],
      selected: 0,
      activities: [
        {
          content: "第一册简介",
          size: "large",
          type: "primary",
          id: 1
        },
        {
          id :2,
          content: "第二册简介",
        },
        {
          content: "第三册简介",
        },
        {
          content: "第四册简介",
        },
        {
          content: "第无册简介",
        },
      ],
      mynoteData:{
        'name':'01 笔记标题',
        'citation':'莫愁湖位于南京秦淮河西，南京秦淮河西。',
        'note':'孟子謂齊宣王曰：『王之臣，有託其妻子於其友而之楚遊者孟子謂齊宣王曰。『王之臣，有託其妻子於其友而之楚遊者孟子謂齊宣王曰。',
        'time':'2020-09-12',
        'source':'诗国南京／第六册簡介'
      }
    };
  },
  computed: {
    
  },
  mounted() {},
  methods: {
    changeBtn(index){
      this.selected = index;
    },
    goSynopsis(id){
      this.$router.push(`/myBook/resourceReading/${id}`);
    }
  },
  components: {
  },
};
</script>
<style lang="scss">
.book-synopsis{
  margin-top: 19px;
  .book-synopsis-title{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    margin-bottom: 13px;
    padding-left: 19px;
    img{
      width: 11px;
      height: 12px;
    }
  }
  .el-timeline-item{
    padding-bottom: 15px;
    .el-timeline-item__content{
      padding-top: 17px;
    }
    .el-timeline-item__node--normal{
      width: 0;
    }
    .el-timeline-item__tail{
      height: 60px;
    }
    .el-timeline-item__node--large{
      width: 15px;
      height: 5px;
      border-radius: 3px;
      top: 19px;
      background-color: #D0021B;
    }
  }
  .el-timeline .el-timeline-item:last-child .el-timeline-item__tail{
    display: block;
  }
}
</style>
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
  .dashed-line{
    margin-top: 29px;
    height: 1px;
    border-bottom: 1px dashed #979797;
  }
  .catalog-note{
    display: flex;
    align-items: center;
    margin: 13px 0 0 19px;
    .catalog-c.actived{
      color: #D0021B;
      border: 1px solid #D0021B;
    }
    .catalog-c{
      width: 66px;
      height: 33px;
      border: 1px solid #4A4A4A;
      display: flex;
      font-size: 12px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img{
        width: 14px;
        height: 14px;
        margin-right: 2px;
      }
      &:last-child{
        border-left: none;
      }
    }
  }
  .mynote-mine{
    width: 200px;
    background-color: #fff;
    margin: 14px 5px 0 5px;
    .mynote-name{
      color: #000000;
      font-size: 16px;
      padding: 8px 0 14px 14px;
    }
    .mynote-t{
      width: 45px;
      height: 24px;
      font-size: 12px;
      font-weight: 600;
      color: #FFFFFF;
      text-align: center;
      line-height: 24px;
      background: #D0021B;
      margin: 0 0 13px 12px;
    }
    .mynote-citation{
      color: #000;
      font-size: 12px;
      padding: 0 17px 16px 10px
    }
    .tionred{
      background: #99BFFF;
    }
    .mynote-n{
      font-size: 12px;
      color: #000;
      font-weight: 400;
      line-height: 17px;
      padding: 0 5px 23px;
      border-bottom: 1px solid #979797;
      margin: 0 5px;
    }
    .mynote-time{
      font-size: 12px;
      color: #363636;
      padding: 14px 10px;
      line-height: 17px;
      border-bottom: 1px dashed #979797;
      .btmbox_r{
        color: #999999;
      }
    }
    .mynote-btn{
      width: 100%;
      height: 42px;
      display: flex;
      align-items: center;
      div{
        flex: 1;
        text-align: center;
        &:last-child{
          border-left: 1px dashed #DDDDDD;
        }
      }
      img{
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>