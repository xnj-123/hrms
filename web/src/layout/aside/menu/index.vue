<template>
    <el-menu-item index="/home">
        <el-icon>
            <HomeFilled />
        </el-icon>
        <template #title>
            <span>首页</span>
        </template>
    </el-menu-item>
    <el-menu-item index="/chatroom">
        <el-icon>
            <Message />
        </el-icon>
        <template #title>
            <span>消息</span>
        </template>
    </el-menu-item>
    <el-menu-item index="/workbar">
        <el-icon>
            <Odometer />
        </el-icon>
        <template #title>
            <span>工作台</span>
        </template>
    </el-menu-item>
    <el-sub-menu index="/salary">
        <template #title>
            <el-icon>
                <Coin />
            </el-icon>
            <span>薪资管理</span>
        </template>
        <el-menu-item index="/salary/overview">
            <el-icon>
                <PieChart />
            </el-icon>
            <template #title>
                <span>薪资概况</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/salary/adjust">
            <el-icon>
                <Discount />
            </el-icon>
            <template #title>
                <span>薪资调整</span>
            </template>
        </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/department">
        <template #title>
            <el-icon>
                <Money />
            </el-icon>
            <span>部门管理</span>
        </template>
        <el-menu-item index="/department/overview">
            <el-icon>
                <Guide />
            </el-icon>
            <template #title>
                <span>部门概况</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/department/adjust">
            <el-icon>
                <Briefcase />
            </el-icon>
            <template #title>
                <span>部门调整</span>
            </template>
        </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/permission">
        <template #title>
            <el-icon>
                <Stamp />
            </el-icon>
            <span>权限管理</span>
        </template>
        <el-menu-item index="/permission/user">
            <el-icon>
                <Place />
            </el-icon>
            <template #title>
                <span>用户管理</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/permission/role">
            <el-icon>
                <EditPen />
            </el-icon>
            <template #title>
                <span>角色管理</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/permission/menu">
            <el-icon>
                <Operation />
            </el-icon>
            <template #title>
                <span>菜单管理</span>
            </template>
        </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/about">
        <el-icon>
            <WarningFilled />
        </el-icon>
        <template #title>
            <span>关于公司</span>
        </template>
    </el-menu-item>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
:deep(.el-sub-menu__title) {
    font-size: $font-size-small;
    height: 64px;

    span {
        margin-left: 10px;
    }

    .el-icon {
        font-size: $font-size-large;
        width: $font-size-large;
    }
}

.el-menu-item {
    font-size: $font-size-small;
    height: 64px;
    text-align: center;

    .el-icon {
        font-size: $font-size-large;
        width: $font-size-large;
    }

    span {
        margin-left: 10px;
    }

    .el-menu-tooltip__trigger.el-tooltip__trigger.el-tooltip__trigger .el-icon {
        margin-left: 30px;
    }
}

.el-menu-item.is-active {
    background-color: $aside-color-choosed;
}

.el-sub-menu {

    .el-sub-menu__title.el-tooltip__trigger.el-tooltip__trigger {

        .el-icon {
            font-size: $font-size-large;
            width: $font-size-large;
            margin-left: 30px;
        }
    }
}
</style>