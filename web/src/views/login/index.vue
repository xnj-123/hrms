<template>
    <div class="login-container">
        <el-row>
            <el-col :span="12"></el-col>
            <el-col :span="12">
                <div class="form-container">
                    <div class="systemInfo">
                        <h1>{{ config.systemName }}</h1>
                        <h2>——{{ config.systemType }}</h2>
                    </div>
                    <el-form class="login-form">
                        <h1>Welcome !</h1>
                        <h2>欢迎您的登陆！！！</h2>
                        <el-form-item>
                            <el-input prefix-icon="User" v-model="user.username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input prefix-icon="Lock" v-model="user.password" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="login-btn" type="primary">登&nbsp;&nbsp;录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import config from '@/config.ts'
import { ref } from 'vue';

let user = ref({
    username: '',
    password: ''
})

</script>

<style scoped lang='scss'>
.login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/login_bg.png') center center / cover no-repeat;

    .form-container {
        position: relative;
        top: 30vh;
        width: 700px;
    }

    .systemInfo {

        h1 {
            font-size: $font-size-largest;
            color: $font-color;
            font-weight: $font-weight-bold;
            letter-spacing: $letter-space-large;
            font-family: Verdana, sans-serif;
        }

        h2 {
            font-size: $font-size-large;
            color: $font-color;
            font-weight: $font-weight-default;
            letter-spacing: $letter-space-normal;
            margin: 40px 0 80px 0;
            text-align: right;
        }
    }

    .login-form {
        width: 700px;
        padding: 20px 45px;
        background: url('@/assets/images/login_form.png') center center / cover no-repeat;

        h1 {
            font-size: $font-size-large;
            color: $font-color;
            font-weight: $font-weight-default;
        }

        h2 {
            font-size: $font-size-smaller;
            color: $font-color;
            font-weight: $font-weight-default;
            margin: 20px 0;
        }

        .login-btn {
            width: 100%;
        }
    }
}
</style>