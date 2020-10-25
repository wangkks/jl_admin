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
            <div class="bookList-title">
                <span class="bookList-new">最新上架</span>
                <span class="bookList-more" @click="">more</span>
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
            <img src="@/assets/icon_banner_b.png" alt="" class="banner-img">
        </div>
        <div class="news">
            <img src="@/assets/news_bg.png" alt="" class="news_bg">
            <div class="news-box">
                <div class="news-box-l">
                    <h3>新闻动态</h3>
                    <ul>
                        <li v-for="(item,index) in newsDateList" :key="index">
                            <span>{{item.day}}</span>
                            <span>{{item.month}} {{item.year}}</span>
                        </li>
                    </ul>
                </div>
                <div class="news-box-r">
                    <div class="news-more">
                        <span @click="">more</span>
                    </div>
                    <ul>
                        <li v-for="(item,index) in newsList" :key="index">
                            <span>{{item.title}}</span>
                            <span>{{item.content}}</span>
                            <img :src="item.img" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
            <img src="@/assets/icon_banner_b.png" alt="" class="banner-img">
            <span>京公网安备 11010102004165号   京ICP备05067311号-1   © 2001- 现在  南京出版社</span>
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
            newsDateList: [
                {year: 2020,month: 10,day: 30},
                {year: 2020,month: 10,day: 29},
                {year: 2020,month: 10,day: 28},
                {year: 2020,month: 10,day: 27},
            ],
            newsList: [
                {title: '三百年前的“神仙打架”？中国vs日本，灼热匠心决战“伊万里”！',content: '古今中外，神仙打架的事数不胜数。不过，很多人都不知道，一衣带水的中日两国工匠，围绕着瓷器这一“白色金子”，也曾进行过一场长达百年的精彩对决古今中外，神仙打架的事数不胜数。不过，很多人都不知道一衣带水的中日两国工匠，围绕着瓷器这一“白色金子”，也曾进行过一场长达百年的精彩对决',img: require("../../assets/second/bitmap_bg.png"),},
                {title: '三百年前的“神仙打架”？中国vs日本，灼热匠心决战“伊万里”！',content: '古今中外，神仙打架的事数不胜数。不过，很多人都不知道，一衣带水的中日两国工匠，围绕着瓷器这一“白色金子”，也曾进行过一场长达百年的精彩对决',img: require("../../assets/second/bitmap_bg.png"),},
                {title: '三百年前的“神仙打架”？中国vs日本，灼热匠心决战“伊万里”！',content: '古今中外，神仙打架的事数不胜数。不过，很多人都不知道，一衣带水的中日两国工匠，围绕着瓷器这一“白色金子”，也曾进行过一场长达百年的精彩对决',img: require("../../assets/second/bitmap_bg.png"),},
                {title: '三百年前的“神仙打架”？中国vs日本，灼热匠心决战“伊万里”！',content: '古今中外，神仙打架的事数不胜数。不过，很多人都不知道，一衣带水的中日两国工匠，围绕着瓷器这一“白色金子”，也曾进行过一场长达百年的精彩对决',img: require("../../assets/second/bitmap_bg.png"),},
            ]
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
        width: 1230px;
        margin: 23px auto 0;
        .bookList-title{
            margin: 0 0 23px;
            display: flex;
            justify-content: space-between;
            .bookList-new{
                width: 225px;
                font-size: 24px;
                color: #D0021B;
                border-bottom: 2px solid #D0021B;
                text-align: left;
                padding: 17px 0 27px 12px;
            }
            .bookList-more{
                width: 100px;
                height: 33px;
                text-align: center;
                line-height: 33px;
                font-size: 14px;
                color: #363636;
                border: 1px solid #979797;
                margin-top: 17px;
            }
        }
        .mybook_mine {
            display: flex;
            flex-wrap: wrap;
            .mybook_mine_box {
                width: 230px;
                height: 333px;
                background: #fff;
                margin: 0 20px 20px 0;
                box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                border: 1px solid #e6e6e6;
                padding: 0 15px 15px;
                display: flex;
                flex-direction: column;
                position: relative;
                &:nth-child(5n){
                    margin-right: 0;
                }
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
        .banner-img{
            margin: 30px auto 24px;
            width: 49px;
            height: 42px;
        }
    }
    .news{
        position: relative;
        height: 1045px;
        .news_bg{
            width: 100%;
        }
        .news-box{
            width: 84%;
            height: 825px;
            position: absolute;
            top: 150px;
            left: 0;
            background-color: #fff;
            display: flex;
        }
        .news-box-l{
            width: 33%;
            border-right: 1px solid #CBCBCB;
            h3{
                width: 225px;
                height: 120px;
                line-height: 120px;
                color: #D0021B;
                font-size: 24px;
                padding-left: 12px;
                margin: 0 0 0 auto;
            }
        }
        ul{
            width: 225px;
            margin: 0 0 0 auto;
            padding: 0;
            li{
                height: 171px;
                // line-height: 171px;
                border-top: 2px solid #D0021B;
                padding-left: 12px;
                color: #363636;
                margin-right: 9px;
                span{
                    display: block;
                    font-size: 14px;
                    &:first-child{
                        margin: 50px 0 12px;
                        font-size: 24px;
                    }
                }
            }
        }
        .news-box-r{
            flex: 1;
            .news-more{
                display: flex;
                justify-content: flex-end;
                height: 120px;
                span{
                    width: 100px;
                    height: 33px;
                    text-align: center;
                    line-height: 33px;
                    font-size: 14px;
                    color: #363636;
                    border: 1px solid #979797;
                    margin: 43px 35px 0 0;
                }
            }
            ul{
                width: 500px;
                margin: 0;
                margin-left: 9px;
                // margin-right: 74px;
                li{
                    border-top: 1px solid #CBCBCB;
                    padding-right: 20px;
                    position: relative;
                    span{
                        display: block;
                        font-size: 14px;
                        line-height: 20px;
                        &:first-child{
                            margin: 50px 0 12px;
                            font-size: 16px;
                        }
                        &:nth-of-type(2){
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                    }
                    img{
                        width: 225px;
                        height: 140px;
                        position: absolute;
                        top: 2px;
                        right: -270px;
                    }
                }
            }
        }
    }
    .footer{
        width: 100%;
        height: 198px;
        background-color: rgba(221,162,129, 0.15);
        text-align: center;
        .logo {
            img {
                width: 141px;
                height: 26px;
                margin: 47px auto 21px;
            }
        }
        .banner-img{
            margin: 0 auto 17px;
            width: 49px;
            height: 42px;
            display: block;
        }
        span{
            font-size: 14px;
            color: #4A4A4A;
        }
    }
}
</style>
