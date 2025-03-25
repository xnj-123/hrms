<template>
    <div class="salary-overview-container">
        <div class="salary-nav">
            <div class="salary-detail">
                <p class="salary-date">2025-01-01</p>
                <p class="salary-time">12:00:00</p>
            </div>
            <div class="salary-setting">
                <p><span>发薪日期：</span><span>每月25号</span>
                    <SvgIcon name="setting" style="display: inline-block;margin-left:20px" width="60" height="60"
                        color="#3889F5">
                    </SvgIcon>
                </p>
                <div class="buttons-group">
                    <el-button class="button" type="primary">薪资发放</el-button>
                    <el-button class="button" type="primary">年终奖发放</el-button>
                    <el-button class="button" type="primary">发放明细</el-button>
                </div>
            </div>
        </div>
        <div class="salary-table">
            <div class="table-view">

            </div>
            <div class="table-text">

            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.salary-overview-container {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;


    .salary-nav {
        display: flex;
        justify-content: space-between;

        .salary-detail {
            margin-right: 40px;

            .salary-date {
                color: #5BB4E7;
                font-size: $font-size-largest;
                font-weight: $font-weight-default;
                margin-bottom: 20px;
            }

            .salary-time {
                color: #5DAFFD;
                font-size: $font-size-larger;
                font-weight: $font-weight-default;
                padding-left: 330px;
            }
        }

        .salary-setting {
            color: #3889F5;
            font-size: $font-size-larger;
            font-weight: $font-weight-default;
            line-height: 50px;

            p {
                text-align: right;
            }

            span {
                margin-right: 10px;
            }
        }

        .buttons-group {
            margin-top: 20px;

            .button {
                width: 200px;
                height: 60px;
                background-color: #3889F5;
                border-radius: $radios-default;
                margin-left: 40px;
                font-size: $font-size-normal;
                font-weight: 600;
            }
        }
    }

    .salary-table {
        margin-top: 30px;
        flex: 1;
        border: $border-default;
        padding: 30px 10px;
        display: flex;

        .table-view {
            flex: 4;
            background-color: #5BB4E7;
        }

        .table-text {
            flex: 1;
        }
    }
}
</style>