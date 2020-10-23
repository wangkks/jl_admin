<template>
  <div class="feed_box">
    <div class="feed_box_left"></div>
    <div class="feed_box_right">
      <div class="feed_box_t">
        <div class="feed_left">
          <div class="feed_left_n">我的反馈</div>
        </div>
        <div class="feed_right">
          <div class="feed_right_title redcolr">已回复（2）</div>
          <div class="feed_right_title greycolr">待回复（6）</div>
          <div class="feed_input">
            <el-input v-model="input" placeholder="搜索"></el-input>
            <img src="@/assets/icon_search.png" alt="" class="feed_input_i"/>
          </div>
        </div>
      </div>
      <div class="feed_mine">
        <div 
          class="feed_mine_minebox"
          v-for="(item,index) in feedData"
          :key="index"
          >
          <div class="feed_mine_box">
            <div class="feed_mine_b_topbox">
              <div class="feed_mine_b_top">
                <div class="feed_mine_b_top_l">{{item.name}}</div>
                <div class="feed_mine_b_top_r">
                  <img src="@/assets/delete_red.png" alt="" class="top_r_delete"/>
                </div>
              </div>
              <div class="feed_mine_tion">
                <div class="feed_mine_tion_s">{{item.citation}}</div>
              </div>
              <div class="feed_mine_b_btmbox">
                <div>反馈时间：{{item.time}}</div>
                <div>来源：{{item.source}}</div>
              </div>
            </div>
            <div class="feed_mine_tion">
              <div class="feed_mine_tion_t tionred">回复</div>
              <div class="feed_mine_tion_s notecolor">{{item.note}}</div>
            </div>
            <div class="feed_mine_b_btmbox">
              <div>回复时间：{{item.replyTime}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="feed_centent">
         <div 
          class="feed_centent_minebox"
          v-for="(item,index) in myFeedData"
          :key="index"
          >
          <div class="feed_centent_box">
            <div class="feed_centent_b_topbox">
              <div class="feed_centent_b_top">
                <div>待回复</div>
                <div class="feed_centent_b_top_l">{{item.name}}</div>
              </div>
              <div class="feed_centent_tion">
                <div class="feed_centent_tion_s">{{item.citation}}</div>
              </div>
              <div class="feed_centent_b_btmbox">
                <div>反馈时间：{{item.time}}</div>
                <div>来源：{{item.source}}</div>
              </div>
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
        feedData:[
          {
            'name':'反馈内容',
            'citation':'这是一条反馈内容，这是一条反馈内容，这是一条反馈内容。',
            'note':'这是回复内容这是回复内容这是回复内容这是回复内容这是回复内容这是回复内容这是回复内容。这是回复内容这是回复内容这是回复内容这是回复内容这是回复内容这是回复内容。',
            'time':'2020-09-12',
            'source':'诗国南京／第六册簡介',
            'replyTime':'2020-09-19'
          },
           {
            'name':'反馈内容',
            'citation':'莫愁湖位于南京秦淮河西，南京秦淮河西。',
            'note':'孟子謂齊宣王曰：『王之臣，有託其妻子於其友而之楚遊者孟子謂齊宣王曰。『王之臣，有託其妻子於其友而之楚遊者孟子謂齊宣王曰。',
            'time':'2020-09-12',
            'source':'诗国南京／第六册簡介',
            'replyTime':'2020-09-19'
          },
        ],
        myFeedData:[
           {
            'name':'反馈内容',
            'citation':'这是一条反馈内容，这是一条反馈内容，这是一条反馈内容。',
            'time':'2020-09-12',
            'source':'诗国南京／第六册簡介',
          },
          {
            'name':'反馈内容',
            'citation':'这是一条反馈内容，这是一条反馈内容，这是一条反馈内容。',
            'time':'2020-09-12',
            'source':'诗国南京／第六册簡介',
          },
          {
            'name':'反馈内容',
            'citation':'这是一条反馈内容，这是一条反馈内容，这是一条反馈内容。',
            'time':'2020-09-12',
            'source':'诗国南京／第六册簡介',
          },
          {
            'name':'反馈内容',
            'citation':'这是一条反馈内容，这是一条反馈内容，这是一条反馈内容。',
            'time':'2020-09-12',
            'source':'诗国南京／第六册簡介',
          },
        ]
      };
    },
    methods: {
     
    }
  }
</script>
<style lang="scss">
/* reset element-ui css */
.feed_box{
  .feed_input .el-input__inner{
    width: 434px;
    height: 42px;
    color: #000;
    background: #F7F7F3;
    border-radius: 21px;
    border: 1px solid #C5C5C5;
  }
  .el-checkbox__inner{
    background-color:#edeff3;
    border-color: #000;
    border-radius: 50%;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color:#D0021B;
    border-color: #D0021B;
    border-radius: 50%;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #fff;
  }
  .el-checkbox.is-bordered.is-checked{
    border-color: #D0021B;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: #000;
  }
}


</style>
<style lang="scss">
.feed_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.feed_box_left{
  width: 207px;
  height: auto;
  background: red;
}
.feed_box_right{
  width: auto;
  margin-left: 30px;
}
.feed_box_t{
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
.feed_left{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.feed_left_n{
  font-size: 24px;
  line-height: 35px;
}
.feed_right{
  display: flex;
  align-items: center;
}
.feed_right_title{
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-right: 30px;
}
.redcolr{
  color: #D0021B;
}
.greycolr{
  color: #000000;
}
.feed_input{
  margin-right: 36px;
  position: relative;
}
.feed_input_i{
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.feed_mine{
  width: 1100px;
  margin: 22px 70px 0 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px dashed #979797;
}
.feed_mine_minebox{
  display: flex;
  margin-left: 10px;
}
.feed_mine_box{
  width: 520px;
  height: auto;
  background: #fff;
  margin: 0 0 20px 5px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #E6E6E6;
  padding: 8px 12px 12px;
  display: flex;
  flex-direction: column
}
.feed_mine_b_topbox{
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #979797;
  padding-bottom: 10px;
}
.feed_mine_b_top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.feed_mine_b_top_l{
  width: 72px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
   background: #D0021B;
}
.top_r_delete{
  width: 15px;
  height: 15px;
  margin: 0 10px 0 14px;
}
.feed_mine_tion_t{
  width: 45px;
  height: 24px;
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  line-height: 24px;
  background: #D0021B;
}
.feed_mine_tion_s{
  font-size: 14px;
  font-weight: 400;
  color: #9B9B9B;
  margin-top: 10px;
}
.notecolor{
  color: #000;
}
.tionred{
  margin-top: 14px;
  background: #99BFFF;
}
.feed_mine_b_btmbox{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  color: #999999;
}
.feed_centent{
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.feed_centent_minebox{
  display: flex;
  margin-left: 10px;
}
.feed_centent_box{
  width: 520px;
  height: auto;
  background: #fff;
  margin: 0 0 20px 5px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #E6E6E6;
  padding: 8px 12px 12px;
  display: flex;
  flex-direction: column
}
.feed_centent_b_topbox{
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
.feed_centent_b_top{
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #000000;
}
.feed_centent_b_top_l{
  width: 72px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
  background: #D0021B;
  margin-left: 16px;
}
.feed_centent_tion_s{
  font-size: 14px;
  font-weight: 400;
  color: #9B9B9B;
  margin-top: 10px;
}
.feed_centent_b_btmbox{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  color: #999999;
}
</style>