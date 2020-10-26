<template>
    <div class="bar-box">
        <div class="leftBar">
            <ul class="leftBar-t">
                <li v-for="(item,index) in children" :key="index" @click="changeBtn(index)" :class="[index==leftBarIndex?'activited':'']">{
                    <img :src="index==leftBarIndex?item.urlred:item.url" alt="">
{{index}}-{{leftBarIndex}}
                </li>
            </ul>
            <div class="leftBar-c">
                <img src="@/assets/second/icon_jianfan.png" alt="">
                <img src="@/assets/second/icon_jinian.png" alt="" style="width:30px;">
                <img src="@/assets/second/icon_biaodian.png" alt="">
            </div>
            <div class="leftBar-b">
                <img src="@/assets/second/icon_logout.png" alt="">
                <img src="@/assets/second/icon_mine.png" alt="" style="width:19px;height:20px;">
            </div>
        </div>
        <div class="rightBar">
            <logo v-if="showLogo" :collapse="isCollapse" />
            <template v-if="leftBarIndex == 1">
                <bookLibrary />
            </template>
            <template v-if="leftBarIndex == 2">
                <myBookshelf />
            </template>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import  Vue from "vue";
import Logo from "./Logo";
import BookLibrary from "./BookLibrary";
import MyBookshelf from "./MyBookshelf";

export default {
    data(){
        return{
            leftBarIndex: 1,
            children: [
                {
                    url: require("@/assets/second/icon_home.png"),
                    urlred:require('@/assets/second/icon_home_red.png')
                },
                {
                    url: require('@/assets/second/icon_book.png'),
                    urlred:require('@/assets/second/icon_book_red.png')
                },
                {
                    url: require('@/assets/second/icon_bookshelf.png'),
                    urlred:require('@/assets/second/icon_bookshelf_red.png')
                },
            ]
        }
    },
    components: { Logo, BookLibrary, MyBookshelf},
    computed: {
        ...mapGetters(["sidebar"]),
        showLogo() {
            return this.$store.state.settings.sidebarLogo;
        },
        isCollapse() {
            return !this.sidebar.opened;
        },
    },
    watch:{
        leftBarIndex(){
            // this.leftBarIndex = localStorage.getItem('leftBarIndex')
        }
    },
    mounted(){
        this.leftBarIndex = localStorage.getItem('leftBarIndex') || 1;
    },
    methods: {
        changeBtn(index){
            if(index == 0){
                this.$router.push('/');
                return;
            }
            if(index == 1) {
                this.$router.push('/example');
            }
            if(index == 2) {
                this.$router.push('/myBook');
            }
            localStorage.setItem('leftBarIndex' , index);
            this.leftBarIndex = index;
        }
    },
};
</script>

<style lang="scss" scoped>
.bar-box{
    display: flex;
    .leftBar {
        width: 60px;
        height: 100%;
        background-color: #616161;
        ul{
            width: 100%;
            padding: 0;
            li{
                display: flex;
                justify-content: center;
                img{
                    width: 26px;
                    height: 24px;
                    margin: 34px auto 0;
                    padding: 0;
                }
                &.activited img{
                    width: 42px;
                    height: 42px;
                }
            }
        }
        .leftBar-c{
            width: 60px;
            position: absolute;
            top: 280px;
            left: 0;
            img{
                width: 24px;
                height: 24px;
                margin: 0 auto 33px;
                display: block;
                
            }
        }
        .leftBar-b{
            width: 60px;
            position: absolute;
            bottom: 7%;
            left: 0;
            img{
                width: 19px;
                height: 18px;
                margin: 0 auto 45px;
                display: block;
            }
        }
    }
    .rightBar{
        flex: 1;
    }
}
</style>