<template>
    <div class="mybook_box">
        <div class="mybook_box_left"></div>
        <div class="mybook_box_right">
            <div class="mybook_box_t">
                <div class="mybook_left">
                    <div class="mybook_left_n">我的书架</div>
                    <div class="mybook_totle">
                        当前位置：经部-汉语言文学-中国文学
                    </div>
                </div>
                <div class="mybook_right">
                    <div class="mybook_input">
                        <el-input v-model="input" placeholder="搜索"></el-input>
                        <img
                            src="@/assets/icon_search.png"
                            alt=""
                            class="mybook_input_i"
                        />
                    </div>
                </div>
            </div>
            <div class="mybook_mine">
                <div
                    class="mybook_mine_box"
                    v-for="(item, index) in mybookData"
                    :key="index"
                >
                    <div class="mybook_mine_box_img">
                        <img :src="item.img" alt="" class="mybook_mine_box_i" />
                    </div>
                    <div class="mybook_mine_right">
                        <div class="mybook_mine_right_t">{{ item.name }}</div>
                        <div class="mybook_mine_cent">
                            <div>作者：{{ item.author }} 编</div>
                            <div>收藏：{{ item.collection }}</div>
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
            mybookData: [
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
                {
                    img: require("../../assets/second/bitmap_bg.png"),
                    name: "诗国南京",
                    author: "陈勇",
                    collection: "12",
                    details:
                        "2019年10月31日，联合国教科文组织宣布南京成为“创意城市网络·文学之都”，《诗国南京》为“文学之都经典文库”从书中的一本。金陵诗词承载南京历史文化、传承中华诗词优秀传统，是南京“世界文学之都”魅力的重要组成部分。我们在作者分布和篇目选择上，尽可能兼顾经典性、代表性、多样性和创新性，并收录诸多以往选本未收录的诗词，以求更加全面地反映南京这座城市以及金陵诗词的全貌。全书按年代排序、简要介绍作者生平及诗词的写作年代和背景，有助于读者深入了解诗词作品的内涵。",
                    bookmark: require("../../assets/second/bookmark-line.png"),
                },
            ],
        };
    },
    methods: {},
};
</script>
<style lang="scss">
/* reset element-ui css */
.mybook_box {
    .mybook_input .el-input__inner {
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
.mybook_box {
    width: 100%;
    height: auto;
    display: flex;
    background: rgba(237, 239, 243, 1);
}
.mybook_box_left {
    width: 207px;
    height: auto;
    background: red;
}
.mybook_box_right {
    width: auto;
    margin-left: 30px;
}
.mybook_box_t {
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
.mybook_left {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    display: flex;
    align-items: center;
}
.mybook_left_n {
    font-size: 24px;
    line-height: 35px;
}
.mybook_totle {
    margin-left: 34px;
    font-size: 12px;
    font-weight: 400;
    color: #9b9b9b;
}
.mybook_right {
    display: flex;
    align-items: center;
}
.mybook_input {
    margin-right: 36px;
    position: relative;
}
.mybook_input_i {
    width: 19px;
    height: 19px;
    position: absolute;
    right: 30px;
    top: 10px;
}
.mybook_mine {
    width: 1100px;
    margin: 22px 70px 80px 0;
    display: flex;
    flex-wrap: wrap;
}
.mybook_mine_box {
    width: 230px;
    height: 333px;
    background: #fff;
    margin: 0 10px 20px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    padding: 0 15px 15px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.mybook_mine_box_img {
    text-align: center;
    border-bottom: 1px dashed #979797;
}
.mybook_mine_box_i {
    width: 145px;
    height: 199px;
    margin: 30px auto 20px;
}
.mybook_mine_right {
    margin-top: 20px;
}
.mybook_mine_right_t {
    font-size: 14px;
    font-weight: 500;
    color: #363636;
}
.mybook_mine_cent {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    color: #363636;
    margin-top: 14px;
}
.bookmark {
    width: 16px;
    height: 21px;
    position: absolute;
    left: 10px;
    top: -2px;
}
</style>