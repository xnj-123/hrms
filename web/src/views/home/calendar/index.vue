<template>
    <div class="calendar">
        <div class="calendar-left">
            <el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]" />
        </div>
        <div class="statistics">
            <p class="salary-date">计薪日期:</p>
            <p class="date-range">2025-01-25&nbsp;~&nbsp;2025-02-25</p>
            <P class="attendance">当月考勤:</P>
            <P class="attendances"><span class="dateNums">09</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span
                    class="currentNums">21</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="totalNums">21</span></P>
            <P class="dateTips">【签到天数 | 当前天数 | 计薪天数】</P>
            <div style="text-align: center">
                <el-button class="attend" type="primary" color="#5EA6DE"><span
                        style="font-size: 28px; color:white">签&nbsp;到</span></el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.calendar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;

    .calendar-left {
        flex: 5;
    }

    .statistics {
        flex: 3;
        padding: 20px;

        .salary-date {
            font-size: $font-size-large;
            color: $system-orange;
            font-weight: $font-weight-default;
        }

        .date-range {
            font-size: $font-size-normal;
            font-weight: $font-weight-default;
            margin: 40px 0 60px 0;
            text-align: center;
        }

        .attendance {
            font-size: $font-size-large;
            color: $system-green;
            font-weight: $font-weight-default;
        }

        .attendances {
            font-size: $font-size-larger;
            font-weight: $font-weight-default;
            text-align: center;
            margin: 40px 0 20px 0;

            .currentNums {
                color: $font-gray-white;
            }

            .totalNums {
                color: $font-blue-deep;
            }
        }

        .dateTips {
            font-size: $font-size-small;
            text-align: center;
            margin-bottom: 60px;
        }

        .attend {
            width: 448px;
            height: 110px;
        }

    }
}
</style>