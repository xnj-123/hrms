<template>
    <div class="broadcast-container" v-if="!isDetail">
        <div class="broadcast-bar">
            <el-button type="primary" class="add-btn">添&nbsp;加</el-button>
            <el-input class="broadcast-search" placeholder="请输入..."></el-input>
        </div>
        <div class="broadcast-content">
            <div class="broadcast-menu">
                <el-menu active-text-color="#6BA6F5" class="el-menu-vertical-demo" default-active="1">
                    <el-menu-item class="menu-item" v-for="item in broadcastType" :key="item.id"
                        :index="item.id.toString()"> {{ item.name
                        }}</el-menu-item>
                </el-menu>
            </div>
            <div class="broadcast-display">
                <div class="display-container">
                    <div class="boradcast-list">
                        <div class="broadcast-item">
                            <div class="broadcast-info">
                                <h3 class="info-title">
                                    2025元旦放假通知
                                </h3>
                                <p class="info-content">亲爱的小伙伴们：岁末将至，新年伊始，根据国务院办公厅通...</p>
                                <p class="info-extra"><span class="broadcast-type">#人事类</span><span
                                        class="info-source">信达科技公司</span><span>2025-01-01</span></p>
                            </div>
                            <img class="broadcast-image" />
                        </div>

                        <div class="broadcast-item">
                            <div class="broadcast-info">
                                <h3 class="info-title">2025元旦放假通知</h3>
                                <p class="info-content">亲爱的小伙伴们：岁末将至，新年伊始，根据国务院办公厅通...</p>
                                <p class="info-extra"><span class="broadcast-type">#人事类</span><span
                                        class="info-source">信达科技公司</span><span>2025-01-01</span></p>
                            </div>
                            <img class="broadcast-image" />
                        </div>

                        <div class="broadcast-item">
                            <div class="broadcast-info">
                                <h3 class="info-title">2025元旦放假通知</h3>
                                <p class="info-content">亲爱的小伙伴们：岁末将至，新年伊始，根据国务院办公厅通...</p>
                                <p class="info-extra"><span class="broadcast-type">#人事类</span><span
                                        class="info-source">信达科技公司</span><span>2025-01-01</span></p>
                            </div>
                            <img class="broadcast-image" />
                        </div>

                        <div class="broadcast-item">
                            <div class="broadcast-info">
                                <h3 class="info-title">2025元旦放假通知</h3>
                                <p class="info-content">亲爱的小伙伴们：岁末将至，新年伊始，根据国务院办公厅通...</p>
                                <p class="info-extra"><span class="broadcast-type">#人事类</span><span
                                        class="info-source">信达科技公司</span><span>2025-01-01</span></p>
                            </div>
                            <img class="broadcast-image" />
                        </div>

                        <div class="broadcast-item">
                            <div class="broadcast-info">
                                <h3 class="info-title">2025元旦放假通知</h3>
                                <p class="info-content">亲爱的小伙伴们：岁末将至，新年伊始，根据国务院办公厅通...</p>
                                <p class="info-extra"><span class="broadcast-type">#人事类</span><span
                                        class="info-source">信达科技公司</span><span>2025-01-01</span></p>
                            </div>
                            <img class="broadcast-image" />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </div>
    <div class="broadcast-detail" v-if="isDetail">
        <div class="backTag">
            <el-button class="back-btn" @click="isDetail = false">返回</el-button>
            <span>公告详情</span>
        </div>

        <div class="detail-item">
            <h3 class="item-title">2025元旦放假通知</h3>
            <p><span style="margin-right: 20px;">信达同事</span><span>放假通知</span></p>
            <p>2025-01-01</p>
            <p>各位同学:</p>
            <p class="item-content">岁末将至，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。，新年伊始，根据国家国务院通知，我司放假时间为2025-1-1 ～
                2025-1-3。元旦快乐！愿你的每一天都充满阳光和欢笑，每一步都走向幸福和成功。新的一年，希望你平安顺遂，心想事成。</p>
            <div class="editor-info">
                <p class="right">信达科技公司</p>
                <p class="right">2025-02-21</p>
            </div>
            <el-divider style="width:200px" />
            <div class="item-addition">
                <span>附件：</span>
                <div class="addition-source">
                    <div style="height:200px;background-color: bisque;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { broadcastType } from '@/common/index.ts';
import { ref } from 'vue';

const isDetail = ref<boolean>(true);

</script>

<style scoped lang="scss">
.broadcast-container {
    width: 100%;
    height: calc(100vh - 168px);

    .broadcast-bar {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.2);
        z-index: 1;

        .add-btn {
            width: 100px;
            height: 40px;
            background-color: #129EFB;
            font-size: $font-size-smaller;
            font-weight: $font-weight-default;
        }

        .broadcast-search {
            width: 325px;
            height: 40px;
        }
    }

    .broadcast-content {
        width: 100%;
        height: calc(100% - 100px);
        background-color: $system-color-background-gray;
        display: flex;
        user-select: none;

        .broadcast-menu {
            width: 280px;
            height: 100%;
            background-color: #fff;

            .el-menu-item.is-active {
                background-color: #F6F6F7;
                font-weight: $font-weight-default;
            }

            .menu-item {
                font-size: $font-size-smaller;
            }
        }

        .broadcast-display {
            flex: 1;
            height: 100%;
            padding: 20px;
            border: $border-default;

            .display-container {
                height: 100%;
                background-color: #fff;
                padding: 20px 30px;
                border-radius: $radios-default;


                .boradcast-list {
                    overflow: auto;
                    width: 100%;
                    height: 100%;

                    .broadcast-item {
                        width: 100%;
                        height: 150px;
                        border-bottom: $border-default;
                        display: flex;
                        align-items: center;

                        .broadcast-info {
                            flex: 1;
                            height: 100%;
                            padding: 20px 0;

                            .info-title {
                                font-size: $font-size-normal;
                                font-weight: $font-weight-default;
                                margin-bottom: 30px;
                            }

                            .info-content {
                                font-size: $font-size-smaller;
                                color: $system-color-text-gray;
                                margin-bottom: 10px;
                            }

                            .info-extra {
                                font-size: $font-size-smaller;
                                color: $system-color-text-gray;

                                .info-source {
                                    margin: 0 20px;
                                }

                                .broadcast-type {
                                    color: $system-color-text-blue;
                                }
                            }
                        }

                        .broadcast-image {
                            width: 192px;
                            height: 110px;
                            border-radius: $radios-15;
                        }
                    }
                }
            }
        }
    }
}

.broadcast-detail {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .backTag {
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: $font-size-small;
        position: relative;
        font-weight: $font-weight-default;
        border-bottom: $border-default;

        .back-btn {
            width: 100px;
            height: 45px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            border-radius: $radios-default;
            font-size: $font-size-smaller;
            font-weight: $font-weight-default;
        }
    }

    .detail-item {
        flex: 1;
        overflow-y: auto;
        padding: 50px 250px;

        .item-title {
            font-size: $font-size-normal;
            font-weight: $font-weight-default;
            word-wrap: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 40px;
        }

        p {
            color: $chatroom-content-color;
            margin-bottom: 10px;
        }

        .editor-info {
            padding: 20px 160px 0 0;

            .right {
                text-align: right;
                font-weight: $font-weight-default;
            }
        }

        .item-content {
            padding: 0 40px;
            line-height: 40px;
        }

        .addition-source {
            padding: 0 40px;
        }

    }
}
</style>