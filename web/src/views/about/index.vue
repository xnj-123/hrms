<template>
    <div class="about-container">
        <div class="about-content">
            <!-- 导航标签 -->
            <div class="tagNav">
                <span :class="{ 'active': isAbout }" @click="toggleAbout(true)">关于公司</span>
                <span :class="{ 'active': !isAbout }" @click="toggleAbout(false)">加入我们</span>
            </div>
            <!-- 动态内容容器 -->
            <div class="content-wrapper">
                <CompanyInfo v-if="isAbout" />
                <JoinUS v-else></JoinUS>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CompanyInfo from './companyInfo/index.vue';
import JoinUS from './joinUS/index.vue';

const isAbout = ref<boolean>(true);

const toggleAbout = (value: boolean) => {
    isAbout.value = value;
    console.log(isAbout.value)
}
</script>

<style scoped lang="scss">
.about-container {
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 120px); // 全屏高度
    min-height: 600px; // 最小高度约束
    padding: 15px 30px;
    background: #fff;
    display: flex;
    flex-direction: column;

    .about-content {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;

        .tagNav {
            flex: 0 0 40px;
            font-size: $font-size-normal;
            user-select: none;

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