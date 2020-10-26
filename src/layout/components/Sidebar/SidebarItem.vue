<template>
    <div v-if="!item.hidden">
        <template v-if="!item.children">
            <el-menu-item
                :index="item.path"
                :class="[
                    'submenu-title-noDropdown',
                    '/' + $route.path.split('/')[1] + '/' + item.path ==
                    $route.path
                        ? 'activited'
                        : '',
                ]"
            >
                <img
                    :src="
                        '/' + $route.path.split('/')[1] + '/' + item.path ==
                        $route.path
                            ? item.meta.iconred
                            : item.meta.icon
                    "
                    alt=""
                    class="title-icon"
                />{{ item.meta.title }}
            </el-menu-item>
        </template>

        <el-submenu
            ref="subMenu"
            :index="resolvePath(item.path)"
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
            <!-- <sidebar-item
        v-for="(child,index) in item.children"
        :key="index"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      /> -->
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
    </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item";
import AppLink from "./Link";
import FixiOSBug from "./FixiOSBug";

export default {
    name: "SidebarItem",
    components: { Item, AppLink },
    mixins: [FixiOSBug],
    props: {
        // route object
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: "",
        },
    },
    data() {
        this.onlyOneChild = null;
        return {};
    },
    mounted() {},
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter((item) => {
                if (item.hidden) {
                    return false;
                } else {
                    this.onlyOneChild = item;
                    return true;
                }
            });

            if (showingChildren.length === 1) {
                return true;
            }

            if (showingChildren.length === 0) {
                this.onlyOneChild = {
                    ...parent,
                    path: "",
                    noShowingChildren: true,
                };
                return true;
            }

            return false;
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath;
            }
            if (isExternal(this.basePath)) {
                return this.basePath;
            }
            return path.resolve(this.basePath, routePath);
        },
    },
};
</script>
<style lang="scss">
.el-menu {
    div:last-child {
        .el-submenu {
            border: none !important;
        }
        // .el-menu-item{
        //     border-bottom: none;
        // }
    }
    .submenu-title-noDropdown {
        color: #000000 !important;
        padding-left: 50px !important;
        border-bottom: 1px dashed #979797;
        .title-icon {
            margin: 0 9px 0 -30px;
            width: 20px;
            height: 20px;
        }
        &.activited {
            color: #d0021b !important;
        }
    }
}
.el-submenu.is-opened {
    border: none;
}
.el-submenu {
    border-bottom: 1px dashed #979797;
    margin: 0 29px 0 53px;
    .el-menu-item {
        padding-left: 52px !important;
    }
    &.is-active .el-submenu__title {
        border-bottom: 1px dashed #979797;
    }
    .el-submenu__title {
        height: 40px;
        line-height: 40px;
        // margin: 0 29px 0 53px;
        padding-left: 0 !important;
        // border-bottom: 1px dashed #979797;
        color: #000000 !important;
        font-size: 14px;
        .el-submenu__icon-arrow {
            right: 0;
            margin-top: -6px;
        }
        &:last-child {
            border: none;
        }
    }
    .el-menu-item-group {
        border-left: 2px solid #979797;
        margin: 0 0 10px 0;
        .el-menu-item {
            color: #000000 !important;
            font-size: 14px;
            height: 28px;
            line-height: 28px;
            padding-left: 17px !important;
            &.activited {
                color: #d0021b !important;
            }
        }
        .el-menu-item-group__title {
            padding: 0;
        }
    }
}
</style>