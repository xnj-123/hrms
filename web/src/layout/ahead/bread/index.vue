<template>
    <el-icon size="52px" @click="getExpand">
        <component :is="layoutStore.isExpend ? 'Expand' : 'Fold'" />
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">
            <template #default>
                <el-icon size="30px">
                    <HomeFilled />
                </el-icon>
                <span style="font-size:28px">Home</span>
            </template>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang='ts'>
import { useLayoutStore } from '@/stores/layout';
const layoutStore = useLayoutStore();

const getExpand = () => {
    layoutStore.isExpend = !layoutStore.isExpend;
}
</script>

<style scoped lang='scss'></style>