<template>
    <div v-if="!item.hidden">
        <!-- <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template> -->

        <el-submenu
            ref="subMenu"
            :index="resolvePath(item.path)"
            popper-append-to-body
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
    mounted() {
        
    },
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
.el-menu div:last-child .el-submenu .el-submenu__title {
    border: none !important;
}
.el-submenu {
    .el-menu-item {
        padding-left: 52px !important;
    }
    &.is-active .el-submenu__title {
        border-bottom: 1px dashed #979797;
    }
    .el-submenu__title {
        height: 40px;
        line-height: 40px;
        margin: 0 29px 0 53px;
        padding-left: 0 !important;
        border-bottom: 1px dashed #979797;
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
        margin: 13px 0 0 64px;
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