<template>
    <div class="logo-container">
        <img :src="config.logo" alt="logo" class="logo-img" />
        <h1 class="logo-title" :style="{ display: layoutStore.isExpend ? 'none' : 'block' }">{{ config.systemName }}
        </h1>
    </div>
</template>

<script setup lang='ts'>
import config from '@/config.ts';
import { useLayoutStore } from '@/stores/layout';
const layoutStore = useLayoutStore();

</script>

<style scoped lang='scss'>
.logo-container {
    display: flex;
    height: $logo-height;
    justify-content: center;
    align-items: center;

    .logo-img {
        width: $logo-icon-size;
        height: $logo-icon-size;
        border-radius: $radios-default;
    }

    .logo-title {
        margin-left: 20px;
        color: $logo-color;
        font-size: $logo-font-size;
        font-weight: $font-weight-bold;
    }
}
</style>