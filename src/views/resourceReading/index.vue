<template>
  <div class="resouing_box">
    <div class="resouing_box_left"></div>
    <div class="resouing_box_right">
      <div class="resouing_box_t">
        <div class="resouing_left">
          <div class="resouing_left_top">
            <div class="resouing_left_n">第六册简介</div>
            <div class="resouing_totle">当前位置：讀四書大全説 > 第六册簡介</div>
          </div>
         <div>作者：［明］王夫之 著</div>
        </div>
        <div class="resouing_right">
          <div class="resouing_input">
            <el-input v-model="input" placeholder="书内搜索"></el-input>
            <img src="@/assets/icon_search.png" alt="" class="resouing_input_i"/>
          </div>
        </div>
      </div>
      <div class="resouing_mine">
        <div class="resouing_mine_box">
          <div class="resouing_mine_box_t">点击查看原文</div>
          <div class="resouing_mine_box_b">
             <img src="@/assets/second/book.png" alt="" class="resouing_mine_box_b_i"/>
             <div>- P1 -</div>
          </div>
        </div>
        <div class="resouing_mine_centent">
          <div class="resouing_mine_box_t">文字版</div>
          <div class="resouing_mine_centent_ce">2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵</div>
          <div class="resouing_mine_centent_ce">莫愁湖位于南京秦淮河西《莫愁湖志》是清朝光绪年间马士图编辑的一本手抄版藏书分上下两册上册一至四卷印有光绪壬午卯月重锓下册五六两卷印有光绪辛卯五月重锓其中版画有明中山王遗像莫愁湖图两幅曾公像卢莫愁小像。此志卷首一卷正文六卷题词者有黄钰等数人卷首有自序题词目录莫愁湖序莫愁湖图莫愁湖赋卷一为莫愁湖 诗集卷二为山水关梁祠庙古迹卷三为文考卷四为画社以上为上册下册有郁金堂诗词证小引莫愁小像郁金堂八景题咏卷五为郁金堂诗证卷六为郁金堂词证有明中山王遗像莫愁湖图两幅曾</div>
          <div class="resouing_mine_centent_ce">公像卢莫愁小像共五幅版画莫愁湖位于南京秦淮河西莫愁湖公园是一座有着1500年悠久历史和丰富人文资源的江南古典名园为六朝胜迹公园现有面积为58.36公顷其中水面</div>
          <div class="resouing_mine_centent_btn">
            <div class="centent_btn_box">
              <img src="@/assets/second/fuzhi.png" alt="" class="centent_btn_box_i"/>
              <div class="btnred">复制</div>
            </div>
            <div class="centent_btn_box">
              <img src="@/assets/second/brush.png" alt="" class="centent_btn_box_t"/>
              <div>笔记</div>
            </div>
            <div class="centent_btn_box">
              <img src="@/assets/second/marks.png" alt="" class="centent_btn_box_y"/>
              <div>引用</div>
            </div>
            <div class="centent_btn_box boxright">
              <img src="@/assets/icon_search.png" alt="" class="centent_btn_box_t"/>
              <div>检索</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components:{
    },
    data() {
      return {
        input: '',
      };
    },
    methods: {
    }
  }
</script>
<style lang="scss">
/* reset element-ui css */
.resouing_box{
  .resouing_input .el-input__inner{
    width: 434px;
    height: 42px;
    color: #000;
    background: #F7F7F3;
    border-radius: 21px;
    border: 1px solid #C5C5C5;
  }
}


</style>
<style lang="scss">
.resouing_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.resouing_box_left{
  width: 207px;
  height: auto;
  background: red;
}
.resouing_box_right{
  width: auto;
  margin-left: 30px;
}
.resouing_box_t{
  width: 1100px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 40px 0 15px;
  border-bottom: 1px dashed #979797;
  display: flex;
  justify-content: space-between;
}
.resouing_left{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  flex-direction: column;
}
.resouing_left_top{
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.resouing_left_n{
  font-size: 24px;
  line-height: 35px;
}
.resouing_totle{
  margin-left: 34px;
  font-size: 12px;
  font-weight: 400;
  color: #9B9B9B;
}
.resouing_right{
  display: flex;
  align-items: center;
}
.resouing_input{
  margin-right: 36px;
  position: relative;
}
.resouing_input_i{
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.resouing_mine{
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.resouing_mine_box{
  width: 1100px;
  height: auto;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.resouing_mine_box_t{
  font-size: 14px;
  font-weight: 400;
  color: #D0021B;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.resouing_mine_box_b{
  width: 120px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #D0021B;
}
.resouing_mine_box_b_i{
  width: 20px;
  height: 18px;
  margin-right: 6px;
}
.resouing_mine_centent{
  width: 1100px;
  height: auto;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.resouing_mine_centent_ce{
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  line-height: 17px;
  letter-spacing: 1px;
}
.resouing_mine_centent_btn{
  width: 340px;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  margin-top: 20px;
  padding: 10px;
  display: flex;
}
.centent_btn_box{
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  width: 70px;
  height: 34px;
  line-height: 34px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  border-right: 1px dashed #979797;
}
.boxright{
  border-right: none;
}
.btnred{
  color: #AD2102;
}
.centent_btn_box_i{
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.centent_btn_box_t{
  width: 18x;
  height: 18px;
  margin-right: 6px;
}
.centent_btn_box_y{
  width: 18x;
  height: 17px;
  margin-right: 6px;
}
</style>