<template>
  <div class="resour_box">
    <div class="resour_box_left"></div>
    <div class="resour_box_right">
      <div class="resour_box_t">
        <div class="resour_left">
          <div class="resour_left_n">书籍内容</div>
          <div class="resour_totle">
            当前位置：经部-汉语言文学-中国文学
          </div>
        </div>
        <div class="resour_right">
          <div class="resour_input">
            <el-input v-model="input" placeholder="书内搜索"></el-input>
            <img src="@/assets/icon_search.png" alt="" class="resour_input_i"/>
          </div>
        </div>
      </div>
      <div class="resour_mine">
        <div class="resour_mine_box">
          <div class="resour_mine_box_t">
            <img src="@/assets/second/brief.png" alt="" class="resour_mine_box_t_i"/>
            <div>内容简介</div>
          </div>
          <div class="resour_mine_box_ce">2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵[<span class="more">more</span>]</div>
        </div>
        <div class="resour_mine_centent">
          <div class="resour_mine_box_t">
            <img src="@/assets/second/catalog.png" alt="" class="resour_mine_box_t_i"/>
            <div>目录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components:{
        id: null,
    },
    data() {
      return {
        input: '',
      };
    },
    mounted(){
        this.id = this.$route.params.id;
    },
    methods: {
        
    }
  }
</script>
<style lang="scss">
/* reset element-ui css */
.resour_box{
  .resour_input .el-input__inner{
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
.resour_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.resour_box_left{
  width: 207px;
  height: auto;
  background: red;
}
.resour_box_right{
  width: auto;
  margin-left: 30px;
}
.resour_box_t{
  width: 1100px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  padding: 40px 0 38px;
  border-bottom: 1px dashed #979797;
  display: flex;
  justify-content: space-between;
}
.resour_left{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.resour_left_n{
  font-size: 24px;
  line-height: 35px;
}
.resour_totle{
  margin-left: 34px;
  font-size: 12px;
  font-weight: 400;
  color: #9B9B9B;
}
.resour_right{
  display: flex;
  align-items: center;
}
.resour_input{
  margin-right: 36px;
  position: relative;
}
.resour_input_i{
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.resour_mine{
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.resour_mine_box{
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
.resour_mine_box_t{
  font-size: 14px;
  font-weight: 400;
  color: #D0021B;
  display: flex;
  align-items: center;
}
.resour_mine_box_t_i{
  width: 18px;
  height: 20px;
  margin-right: 6px;
}
.resour_mine_box_ce{
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  line-height: 17px;
  letter-spacing: 1px;
  margin-top: 20px;
}
.more{
  color: #D0021B;
}
.resour_mine_centent{
  width: 1100px;
  height: 200px;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
</style>