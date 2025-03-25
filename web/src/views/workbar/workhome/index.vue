<template>
    <div class="workhome-container">
        <div class="workhome-broadcast">
            <div class="carousel-contaienr">
                <el-carousel motion-blur height="207px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="broadcast-container">
                <div class="broadcast-title">
                    <img class="report-icon" src="@/assets/images/report.png" alt="">
                    <span>公&nbsp;告&nbsp&gt;</span>
                </div>
                <ul class="broadcast-list">
                    <li class="broadcast-item">
                        <div class="broadcast-item-title">关于开展202aaaaaaaaaaaaaaaaaaaaaaaaaaa3年“全国中小学教师信息技术应用能力提升工程”培训的通知
                        </div>
                        <span class="broadcast-item-date">2025-11-12</span>
                    </li>
                    <li class="broadcast-item">
                        <div class="broadcast-item-title">关于开展202aaaaaaaaaaaaaaaaaaaaaaaaaaa3年“全国中小学教师信息技术应用能力提升工程”培训的通知
                        </div>
                        <span class="broadcast-item-date">2025-11-12</span>
                    </li>
                    <li class="broadcast-item">
                        <div class="broadcast-item-title">关于开展202aaaaaaaaaaaaaaaaaaaaaaaaaaa3年“全国中小学教师信息技术应用能力提升工程”培训的通知
                        </div>
                        <span class="broadcast-item-date">2025-11-12</span>
                    </li>
                    <li class="broadcast-item">
                        <div class="broadcast-item-title">关于开展202aaaaaaaaaaaaaaaaaaaaaaaaaaa3年“全国中小学教师信息技术应用能力提升工程”培训的通知
                        </div>
                        <span class="broadcast-item-date">2025-11-12</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="workhome-app">
            <div class="app-left">
                <p class="app-circle">置顶应用</p>

                <div class="appList">
                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="app-right">
                <p class="app-circle">全员常用</p>
                <div class="appList">
                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                    <div class="app-item">
                        <div class="app-icon">
                            <SvgIcon name="register" width="60px" height="60px"></SvgIcon>
                        </div>
                        <div class="app-name">
                            <span>签到签到</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.workhome-container {
    width: 100%;
    height: 100%;
    padding: 20px;

    .workhome-broadcast {
        height: 265px;
        padding: 28px;
        border-radius: $radios-10;
        border: $border-default;
        display: flex;
        margin-bottom: 25px;

        .carousel-contaienr {
            width: 456px;
            margin-right: 28px;
        }

        .broadcast-container {
            flex: 1;

            .broadcast-title {
                margin-top: 10px;
                font-size: $font-size-normal;
                font-weight: $font-weight-bold;
                display: flex;
                align-items: center;

                .report-icon {
                    width: 38px;
                    height: 38px;
                    margin-right: 30px;
                }
            }

            .broadcast-list {
                height: 120px;
                margin-top: 30px;

                .broadcast-item {
                    width: 900px;
                    height: 30px;
                    line-height: 30px;
                    display: flex;
                    justify-content: space-between;

                    .broadcast-item-title {
                        max-width: 650px;
                        font-size: $font-size-smaller;
                        font-weight: $font-weight-default;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .broadcast-item-date {
                        font-size: $font-size-smaller;
                        font-weight: $font-weight-default;
                        color: #777777;
                    }
                }
            }

        }

        .demonstration {
            color: var(--el-text-color-secondary);
        }

        .el-carousel__item h3 {
            color: #475669;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
            text-align: center;
        }

        .el-carousel__item:nth-child(n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }

    .workhome-app {
        height: calc(100% - 290px);
        display: flex;

        .app-left {
            flex: 3;
            border: $border-default;
            border-radius: $radios-10;
            height: 100%;
            margin-right: 28px;
            padding: 28px;
        }

        .app-right {
            flex: 4;
            height: 100%;
            border: $border-default;
            border-radius: $radios-10;
            padding: 28px;
        }

        .app-circle {
            font-size: $font-size-normal;
            font-weight: $font-weight-default;
            margin-bottom: 10px;
        }

        .appList {
            display: flex;
            flex-wrap: wrap;
            height: 450px;
            height: calc(100% - 40px);
            align-content: flex-start;
            overflow-y: auto;

            .app-item {
                width: 210px;
                height: 100px;
                border-radius: $radios-10;
                display: flex;
                align-items: center;

                .app-name {
                    width: 120px;
                    margin-left: 10px;
                    font-size: $font-size-normal;
                    font-weight: $font-weight-default;
                }
            }
        }
    }
}
</style>