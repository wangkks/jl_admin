<template>
    <div class="sidebar-logo-container" :class="{ collapse: collapse }">
        <transition name="sidebarLogoFade">
            <router-link key="collapse" class="sidebar-logo-link" to="/">
                <img src="@/assets/logo.png" class="sidebar-logo" />
            </router-link>
        </transition>
    </div>
</template>

<script>
export default {
    name: "SidebarLogo",
    props: {
        collapse: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
    width: 150px;
    height: 28px;
    margin: 39px 0 52px 28px;
    overflow: hidden;
    .sidebar-logo {
        width: 150px;
        height: 28px;
    }
}
</style>
