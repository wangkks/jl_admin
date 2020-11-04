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
          <div class="resouing_mine_centent_ce" v-html="data"></div>

          <div class="resouing_mine_centent_btn">
            <div class="centent_btn_box">
              <img
                src="@/assets/second/fuzhi.png"
                alt=""
                class="centent_btn_box_i"
              />
              <div class="btnred">复制</div>
            </div>
            <div class="centent_btn_box">
              <img
                src="@/assets/second/brush.png"
                alt=""
                class="centent_btn_box_t"
              />
              <div>笔记</div>
            </div>
            <div class="centent_btn_box">
              <img
                src="@/assets/second/marks.png"
                alt=""
                class="centent_btn_box_y"
              />
              <div>引用</div>
            </div>
            <div class="centent_btn_box boxright">
              <img
                src="@/assets/icon_search.png"
                alt=""
                class="centent_btn_box_t"
              />
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
  components: {
  },
  data() {
    return {
      input: '',
      data: '<h2>地所接四境<h2><p>【集慶路】東西二百三十五里南北四百六十里<a id=\"ZSK12446-000773-L00757\" class=\"page\">757</a>【東】至本路界首一百四十里自界首至鎮江路四十里【西】至本路界首一十里自界首至和州八十三里【南】至本路界首二百四十里自界首至寜國路一百二十里【北】至本路界首四十九里自界首至真州一百一十里【東南】到本路界首二百八十五里自界首至常州路一百八十五里【西南】到本路界首九十里自界首至太平路三十里【東北】到本路界首一百三十五里自界首至鎮江路四十五里【西北】到本路界首二<a id=\"ZSK12446-000774-L00758\" class=\"page\">758</a>十二里自界首至真州一百二十七里自集慶路到汴梁陸路一千四百四十五里水路一千七百七十里到河南府陸路一千八百里水路二千一百九十五里北至</p><p>大都水程三十站三千四百一十里陸程四十站二千八百一十五里</p><p>【江寜縣】附廓東西八十五里南北九十八里【東】至上元縣界舊以御街中分今抵録事司城門爲界【西】至和州烏江縣界四十里以鰻鯬洲大<a id=\"ZSK12446-000775-L00759\" class=\"page\">759</a>江中流爲界自界首至烏江縣一十五里【南】至溧水州界九十三里以烏刹橋爲界自界首至溧水州四十五里【北】至上元縣界五里以金陵郷爲界東南到句容縣界七十里以湖山郷爲界自界首到句容縣九十里【西南】到太平路當<span class=\"big02\">𡍼</span>縣界一百六里以章公塘爲界自界首到當<span class=\"big02\">𡍼</span>縣一十七里【東北】到上元縣界二十五里以崇禮郷爲界【西北】到上元縣界五里以金陵郷爲界</p><a class=\"page\" id=\"ZSK12446-000776-L00760\">760</a><p>【上元縣】附廓東西九十五里南北八十五里【東】至句容縣界八十里以周郎橋中分界【西】至江寜縣界舊以御街中分今抵録事司城門爲界【南】至江寜縣界七十里以<span class=\"big02\">𣱵</span>豐郷北白米湖爲界【北】至真州六合縣界四十九里以<span class=\"big02\">𤓰</span>歩大江中流爲界【東南】到句容縣界七十里以東陳村爲界自界首到句容縣三十五里【西南】到江寜縣界四里以大<span class=\"big02\">𨼆</span>郷爲界【東北】到句容縣界六十里以章橋爲界自界首到句容縣八十里【西<a id=\"ZSK12446-000777-L00761\" class=\"page\">761</a>北】到真州六合縣界二十九里以湖墅大江中流爲界自界首到六合縣八十五里</p><p>【句容縣】東西七十里南北一百二十里【東】至鎮江路丹徒縣界五十里以山口爲界自界首至丹徒縣五十里【西】至上元縣界二十里以周郎橋中分爲界自界首至上元縣七十里【南】至溧水州界六十里以丁塘村爲界自界首至溧水州三十里【北】至真州揚子縣界七十里以下蜀大江中流爲界自界首至揚子縣六十里【東南】<a id=\"ZSK12446-000778-L00762\" class=\"page\">762</a>到鎮江路金壇縣界六十里以茅山崇元觀西堆爲界自界首到金壇縣六十里【西南】到江寜縣界七十里以上義山東緑楊村爲界自界首到江寜縣九十里【東北】到丹徒縣界六十五里以左橋爲界自界首到丹徒縣四十五里【西北】到上元縣界八十里以東陽鎮霸橋爲界自界首到上元縣六十里</p><p>【溧水州】東西八十二里一百三歩南北一百五十五里三十八歩【東】至句容縣界三十七里以<a id=\"ZSK12446-000779-L00763\" class=\"page\">763</a>浮山頂爲界自界至句容縣四十里【西】至上元縣界三十五里烏石橋爲界自界至上元縣八十五里【南】至寜國路宣城縣界百一十里四牌岡爲界自界至宣城縣百三十里【北】至江寜縣界四十五里上義山爲界自界至江寜縣七十五里【東北】到句容縣界四十里望湖岡爲界自界到句容縣五十里【東南】到溧陽州界五十里分界山爲界自界到溧陽州七十里【西南】到寜國路宣城縣界百三十五里崑山郷爲界自界<a id=\"ZSK12446-000780-L00764\" class=\"page\">764</a>到宣城縣一百里【西北】到江寜縣界四十五里烏刹橋爲界自界到江寜縣七十五里</p><p>【溧陽州】東西一百五十里南北一百六十里【東】至冝興州界一十五里以葑埭牌爲界自界首至冝興州七十里【西】至溧水州界八十五里以三塔墩爲界自界至溧水州四十里【南】至廣徳路界七十里以石屋山分流爲界自界至廣徳軍八十里【北】至金壇縣界八十里以長塘湖港荻場爲界自界首至金壇縣四十里【東南】到冝<a id=\"ZSK12446-000781-L00765\" class=\"page\">765</a>興州界八十里以白塔山爲界自界首到冝興州四十里【西南】到宣城縣界一百二十里以湖東北岸爲界自界首到宣城縣一百三十里【東北】到冝興州界四十五里以五家村爲界自界首到冝興州六十五里【西北】到溧水州界七十五里以曹山陸路爲界自界首到溧水州四十五里</p>'
    };
  },
  created() {
    // setInterval(() => {
    //   this.data.substring()
    //   console.log(this.data.indexOf(window.getSelection().toString()))
    // }, 500)
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
<style lang="scss">
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
.resouing_mine_centent_ce h2 {
  font-size: 18px;
}
.resouing_mine_centent_ce h2 p {
  font-size: 12px;
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