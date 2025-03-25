<template>
    <div class="layout-container">
        <div class="aside" :class="{ fold: layoutStore.isExpend }">
            <Aside></Aside>
        </div>
        <div class="ahead" :class="{ fold: layoutStore.isExpend }">
            <Ahead></Ahead>
        </div>
        <div class="main" :class="{ fold: layoutStore.isExpend }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Aside from './aside/index.vue'
import Ahead from './ahead/index.vue'
import Main from './main/index.vue'
import { useLayoutStore } from '@/stores/layout';

const layoutStore = useLayoutStore()

</script>

<style scoped lang='scss'>
.layout-container {
    height: 100vh;
    width: 100%;
    position: relative;

    .aside {
        width: $aside-width;
        height: 100vh;
        background-color: $aside-color-default;
        transition: all 0.3s ease;
        user-select: none;

        &.fold {
            width: $aside-expand-width;
        }
    }

    .ahead {
        width: calc(100% - $aside-width);
        height: $ahead-height;
        position: absolute;
        left: $aside-width;
        top: 0;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
        z-index: 10;
        transition: all 0.3s ease;
        user-select: none;

        &.fold {
            width: calc(100% - $aside-expand-width);
            left: $aside-expand-width;
        }
    }

    .main {
        width: calc(100% - $aside-width);
        height: calc(100vh - $ahead-height);
        position: absolute;
        left: $aside-width;
        top: $ahead-height;
        padding: 20px 20px 0 20px;
        background-color: $system-color-background-gray;
        transition: all 0.3s ease;
        overflow: auto;

        &.fold {
            width: calc(100% - $aside-expand-width);
            left: $aside-expand-width;
        }
    }
}
</style>