<template>
  <div class="resouing_box">
    <div class="resouing_box_right">
      <div class="resouing_box_t">
        <div class="resouing_left">
          <div class="resouing_left_top">
            <div class="resouing_left_n">第六册简介</div>
            <div class="resouing_totle">
              当前位置：讀四書大全説 > 第六册簡介
            </div>
          </div>
          <div>作者：［明］王夫之 著</div>
        </div>
        <div class="resouing_right">
          <div class="resouing_input">
            <el-input v-model="input" placeholder="书内搜索"></el-input>
            <img
              src="@/assets/icon_search.png"
              alt=""
              class="resouing_input_i"
            />
          </div>
        </div>
      </div>
      <div class="resouing_mine">
        <div class="resouing_mine_box">
          <div class="resouing_mine_box_t">点击查看原文</div>
          <div class="resouing_mine_box_b">
            <img
              src="@/assets/second/book.png"
              alt=""
              class="resouing_mine_box_b_i"
            />
            <div>- P1 -</div>
          </div>
        </div>
        <div class="resouing_mine_centent">
          <div class="resouing_mine_box_t">文字版</div>
          <div
            class="resouing_mine_centent_ce"
            v-html="content.bookContent"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuDetail } from '@/api/bookLibrary'

export default {
  components: {

  },
  data() {
    return {
      input: '',
      content: {}
    };
  },
  async created() {
    var content = ''
    document.onmouseup = function (e) {
      content = window.getSelection().toString();
      if (content != '') {
        var len = content.length;
        var target = e.target;
        var position = target.innerHTML.indexOf(content);
        var position2 = position + len;
        var tempstr1 = target.innerHTML.substring(0, position);
        var tempstr2 = target.innerHTML.substring(position2);

        if (document.getElementById("box")) {
          let _box = document.getElementById("box")
          document.getElementById("box").innerHTML = ''
          document.getElementById("box").parentNode.removeChild(_box)
        }

        let img = require('@/assets/second/fuzhi.png')
        let img1 = require('@/assets/second/brush.png')
        let img2 = require('@/assets/second/marks.png')
        let img3 = require('@/assets/icon_search.png')

        content = "<span style='position: relative;display: inline-block;'>"
          + "<span style='color:red;'>"
          + content
          + "</span>"
          + '<div id="box" class="resouing_mine_centent_btn">'
          + '<div class="centent_btn_box" οnclick="onSubmit()">'
          + `<img src="${img}" class="centent_btn_box_i"/>`
          + '<div class="btnred">复制</div>'
          + '</div>'
          + '<div class="centent_btn_box">'
          + `<img src="${img1}" class="centent_btn_box_t" />`
          + '<div>笔记</div>'
          + '</div>'
          + '<div class="centent_btn_box" οnclick="onSubmit()">'
          + `<img src="${img2}" class="centent_btn_box_y"/>`
          + '<div>引用</div>'
          + '</div>'
          + '<div class="centent_btn_box boxright">'
          + `<img src="${img3}" class="centent_btn_box_t" />`
          + '<div>检索</div>'
          + '</div>'
          + '</div>'
          + "</span>";
        target.innerHTML = tempstr1 + content + tempstr2;

      }
    }

    window.onSubmit = function () {
      console.log(123)
    }

    const res = await menuDetail({
      bookId: this.$route.params.bookid,
      menuId: this.$route.params.id
    })

    this.content = res.data
  },
  methods: {
  }
}
</script>
<style lang="scss">
/* reset element-ui css */
.resouing_box {
  .resouing_input .el-input__inner {
    width: 434px;
    height: 42px;
    color: #000;
    background: #f7f7f3;
    border-radius: 21px;
    border: 1px solid #c5c5c5;
  }
}
</style>
<style lang="scss" scope>
.resouing_mine_centent_ce h2 {
  font-size: 20px;
  line-height: 30px;
}
.resouing_mine_centent_ce h2 p {
  font-size: 14px;
  color: #666;
  line-height: 20px;
}
.resouing_mine_centent_ce .zhu {
  color: #b9584e;
}
.resouing_mine_centent_ce .shu {
  color: purple;
}

.resouing_mine_centent_ce .luokuan {
  color: #b9584e;
}

.resouing_mine_centent_ce .xiaozh {
  color: blue;
}

.resouing_mine_centent_ce .jiaozhu-jiao {
  color: blue;
}

.resouing_mine_centent_ce .jiaozhu-zhu {
  font-size: 16px;
  color: blue;
}

.resouing_mine_centent_ce .zhuanming {
  text-decoration: underline;
}
.resouing_mine_centent_ce .shuming {
  border-bottom: 1px dashed #666;
}

.resouing_box {
  width: 100%;
  height: auto;
  display: flex;
  background: rgba(237, 239, 243, 1);
}
.resouing_box_right {
  width: auto;
  margin-left: 30px;
}
.resouing_box_t {
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
.resouing_left {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  flex-direction: column;
}
.resouing_left_top {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.resouing_left_n {
  font-size: 24px;
  line-height: 35px;
}
.resouing_totle {
  margin-left: 34px;
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
}
.resouing_right {
  display: flex;
  align-items: center;
}
.resouing_input {
  margin-right: 36px;
  position: relative;
}
.resouing_input_i {
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.resouing_mine {
  width: 1100px;
  margin: 22px 70px 80px 0;
  display: flex;
  flex-wrap: wrap;
}
.resouing_mine_box {
  width: 1100px;
  height: auto;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.resouing_mine_box_t {
  font-size: 14px;
  font-weight: 400;
  color: #d0021b;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.resouing_mine_box_b {
  width: 120px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0021b;
}
.resouing_mine_box_b_i {
  width: 20px;
  height: 18px;
  margin-right: 6px;
}
.resouing_mine_centent {
  width: 1100px;
  height: auto;
  background: #fff;
  margin: 0 10px 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
}
.resouing_mine_centent_ce {
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  line-height: 17px;
  letter-spacing: 1px;
}

.resouing_mine_centent_btn {
  width: 340px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  position: absolute;
  top: -80px;
  left: -100px;
}
.centent_btn_box {
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
.boxright {
  border-right: none;
}
.btnred {
  color: #ad2102;
}
.centent_btn_box_i {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.centent_btn_box_t {
  width: 18x;
  height: 18px;
  margin-right: 6px;
}
.centent_btn_box_y {
  width: 18x;
  height: 17px;
  margin-right: 6px;
}
</style>