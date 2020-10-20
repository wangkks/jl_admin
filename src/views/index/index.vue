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
                        <span>{{item.english}}</span>
                        <span>{{item.desc}}</span>
                    </div>
                </div>
            </div>
            <div class="file-content">

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
                {word: '史', english: 'history',desc: '史料编'},
                {word: '方', english: 'history',desc: '方志编'},
                {word: '文', english: 'history',desc: '文献编'},
                {word: '档', english: 'history',desc: '档案编'},
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
        .file-word{
            display: flex;
            align-items: center;
            justify-content: center;
            .file-word-item{
                width: 333px;
                display: flex;
                justify-content: center;
                .file-word-item-zi{
                    font-size: 100px;
                    font-family: SourceHanSerifTC-Regular, SourceHanSerifTC;
                    font-weight: 400;
                    color: #000000;
                }
                .file-word-item-eng{
                    display: flex;
                    span{
                        width:10px;
                        word-wrap:break-word;
                        font-size: 14px;
                        color:#333333;
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
