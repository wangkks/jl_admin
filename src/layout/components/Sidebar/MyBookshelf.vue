<template>
    <div class="my-book">
        <div class="book-top">
            <div class="book-title">我的书架</div>
                <div class="circular"></div>
                <el-scrollbar wrap-class="scrollbar-wrapper">
                    <el-menu
                        :default-active="activeMenu"
                        router
                        :collapse="isCollapse"
                        :background-color="variables.menuBg"
                        :text-color="variables.menuText"
                        :unique-opened="false"
                        :active-text-color="variables.menuActiveText"
                        :collapse-transition="false"
                        mode="vertical"
                    >
                        <!-- <template v-for="(item, index) in routes.children">
                            <el-menu-item :index="routes.path+'/'+item.path" v-if="!item.children">
                                <img :src="item.meta.icon" alt="">{{item.meta.title}}
                            </el-menu-item>
                            <el-submenu
                                ref="subMenu"
                                :index="item.path"
                                popper-append-to-body
                                v-else
                            >
                                <template slot="title">
                                    <item
                                        v-if="item.meta"
                                        :icon="item.meta && item.meta.icon"
                                        :title="item.meta.title"
                                    />
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item
                                        :class="[
                                            $route.path == item.path + '/' + child.path
                                                ? 'activited'
                                                : '',
                                        ]"
                                        :index="child.path"
                                        :key="index"
                                        v-for="(child, index) in item.children"
                                        >{{ child.meta.title }}
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </template> -->
                        <sidebar-item
                            v-for="(item, index) in routes.children"
                            :key="item.path"
                            :item="item"
                            :base-path="item.path"
                        />
                    </el-menu>
                </el-scrollbar>
        </div>
    </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
import variables from "@/styles/variables.scss";
import Item from "./Item";
export default {
data(){
        return{
            bookTypeList: [
                {name: '中国语言文学'},
                {name: '二级分类'},
                {name: '三级分类'},
                {name: '四级分类'}
            ]
        }
    },
    computed:{
        ...mapGetters(["sidebar"]),
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path;
        },
        routes() {
            return this.$router.options.routes.find(item => item.path == '/myBook');
        },
        variables() {
            return variables;
        },
        isCollapse() {
            return !this.sidebar.opened;
        },
        secondPath: function() {
            // let pathSecound = this.$route.path.split("/");
            // if(pathSecound.length > 2){
            //     return pathSecound[2];
            // }
            // else{
            //     return 'null';
            // }
        }
    },
    mounted(){
    },
    methods: {
        changeBtn:function (index , path) {
            this.num=index;
            localStorage.setItem('appCreateSetUp' , index) ; 
            this.$store.commit('updateAppCreateSetUp' , index);
            this.$router.push('/activity/' + path);
        }
    },
    components:{
        SidebarItem,
        Item
    }
};
</script>
<style lang="scss" scoped>
.my-book {
    width: 210px;
    position: relative;
    .book-top{
        // border-bottom: 1px dashed #979797;
        padding-bottom: 50px;
        margin-bottom: 24px;
    }
    .circular{
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #D0021B;
        position: absolute;
        top: 60px;
        left: 26px;
        z-index: 1;
    }
    .book-title{
        font-size: 16px;
        font-family: SourceHanSerifTC-Heavy, SourceHanSerifTC;
        font-weight: 800;
        color: #000000;
        line-height: 23px;
        letter-spacing: 2px;
        padding-left: 23px;
        margin-bottom: 22px;
    }
}
</style>