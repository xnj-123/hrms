<template>
    <div class="personn-container">
        <div class="personn-view">
            <div class="user-option">
                <div class="user-detail">
                    <img class="user-img" src="@/assets/images/admin.gif" alt="">
                    <div class="user-extra">
                        <p class="user-name">admin</p>
                        <p class="holiday-count">剩余带薪假期 8 天</p>
                    </div>
                </div>
                <el-card class="person-options">
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
                </el-card>
            </div>
            <p class="points">重要事项<span>1</span></p>
            <div class="person-info">
                <div class="app-item">
                    <div class="app-icon">
                        <SvgIcon name="check" width="60px" height="60px"></SvgIcon>
                    </div>
                    <div class="app-name">
                        <p>员工信息待完善</p>
                        <p class="gofinish">去完善&nbsp;&gt;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.personn-container {
    width: 100%;
    height: 100%;
    padding: 20px;

    .personn-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .user-option {
            flex: 1;
            border-radius: $radios-10;
            border: $border-default;
            padding: 30px;
            display: flex;
            flex-direction: column;

            .user-detail {
                height: 140px;
                margin-bottom: 60px;
                display: flex;

                .user-img {
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    border: $border-default;
                    margin-right: 40px;
                }

                .user-name {
                    margin: 20px 0 30px 0;
                    font-size: $font-size-larger;
                    font-weight: $font-weight-default;
                }

                .holiday-count {
                    font-size: $font-size-smaller;
                    font-weight: $font-weight-default;
                }
            }

            .person-options {
                flex: 1;

                .appList {
                    display: flex;
                    flex-wrap: wrap;
                    height: 450px;
                    height: calc(100% - 40px);
                    align-content: flex-start;
                    overflow-y: auto;

                    .app-item {
                        width: 240px;
                        height: 100px;
                        border-radius: $radios-10;
                        display: flex;
                        align-items: center;

                        .app-name {
                            width: 120px;
                            margin-left: 20px;
                            font-size: $font-size-normal;
                            font-weight: $font-weight-default;
                            justify-content: space-between;
                        }
                    }
                }
            }
        }

        .points {
            font-size: $font-size-smaller;
            height: 40px;
            line-height: 40px;
            padding-left: 20px;
        }

        .person-info {
            height: 115px;
            border-radius: $radios-10;
            border: $border-default;
            padding: 0 30px;


            .app-item {
                height: 115px;
                border-radius: $radios-10;
                display: flex;
                align-items: center;

                .app-name {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 120px;
                    margin-left: 20px;
                    font-size: $font-size-normal;
                    font-weight: $font-weight-default;

                    .gofinish {
                        font-size: $font-size-smaller;
                        margin-right: 20px;
                    }
                }
            }
        }

    }
}
</style>