<template>
    <div class="wrapper">
        <div class="top">
            <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
            <div class="header">
                <el-dropdown class="avatar-container" trigger="click">
                    <div class="avatar-wrapper">
                        <i class="el-icon-user-solid"></i>
                        <span class="avatar-name">幸会，王先生</span>
                        <i class="el-icon-caret-bottom" />
                    </div>
                    <el-dropdown-menu slot="dropdown" class="user-dropdown">
                        <router-link to="/">
                            <el-dropdown-item>
                                <img src="@/assets/qq.png" alt="" class="icon" style="width: 14px;height: 14px;">我的书架
                            </el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>
                                <img src="@/assets/qq.png" alt="" class="icon">我的笔记
                            </el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>
                                <img src="@/assets/qq.png" alt="" class="icon">检索历史
                            </el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>
                                <img src="@/assets/qq.png" alt="" class="icon">阅读历史
                            </el-dropdown-item>
                        </router-link>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="layout">
                    <span>登出</span>
                    <i class="el-icon-user-solid"></i>
                </div>
                <div class="header-right">
                    <img src="@/assets/login_Bitmap.png" alt="">
                    <img src="@/assets/login_Bitmap.png" alt="">
                    <img src="@/assets/login_Bitmap.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {} from "vuex";

export default {
    name: "Index",
    computed: {

    },
};
</script>
<style lang="scss">
.icon{
    width: 14px;
    height: 14px;
    margin: 0 16px 0 0;
}
</style>
<style lang="scss" scoped>
.wrapper {
    .top {
        width: 100%;
        height: 900px;
        .logo {
            position: fixed;
            top: 26px;
            left: 159px;
            img {
                width: 199px;
                height: 37px;
            }
        }
        .header {
            display: flex;
            height: 84px;
            align-items: center;
            background-color: #dda281;
            padding-right: 80px;
            font-size: 12px;
            color: #000;
            .avatar-container{
                margin-left: auto;
                height: 29px;
                line-height: 29px;
                border-right: 3px solid #979797;
                padding: 0 14px;
                .user-dropdown{
                    .icon{
                        width: 14px !important;
                        height: 14px !important;
                        padding: 0 16px 0 22px;
                    }
                }
                .avatar-name{
                    margin: 0 7px 0 4px;
                    color: #000;
                }
            }
            .layout{
                margin: 0 0 0 14px;
                span{
                    margin-right: 8px;
                }
            }
            .header-right{
                margin-left: 21px;
                img{
                    width: 49px;
                    height: 150px;
                    margin-left: 19px;
                }
            }
        }
    }
}
</style>
