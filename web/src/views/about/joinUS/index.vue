<template>
    <div class="joinUs-container">
        <div class="screen-count">
            <div class="default-oposition">
                <span>岗位空缺：</span>10
            </div>
            <div class="delivery-today">
                <span>今日投递：</span>100
            </div>
        </div>
        <div class="job-need-contaienr">
            <div class="demo-collapse">
                <el-collapse v-model="activeNames" accordion>
                    <el-collapse-item name="1" class="el-collapse-item-m">
                        <template #title>
                            <div class="job-nav">
                                <p class="job-title">java实习生简dwwwwwwwwwwwwwwwwwwwwwwwwww历集</p>
                                <p class="effect-date">2025-01-01—2025-06-01</p>
                                <p class="job-need"><span>需求:</span>10<span style="margin-left: 20px;">总数:</span>10</p>
                                <p class="seperate"></p>
                                <div><el-button class="add-btn">添加</el-button></div>
                            </div>
                        </template>
                        <div class="deliver-container">
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="2" class="el-collapse-item-m">
                        <template #title>
                            <div class="job-nav">
                                <p class="job-title">java实习生简dwwwwwwwwwwwwwwwwwwwwwwwwww历集</p>
                                <p class="effect-date">2025-01-01—2025-06-01</p>
                                <p class="job-need"><span>需求:</span>10<span style="margin-left: 20px;">总数:</span>10</p>
                                <p class="seperate"></p>
                                <div><el-button class="add-btn">添加</el-button></div>
                            </div>
                        </template>
                        <div class="deliver-container">
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item name="3" class="el-collapse-item-m">
                        <template #title>
                            <div class="job-nav">
                                <p class="job-title">java实习生简dwwwwwwwwwwwwwwwwwwwwwwwwww历集</p>
                                <p class="effect-date">2025-01-01—2025-06-01</p>
                                <p class="job-need"><span>需求:</span>10<span style="margin-left: 20px;">总数:</span>10</p>
                                <p class="seperate"></p>
                                <div><el-button class="add-btn">添加</el-button></div>
                            </div>
                        </template>
                        <div class="deliver-container">
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                            <div class="biographical">
                                <SvgIcon name="pdf" width="50px" height="50px"></SvgIcon>
                                <p class="person-name">交换生</p>
                                <p class="job-nature">java后端实习生200～300一天</p>
                                <p class="seperate"></p>
                                <p class="current-state">一面没通过</p>
                                <div>
                                    <el-button class="editor-btn">编辑</el-button>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
::v-deep .el-collapse-item__header {
    height: 100px;
    line-height: 100px;
    border-radius: 15px 15px 0 0;
    border: $border-default;
}

.joinUs-container {
    width: 100%;
    height: 100%;

    .screen-count {
        height: 130px;
        display: flex;
        align-items: center;

        .default-oposition {
            background-color: #DBF4FF;
            color: #6BA6F5;
            width: 440px;
            height: 90px;
            border-radius: $radios-15;
            font-size: $font-size-larger;
            font-weight: $font-weight-default;
            line-height: 90px;
            padding: 0 20px;
            border: $border-default;
            margin-right: 30px;
        }

        .delivery-today {
            background-color: #3EB2FF;
            color: white;
            width: 440px;
            height: 90px;
            border-radius: $radios-15;
            font-size: $font-size-larger;
            font-weight: $font-weight-default;
            line-height: 90px;
            padding: 0 20px;
            border: $border-default;
        }
    }

    .job-need-contaienr {
        height: calc(100% - 130px);
        overflow: auto;
        background-color: #F0F0F0;
        border-radius: 15px 15px 0 0;

        &::-webkit-scrollbar {
            display: none;
        }

        .el-collapse-item__header {
            height: 100px;

            .job-nav {
                height: 100px;
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 20px;

                .job-title {
                    font-size: $font-size-large;
                    font-weight: $font-weight-default;
                    margin-right: 20px;
                    max-width: 500px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .effect-date {
                    font-size: $font-size-normal;
                    margin-right: 20px;
                }

                .job-need {
                    font-size: $font-size-normal;
                    color: #777777;
                }

                .seperate {
                    flex: 1;
                }

                .add-btn {
                    font-size: $font-size-small;
                    width: 130px;
                    height: 44px;
                }

            }
        }


        .deliver-container {
            height: 300px;
            background-color: #F0F0F0;
            overflow: auto;
            border: $border-default;

            &::-webkit-scrollbar {
                display: none;
            }

            .biographical {
                height: 110px;
                border: $border-default;
                background-color: white;
                display: flex;

                align-items: center;
                padding: 20px;

                p {
                    margin: 0 15px;
                    font-size: $font-size-large;
                    font-weight: $font-weight-default;

                    &.current-state {
                        font-size: $font-size-normal;
                        font-weight: 500;
                        margin-right: 60px;
                    }

                    &.seperate {
                        flex: 1;
                    }

                    &.job-nature {
                        width: 500px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }


                }

                .editor-btn {
                    width: 130px;
                    height: 40px;

                }
            }
        }
    }
}
</style>