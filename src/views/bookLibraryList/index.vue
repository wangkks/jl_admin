<template>
    <div class="booklibrary_box">
        <div class="booklibrary_box_right">
            <div class="booklibrary_box_t">
                <div class="booklibrary_left">
                    <div class="booklibrary_left_n">书籍库</div>
                    <div class="booklibrary_totle">
                        共有
                        <span class="booklibrary_num">10000</span>
                        条记录库
                    </div>
                </div>
                <div class="booklibrary_right">
                    <div class="booklibrary_input">
                        <el-input
                            v-model="input"
                            placeholder="请输入关键字"
                        ></el-input>
                        <img
                            src="@/assets/icon_search.png"
                            alt=""
                            class="booklibrary_input_i"
                        />
                    </div>
                    <div class="booklibrary_sort_box">
                        <div>出版时间</div>
                        <img
                            src="@/assets/second/sort_down.png"
                            alt=""
                            class="sort_box"
                        />
                    </div>
                    <img
                        src="@/assets/second/list_red.png"
                        alt=""
                        class="sort_list"
                    />
                    <img
                        src="@/assets/second/window.png"
                        alt=""
                        class="sort_window"
                    />
                </div>
            </div>
            <div class="detection_mine">
                <div
                    class="detection_mine_box"
                    v-for="(item, index) in detectionData"
                    :key="index"
                    @click="goBookDetail(item.id)"
                >
                    <img :src="item.img" alt="" class="detection_mine_box_i" />
                    <div class="detection_mine_right">
                        <div class="detection_mine_right_t">
                            {{ item.name }}
                        </div>
                        <div class="detection_mine_cent">
                            <div class="detection_mine_cent_l">
                                <div>作者：{{ item.author }} 编</div>
                                <div>收藏：{{ item.collection }}</div>
                            </div>
                            <img
                                :src="item.more"
                                alt=""
                                class="detection_mine_cent_i"
                            />
                        </div>
                        <div class="detection_mine_cent_btm">
                            {{ item.details }}
                        </div>
                    </div>
                    <img :src="item.bookmark" alt="" class="bookmark" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            input: "",
            detectionData: [
                {
                    id:1,
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    more: require("../../assets/second/more.png"),
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    id: 2,
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    more: require("../../assets/second/more.png"),
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    more: require("../../assets/second/more.png"),
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    more: require("../../assets/second/more.png"),
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
            ],
        };
    },
    methods: {
        goBookDetail(id){
            this.$router.push(`/myBook/resourceDetails/${id}`);
        }
    },
};
</script>
<style lang="scss">
/* reset element-ui css */
.booklibrary_box {
    .booklibrary_input .el-input__inner {
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
.booklibrary_box{
  width: 100%;
  height: auto;
  display: flex;
  background:  rgba(237, 239, 243, 1);
}
.booklibrary_box_right{
  width: auto;
  margin-left: 30px;
}
.booklibrary_box_t{
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
.booklibrary_left{
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  line-height: 20px;
  display: flex;
  align-items: center;
}
.booklibrary_left_n{
  font-size: 24px;
  line-height: 35px;
}
.booklibrary_totle{
  margin-left: 14px;
}
.booklibrary_num{
  color: #D0021B;
}
.booklibrary_right{
  display: flex;
  align-items: center;
}
.booklibrary_input{
  margin-right: 67px;
  position: relative;
}
.booklibrary_input_i{
  width: 19px;
  height: 19px;
  position: absolute;
  right: 30px;
  top: 10px;
}
.booklibrary_sort_box{
  display: flex;
}
.sort_box{
  width: 8px;
  height: 18px;
  margin: 0 40px 0 10px;
}
.sort_list{
  width: 18px;
  height: 16px;
  margin-right: 25px;
}
.sort_window{
  width: 20px;
  height: 19px;
}
.detection_mine{
  margin: 22px auto;
}
.detection_mine_box{
  width: 1100px;
  height: auto;
  background: #fff;
  margin: 0 auto 10px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  padding: 12px 17px 15px 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.detection_mine_box_i{
  width: 145px;
  height: 199px;
  margin-right: 44px;
}
.detection_mine_right{
  margin-top: 20px;
}
.detection_mine_right_t{
  font-size: 14px;
  font-weight: 500;
  color: #363636;
}
.detection_mine_cent{
  display: flex;
  justify-content: space-between;
}
.detection_mine_cent_l{
  display: flex;
  width: 200px;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 400;
  color: #363636;
  margin-top: 14px;
}
.detection_mine_cent_i{
  width: 100px;
  height: 33px;
}
.detection_mine_cent_btm{
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  margin-top: 50px;
}
.bookmark{
  width: 16px;
  height: 21px; 
  position: absolute;
  right: 20px;
  top: -2px;
}
</style>