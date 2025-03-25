<template>
    <div class="home-container">
        <el-card>
            <div class="welcome-card">
                <img src="@/assets/images/admin.gif" class="avatar" alt="">
                <div class="welcome-getTruth">
                    <p class="theTruth">
                        {{ getTruth() }}
                    </p>
                    <p class="welcome-text">
                        {{ 'admin' }} 欢迎您！
                    </p>
                </div>
            </div>
        </el-card>
        <div class="calender-contaienr">
            <Calendar></Calendar>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { getTruth } from '@/utils/getTruth.ts'
import Calendar from './calendar/index.vue';

</script>

<style scoped lang='scss'>
.home-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 30px;
    user-select: none;

    .welcome-card {
        display: flex;

        .avatar {
            width: $avatar-img;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }

        .welcome-getTruth {
            margin-left: 30px;

            .theTruth {
                margin-top: 10px;
                font-size: $font-size-larger;
                font-weight: $font-weight-default;
            }

            .welcome-text {
                font-size: $font-size-large;
                margin-top: 30px;
            }
        }
    }

    .calender-contaienr {
        margin-top: 20px;
        height: calc(100% - 220px)
    }
}
</style>