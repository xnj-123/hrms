<template>
    <div class="companyInfo">
        <div class="company-honor">
            <img src="/logo.png" alt="">
            <div class="company-rank">
                <div class="rank-left">
                    <p>{{ companyInfo.companyName }}</p>
                    <div>
                        <el-tag v-for="(item, index) in companyInfo.tags" :key="index" type="primary"
                            style="height:47px;font-size:20px;line-height: 47px;padding: 0 20px;margin-right: 20px;">
                            {{ item }}
                        </el-tag>
                    </div>
                </div>
                <div class="rank-right">
                    <div class="company-innovate">
                        <el-icon color="yellow">
                            <Star />
                        </el-icon>
                        <span>科创分：{{ companyInfo.innovatePoints }}分</span>
                    </div>
                    <div class="update-tiem">
                        <el-icon>
                            <View />
                        </el-icon>
                        : <span>{{ companyInfo.views }}</span>
                        <span>{{ companyInfo.updatedAt }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="company-introduce">
            <div class="company-top">
                <div class="company-left">
                    <p><span>统一社会征信信用代码：</span>{{ companyInfo.unifiedCreditCode }}</p>
                    <p><span>法定代表人：</span>{{ companyInfo.legalRepresentative }}</p>
                    <p><span>成立日期：</span>{{ companyInfo.createdDate }}</p>
                    <p><span>注册资本：</span>{{ companyInfo.registeredCapital }}</p>
                </div>
                <el-divider direction="vertical" style="height:200px" />
                <div class="company-right">
                    <p><span>电话：</span>{{ companyInfo.companyPhone }}</p>
                    <p><span>邮箱：</span>{{ companyInfo.companyEmail }}</p>
                    <p><span>网址：</span>{{ companyInfo.companyWeb }}</p>
                    <p><span>地址：</span>{{ companyInfo.companyAddress }}</p>
                </div>
            </div>
            <div class="company-bottom">
                <p>基本信息：</p>
                <div>{{ companyInfo.baseInfo }}</div>
            </div>
        </div>
        <div class="company-status">
            <div class="status-list">
                <div class="status-item">
                    <div class="status-icon">
                        <SvgIcon name="star-one" width="50px" height="50px"></SvgIcon>
                    </div>
                    <div class="status-info">
                        <span>知识产权：</span>{{ companyInfo.intellectualProperty }}
                    </div>
                </div>
                <div class="status-item">
                    <div class="status-icon">
                        <SvgIcon name="department" width="50px" height="50px"></SvgIcon>
                    </div>
                    <div class="status-info">
                        <span>实际控制人：</span>{{ companyInfo.actualController }}
                    </div>
                </div>
                <div class="status-item">
                    <div class="status-icon">
                        <SvgIcon name="clue" width="50px" height="50px"></SvgIcon>
                    </div>
                    <div class="status-info">
                        <span>公司待遇：</span>{{ companyInfo.treatment }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive } from 'vue';
import { reqGetCompanyInfo } from '@/api/constant';

let companyInfo = reactive({
    companyName: '',
    tags: [],
    innovatePoints: 0,
    views: 0,
    updatedAt: '',
    unifiedCreditCode: '',
    legalRepresentative: '',
    createdDate: '',
    registeredCapital: '',
    companyPhone: '',
    companyEmail: '',
    companyWeb: '',
    companyAddress: '',
    baseInfo: '',
    intellectualProperty: '',
    actualController: '',
    treatment: '',
})

onMounted(() => {
    getCompanyInfo()
})

const getCompanyInfo = async () => {
    let res: any = await reqGetCompanyInfo();
    if (res)
        Object.assign(companyInfo, res);
}


</script>

<style scoped lang='scss'>
.companyInfo {
    width: 100%;
    height: 100%;
    border: $border-default;
    padding: 30px;
    display: flex;
    flex-direction: column;

    .company-honor {
        height: 130px;
        display: flex;
        margin-bottom: 30px;

        img {
            width: 130px;
            height: 130px;
            box-sizing: border-box;
            border: $border-default;
            margin: 0 30px 30px 0;
            border-radius: $radios-10;
        }

        .company-rank {
            flex: 1;
            display: flex;

            .rank-left {
                flex: 1;
                height: 100%;
                font-size: $font-size-larger;
                font-weight: $font-weight-default;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .rank-right {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-end;

                .company-innovate {
                    border: $border-default;
                    width: 270px;
                    height: 57px;
                    line-height: 57px;
                    text-align: center;
                    color: #6BA6F5;
                    background-color: #F5F9FE;
                    font-size: $font-size-normal;
                    font-weight: $font-weight-default;
                }

                .update-tiem {
                    font-size: $font-size-normal;
                    font-weight: $font-weight-default;

                    span:last-child {
                        margin-left: 30px;
                    }
                }
            }
        }
    }

    .company-introduce {
        background-color: #F5F9FE;
        border-radius: $radios-15;
        font-size: $font-size-normal;
        line-height: 50px;
        padding: 30px;
        border: $border-default;
        margin-bottom: 30px;

        .company-top {
            display: flex;

            .company-left {
                flex: 1;
            }

            .company-right {
                flex: 1;
                padding-left: 20px;
            }
        }

        .company-bottom {
            display: flex;

            p {
                height: 100%;
                max-width: 200px;
                white-space: nowrap;
            }
        }
    }

    .company-status {
        flex: 1;
        background-color: #F5F9FE;
        border-radius: $radios-15;
        border: $border-default;
        padding: 30px;
        overflow: auto;

        .status-list {
            display: flex;
            overflow: auto;
            min-width: 0;

            .status-item {
                flex: 1;
                display: flex;
                font-size: $font-size-normal;
                line-height: 50px;


                .status-icon {
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>