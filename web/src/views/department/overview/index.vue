<template>
    <div class="department-overview-container">
        <div class="department-count">
            <img src="/logo.png" alt="" class="logo">
            <div class="item-show">
                <SvgIcon name="department" width="150" height="150"></SvgIcon>
                <div class="item-text">
                    <p class="item-title">部门数: </p>
                    <P class="item-num"><span>{{ detail.departmentTotal }}</span>&nbsp;个</P>
                </div>
            </div>
            <div class="item-show">
                <SvgIcon name="role" width="150" height="150"></SvgIcon>
                <div class="item-text">
                    <p class="item-title">职位数：</p>
                    <p class="item-num"><span>{{ detail.positionTotal }}</span>&nbsp;个</p>
                </div>
            </div>
        </div>
        <div class="department-view">
            <div class="view-left">
                <div id="department-pie" style="width: 100%; height: 100%"></div>
            </div>
            <div class="view-right">
                <div v-if="detail.data?.length" id="org-chart" style="width: 100%; height: 100%"></div>
                <div v-else class="no-data">暂无部门数据</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { departmentDetail } from '@/api/department';
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import * as echarts from 'echarts';

// 响应式数据
const detail = ref<{
    data?: any[];
    departmentTotal?: number;
    positionTotal?: number;
}>({});

// 图表实例
let orgChart: echarts.ECharts | null = null;  // 组织架构图
let pieChart: echarts.ECharts | null = null;  // 饼图

// 生命周期
onMounted(() => {
    getDepartmentDetail();
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    // 销毁图表实例
    if (orgChart) {
        orgChart.dispose();
        orgChart = null;
    }
    if (pieChart) {
        pieChart.dispose();
        pieChart = null;
    }
    window.removeEventListener('resize', handleResize);
});

// API请求
const getDepartmentDetail = async () => {
    try {
        const res = await departmentDetail();
        if (res?.data) {
            detail.value = res;
            nextTick(() => {
                initOrgChart(res.data);
                initPieChart(res.data);
            });
        }
    } catch (error) {
        console.error('获取部门数据失败:', error);
    }
};

const initOrgChart = (departments: any[]) => {
    const container = document.getElementById('org-chart');
    if (!container) return;

    if (orgChart) {
        orgChart.dispose();
    }

    orgChart = echarts.init(container);
    orgChart.setOption(getOrgChartOption(departments));
};

const getOrgChartOption = (departments: any[]): echarts.EChartsOption => ({
    tooltip: { trigger: 'item', formatter: ({ data }: any) => data.name },
    series: [
        {
            type: 'tree',
            data: [generateCompanyNode(departments)], // 生成根节点
            top: '10%',
            left: '15%',
            bottom: '10%',
            right: '15%',
            symbolSize: 40,
            edgeShape: 'polyline',
            roam: true,
            zoom: 1.2,
            lineStyle: {
                width: 2,
            },
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
                fontWeight: 'bold',
                fontSize: 24,
                color: '#333',
            },
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left',
                    fontSize: 18,
                    color: '#666',
                },
            },
            expandAndCollapse: true,
            animationDuration: 550,
        },
    ]
});

const initPieChart = (departments: any[]) => {
    const container = document.getElementById('department-pie');
    if (!container) return;

    if (pieChart) {
        pieChart.dispose();
    }

    pieChart = echarts.init(container);
    pieChart.setOption(getPieChartOption(departments));
};

const getPieChartOption = (departments: any[]): echarts.EChartsOption => {
    const data = departments.map(dept => ({
        name: dept.name || '未命名部门',
        value: dept.positions?.reduce((sum: number, pos: any) =>
            sum + (pos.users?.length || 0), 0) || 0
    }));

    return {
        tooltip: {
            trigger: 'item',
            formatter: ({ data }: any) => `${data.name}<br/>人数：${data.value}人`
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 20
        },
        series: [{
            type: 'pie',
            radius: ['45%', '65%'],
            data: data,
            label: {
                formatter: '{b}\n{c}人 ({d}%)',
                fontSize: 12
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            }
        }]
    };
};

const generateCompanyNode = (departments: any[]) => ({
    name: '信达科技公司',
    children: departments.map(dept => ({
        name: `${dept.name || '未命名部门'}\n负责人：${dept.charge ? dept.charge.username : '无'}`,
        value: dept.id,
        children: dept.positions?.flatMap((position: any) =>
            position.users?.map((user: any) => ({
                name: `${user.realName} (${user.username})`,
                value: user.id
            })) || []
        ) || []
    }))
});

const handleResize = () => {
    if (orgChart) orgChart.resize();
    if (pieChart) pieChart.resize();
};
</script>

<style scoped lang='scss'>
.department-overview-container {
    width: 100%;
    height: calc(100vh - 120px);
    background-color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;

    .department-count {
        display: flex;

        .logo {
            width: 230px;
            height: 230px;
            border: $border-default;
            border-radius: $radios-default;
            display: block;
            margin-right: 80px;
        }

        .item-show {
            flex: 1;
            padding-left: 20px;
            display: flex;
            align-items: center;

            .item-text {
                margin-left: 20px;

                .item-title {
                    font-size: $font-size-larger;
                    font-weight: 600;
                    margin-bottom: 40px;

                }

                .item-num {
                    font-size: $font-size-larger;
                    font-weight: 600;
                    padding-left: 80px;

                    span {
                        color: #5B8DE7;
                    }
                }
            }
        }
    }

    .department-view {
        flex: 1;
        background-color: #F9F9F9;
        border: $border-default;
        margin-top: 30px;
        padding: 30px;
        display: flex;

        .view-left {
            flex: 1;
            border-right: $border-default;
        }

        .view-right {
            flex: 1;
        }
    }
}
</style>