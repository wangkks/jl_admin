<template>
    <div class="wrapper">
        <HeadIndex></HeadIndex>
        <div class="banner">
            <img src="@/assets/banner.png" alt="">
            <div class="banner-content">
                <div class="search">
                    <el-input placeholder="请输入关键字" v-model="searchContent"></el-input>
                    <img src="@/assets/icon_search.png" alt="">
                </div>
                <div class="banner-desc">是距今600多年前明朝中央政府在南京编纂《永乐大典》以来，南京地方政府对南京文献的首次系统编簒整理<br>同时，也是南京自行组织编纂的最大规模的出版工程</div>
                <img src="@/assets/icon_banner_b.png" alt="" class="banner-img">
            </div>
        </div>
        <div class="file-desc">
            <div class="file-word">
                <div class="file-word-item" v-for="item in wordsList" :key="item.word">
                    <div class="file-word-item-zi">{{item.word}}</div>
                    <div class="file-word-item-eng">
                        <span >{{item.english}}</span>
                        <span>{{item.desc}}</span>
                    </div>
                </div>
            </div>
            <div class="file-content">
                <div class="file-content-item" v-for="item in wordsContentList" :key="item.word">
                    <div class="file-content-con">
                        <div class="file-content-top">{{item.word}}</div>
                        <div class="file-content-l">
                            <span>{{item.content}}</span>
                        </div>
                        <div class="file-content-r">{{item.desc}}</div>
                    </div>
                    <img src="@/assets/img_shu.png" alt="" class="file-content-img">
                </div>
            </div>
            <img src="@/assets/icon_banner_b.png" alt="" class="banner-img">
        </div>
        <div class="bookList">
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
import HeadIndex from '@/components/head/index.vue'

export default {
    name: "Index",
    data(){
        return {
            searchContent: '',
            wordsList: [
                {word: '史', english: 'History',desc: '史料编'},
                {word: '方', english: 'History',desc: '方志编'},
                {word: '文', english: 'History',desc: '文献编'},
                {word: '档', english: 'History',desc: '档案编'},
            ],
            wordsContentList: [
                {word: '史', content: '乙编是南京历代方志以外的史料乙编是南京历代方志以乙编是南京历代方志以外的史料乙编是南京历代方志以',desc: '史料编'},
                {word: '方', content: '乙编是南京历代方志以外的史料乙编是南京历代方志以乙编是南京历代方志以外的史料乙编是南京历代方志以',desc: '方志编'},
                {word: '文', content: '乙编是南京历代方志以外的史料乙编是南京历代方志以乙编是南京历代方志以外的史料乙编是南京历代方志以',desc: '文献编'},
                {word: '档', content: '乙编是南京历代方志以外的史料乙编是南京历代方志以乙编是南京历代方志以外的史料乙编是南京历代方志以',desc: '档案编'},
            ],
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
        }
    },
    computed: {

    },
    components:{
		HeadIndex,
	},
};
</script>
<style lang="scss">
    .search .el-input__inner{
        width: 629px;
        height: 49px;
        border: none;
        background-image: url(../../assets/search_bg.png);
        background-size: 100%;
        background-color: initial;
        padding: 0 60px 0 30px;
    }
</style>
<style lang="scss" scoped>
.wrapper {
    background-color: #F5F5F4;
    .banner{
        position: relative;
        img{
            width:100%;
            // height: 900px;
        }
        .banner-content{
            position: absolute;
            bottom: 20px;
            left: 50%;
            margin-left: -358px;
            text-align: center;
            .search{
                width: 629px;
                height: 49px;
                overflow: hidden;
                position: relative;
                margin: 0 auto;
                img{
                    position: absolute;
                    right: 30px;
                    top: 15px;
                    width: 19px;
                    height: 19px;
                }
            }
            .banner-desc{
                color: #330000;
                font-size: 14px;
                line-height: 30px;
                letter-spacing: 1px;
                text-align: center;
                margin: 13px 0 30px;
            }
            .banner-img{
                width: 49px;
                height: 42px;
                margin: 0 auto;
                display: block;
            }
        }
    }
    .file-desc{
        width: 100%;
        height: 900px;
        background-color: #fff;
        text-align: center;
        padding: 67px 0 27px;
        position: relative;
        .file-word{
            display: flex;
            align-items: center;
            justify-content: center;
            .file-word-item{
                width: 131px;
                display: flex;
                justify-content: center;
                margin-left: 172px;
                &:first-child{
                    margin-left: 0;
                }
                .file-word-item-zi{
                    font-size: 100px;
                    font-family: SourceHanSerifTC-Regular, SourceHanSerifTC;
                    font-weight: 400;
                    color: #000000;
                }
                .file-word-item-eng{
                    display: flex;
                    span{
                        word-wrap:break-word;
                        font-size: 14px;
                        color:#333333;
                        display: block;
                        &:first-child{
                            letter-spacing: 3px;
                            transform:rotate(90deg);
                            transform-origin: 13px 22px;
                        }
                        &:last-child{
                            font-size: 16px;
                            width: 10px;
                            margin: 6px 0 0 -27px;
                        }
                    }
                }
            }
        }
        .file-content{
            margin: 69px 0 0 0;
            display: flex;
            justify-content: center;
            .file-content-item{
                width: 133px;
                height: 341px;
                border: 1px solid #A5A5A5;
                box-sizing: border-box;
                position: relative;
                margin-left: 172px;
                &:first-child{
                    margin-left: 0;
                }
                .file-content-img{
                    width: 196px;
                    height: 147px;
                    position: absolute;
                    bottom: -100px;
                    left: -150px;
                }
                .file-content-con{
                    width: 125px;
                    height: 333px;
                    border: 1px solid #A5A5A5;
                    box-sizing: border-box;
                    margin: 3px;
                    display: flex;
                    .file-content-top{
                        width: 37px;
                        height: 37px;
                        line-height: 37px;
                        text-align: center;
                        background-color: #000;
                        font-size: 20px;
                        color: #FFFFFF;
                        border-radius: 20px;
                        position: absolute;
                        top: -19px;
                        left: 48px;
                    }
                    .file-content-l{
                        letter-spacing: 3px;
                        display: flex;
                        margin: 48px 0  0 12px;
                        height: 283px;
                        border-right: 1px solid #979797;
                        // transform:rotate(90deg);
                        // transform-origin: 13px 22px;
                        span{
                            width: 80px;
                            font-size: 12px;
                            padding-top: 5px;
                            font-family: SourceHanSerifTC-Regular, SourceHanSerifTC;
                            font-weight: 400;
                            color: #909090;
                            line-height: 17px;
                            letter-spacing: 5px;
                        }
                    }
                    .file-content-r{
                        margin-top: 48px;
                        font-size: 16px;
                        line-height: 30px;
                    }
                }
            }
        }
        .banner-img{
            width: 49px;
            height: 42px;
            position: absolute;
            bottom: 27px;
            left: 50%;
            margin-left: -24px;
            display: block;
        }
    }
    .bookList{
        text-align: center;
        .mybook_mine {
            width: 1100px;
            margin: 23px auto;
            display: flex;
            flex-wrap: wrap;
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
        }
    }
}
</style>
