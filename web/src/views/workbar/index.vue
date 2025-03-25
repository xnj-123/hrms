<template>
    <div class="workbench-container">
        <el-header class="main-header">
            <div class="nav-controls">
                <el-button-group>
                    <el-button :disabled="!canGoBack" @click="goBack">
                        <el-icon>
                            <ArrowLeft />
                        </el-icon>
                    </el-button>
                    <el-button :disabled="!canGoForward" @click="goForward">
                        <el-icon>
                            <ArrowRight />
                        </el-icon>
                    </el-button>
                    <el-button class="refresh-btn" :disabled="!canGoForward" @click="reFresh">
                        <el-icon>
                            <Refresh />
                        </el-icon>
                    </el-button>
                </el-button-group>
            </div>
            <div class="tabs-container">
                <div class="tabs-wrapper">
                    <div v-for="tab in tabs" :key="tab.path" :class="['tab-item', { 'active': isActive(tab) }]"
                        @click="switchTab(tab)">
                        <span>{{ tab.title }}</span>
                        <el-icon v-if="!tab.pinned" class="close-icon" @click.stop="closeTab(tab)">
                            <Close />
                        </el-icon>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main class="main-content">
            <router-view v-slot="{ Component }">
                <keep-alive :include="cachedViews">
                    <component :is="Component" :key="$route.fullPath" />
                </keep-alive>
            </router-view>
        </el-main>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight, Close, Refresh } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

// 标签页数据
const tabs = ref([
    {
        title: '工作台',
        path: '/workbar/workhome',
        pinned: true
    },
    {
        title: '公告',
        path: '/workbar/broadcast',
        pinned: false,
    },
    {
        title: '信达人事',
        path: '/workbar/personn',
        pinned: false
    },
    {
        title: '考勤管理',
        path: '/workbar/attendance',
        painned: false
    }
])

// 导航历史栈
const history = ref([{ path: '/home', position: 0 }])
const currentPosition = ref(0)

// 是否可前进/后退
const canGoBack = computed(() => currentPosition.value > 0)
const canGoForward = computed(() => currentPosition.value < history.value.length - 1)

// 当前激活标签
const activeTab = computed(() => {
    return tabs.value.find(tab => tab.path === route.path)
})

// 监听路由变化
watch(() => route.fullPath, (newPath) => {
    const existingTab = tabs.value.find(tab => tab.path === newPath)
    if (!existingTab) {
        addTab({
            title: route.meta.title || '新标签',
            path: newPath
        })
    }
    updateHistory(newPath)
})

// 添加标签页
const addTab = (tab) => {
    const exists = tabs.value.some(t => t.path === tab.path)
    if (!exists) {
        tabs.value.push({
            ...tab,
            pinned: false
        })
    }
}

// 切换标签页
const switchTab = (tab) => {
    if (route.path !== tab.path) {
        router.push(tab.path)
    }
}

// 关闭标签页
const closeTab = (tab) => {
    const index = tabs.value.findIndex(t => t.path === tab.path)
    if (index !== -1) {
        tabs.value.splice(index, 1)
        if (isActive(tab)) {
            const newTab = tabs.value[index] || tabs.value[index - 1]
            router.push(newTab.path)
        }
    }
}

// 更新导航历史
const updateHistory = (path) => {
    if (history.value[currentPosition.value]?.path !== path) {
        history.value = history.value.slice(0, currentPosition.value + 1)
        history.value.push({ path, position: currentPosition.value + 1 })
        currentPosition.value = history.value.length - 1
    }
}

// 前进/后退功能
const goBack = () => {
    if (canGoBack.value) {
        currentPosition.value--
        router.push(history.value[currentPosition.value].path)
    }
}

const goForward = () => {
    if (canGoForward.value) {
        currentPosition.value++
        router.push(history.value[currentPosition.value].path)
    }
}

// 判断是否激活状态
const isActive = (tab) => {
    return tab.path === route.path
}

// 需要缓存的组件名称列表
const cachedViews = computed(() => {
    return tabs.value
        .filter(tab => tab.keepAlive)
        .map(tab => tab.componentName)
})
</script>

<style lang="scss" scoped>
.workbench-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .main-header {
        display: flex;
        align-items: end;
        padding: 0 20px;
        height: 48px;

        .nav-controls {

            .refresh-btn {
                margin: 0 10px;
            }
        }

        .tabs-container {
            flex: 1;
            overflow: hidden;

            .tabs-wrapper {
                display: flex;
                height: 40px;
                overflow-x: auto;

                .tab-item {
                    position: relative;
                    align-items: center;
                    padding: 0 30px 0 20px;
                    border-radius: 10px 10px 0 0;
                    cursor: pointer;
                    background: #f5f7fa;
                    user-select: none;
                    width: 150px;
                    text-align: center;
                    line-height: 40px;
                    margin-right: 4px;

                    &.active {
                        background: #fff;
                    }

                    .close-icon {
                        position: absolute;
                        top: 14px;
                        right: 8px;
                        font-size: 12px;
                        padding: 2px;
                        border-radius: 50%;

                        &:hover {
                            background: #f56c6c;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }

    .main-content {
        flex: 1;
        padding: 0px;
        background: #fff;
    }
}
</style>