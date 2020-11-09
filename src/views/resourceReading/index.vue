<template>
  <div class="resouing_box">
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
          <el-input
            v-model="searchText"
            placeholder="书内搜索"
            @click="search"
          ></el-input>
          <img
            src="@/assets/icon_search.png"
            class="resouing_input_i"
            @click="search"
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
          id="selectable"
          class="resouing_mine_centent_ce"
          v-html="content.bookContent"
        ></div>
      </div>
    </div>
    <div
      v-if="topPosition"
      class="resouing_mine_centent_btn"
      :style="{ top: topPosition + 'px', left: leftPosition + 'px' }"
    >
      <div class="centent_btn_box" @click="copyText">
        <img src="@/assets/second/fuzhi.png" class="centent_btn_box_i" />
        <div class="btnred">复制</div>
      </div>
      <div class="centent_btn_box" @click="note">
        <img src="@/assets/second/brush.png" class="centent_btn_box_t" />
        <div>笔记</div>
      </div>
      <div class="centent_btn_box">
        <img src="@/assets/second/marks.png" class="centent_btn_box_y" />
        <div>引用</div>
      </div>
      <div class="centent_btn_box boxright">
        <img src="@/assets/icon_search.png" class="centent_btn_box_t" />
        <div>检索</div>
      </div>
    </div>
  </div>
</template>

<script>
import copy from "copy-to-clipboard";
import { menuDetail } from "@/api/bookLibrary";
import { addReadNote } from "@/api/note";
import { searchList } from "@/api/search";

export default {
  components: {},
  data() {
    return {
      searchText: "",
      content: {},
      leftPosition: 0,
      topPosition: 0,
      selectText: ""
    };
  },
  async created() {
    var content = "";
    const me = this;

    // document.onmouseup = function (e) {
    //   console.log('111', window.getSelection())
    //   //   if (document.selection) {
    //   //     //IE
    //   //     var range = document.body.createTextRange();
    //   //     range.moveToElementText(document.getElementById('selectable'));
    //   //     range.select();
    //   //   } else if (window.getSelection) {
    //   //     var range = document.createRange();
    //   //     range.selectNode(document.getElementById('selectable'));
    //   //     window.getSelection().addRange(range).getRangeAt(0);
    //   //   }
    // }
    document.onmouseup = function (e) {
      // if (document.selection) {
      //   //IE
      //   var range = document.body.createTextRange();
      //   range.moveToElementText(document.getElementById('selectable'));
      //   range.select();
      // } else if (window.getSelection) {
      //   var range = document.createRange();
      //   range.selectNode(document.getElementById('selectable'));
      //   window.getSelection().addRange(range)
      // }
      content = window.getSelection().toString();

      // me.leftPosition = 0;
      // me.topPosition = 0;
      if (content) {
        let len = content.length;
        let target = e.target;
        let position = target.innerHTML.indexOf(content);
        let position2 = position + len;
        let tempstr1 = target.innerHTML.substring(0, position);
        let tempstr2 = target.innerHTML.substring(position2);
        let randomId = "copy" + new Date().getTime();
        me.selectText = content;

        content = `<i id="${randomId}" style="font-style: normal;color: red;">${content}</i>`;

        target.innerHTML = tempstr1 + content + tempstr2;

        me.leftPosition = document.getElementById(randomId).offsetLeft;
        me.topPosition = document.getElementById(randomId).offsetTop - 90;
      }
    };

    const res = await menuDetail({
      bookId: this.$route.params.bookid,
      menuId: this.$route.params.id
    });

    this.content = res.data;
  },
  methods: {
    // 复制
    copyText() {
      copy(this.selectText);
    },
    // 添加笔记
    async note() {
      const res = await addReadNote({
        bookId: this.$route.params.bookid,
        menuId: this.$route.params.id,
        encodeFontUrl: "",
        noteSrcWord: this.selectText,
        noteContent: this.selectText
      });
    },
    search() {
      searchList({
        pageNum: 1,
        pageSize: 10,
        keyword: this.searchText,
        orderByColumn: '',
        isAsc: ''
      })
    }

  }
};
</script>
<style lang="scss" scope>
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
::-moz-selection {
  color: red;
}
::selection {
  color: red;
}
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
.resouing_mine_centent_ce .zitu {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.resouing_mine_centent_ce .chatu {
  width: 500px;
  height: 500px;
  display: block;
  margin: 10px auto;
}

.resouing_mine_centent_ce .meipi {
  font-size: 14px;
  color: #000;
  display: block;
  text-align: center;
}

.resouing_mine_centent_ce table,
.resouing_mine_centent_ce table tr th,
.resouing_mine_centent_ce table tr td {
  border: 1px solid #ccc;
}
.resouing_mine_centent_ce table tr {
  display: flex;
}
.resouing_mine_centent_ce table tr td {
  flex: 1;
  display: inline-block;
}
.resouing_mine_centent_ce table {
  min-height: 25px;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
  width: 100%;
}

.resouing_box {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: rgba(237, 239, 243, 1);
  padding: 0 30px;
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
  margin: 22px 70px 80px 0;
}
.resouing_mine_box {
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
  cursor: pointer;
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
  // top: -80px;
  // left: -100px;
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
