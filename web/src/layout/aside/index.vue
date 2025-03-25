<template>
    <div class="aside-container">
        <div class="logo">
            <Logo></Logo>
        </div>
        <div class="menu">
            <el-scrollbar class="scroller">
                <el-menu background-color="#296797" text-color="white" active-text-color="#ffffff77"
                    class="menu-container" :collapse="layoutstore.isExpend ? true : false" router>
                    <Menu></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import { useLayoutStore } from '@/stores/layout';

const layoutstore = useLayoutStore()
</script>

<style scoped lang='scss'>
.menu {

    .scroller {
        height: calc(100vh - $logo-height);

        .menu-container {
            width: 100%;
            border-right: none;
        }
    }
}
</style>