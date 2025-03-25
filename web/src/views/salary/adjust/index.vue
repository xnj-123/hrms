<template>
    <div class="salary-overview-container">
        <div class="overview-content">
            <!-- 导航标签 -->
            <div class="tagNav">
                <span :class="{ 'active': isAbout }" @click="toggleAbout(true)">职位调整</span>
                <span :class="{ 'active': !isAbout }" @click="toggleAbout(false)">员工调整</span>
            </div>
            <!-- 动态内容容器 -->
            <div class="content-wrapper">
                <AdjustTable></AdjustTable>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import AdjustTable from './adjustTable/index.vue'
import { ref } from 'vue';


</script>

<style scoped lang='scss'>
.salary-overview-container {
    width: 100%;
    height: calc(100vh - 120px);

    .overview-content {
        height: 100%;
        min-height: 0;
        display: flex;
        flex-direction: column;
        background-color: white;

        .tagNav {
            flex: 0 0 40px;
            font-size: $font-size-normal;
            user-select: none;
            line-height: 40px;
            padding: 20px 0 0 20px;

            span {
                display: inline-block;
                padding: 0 20px 10px;
                margin-right: 30px;
                transition: all 0.3s;

                &.active {
                    color: $system-color-text-blue;
                    border-bottom: 2px solid $system-color-text-blue;
                }

                &:hover {
                    opacity: 0.8;
                }
            }
        }

        .content-wrapper {
            flex: 1;
            min-height: 0;
            position: relative;
            overflow: hidden;
            margin-top: 15px;
        }
    }
}
</style>