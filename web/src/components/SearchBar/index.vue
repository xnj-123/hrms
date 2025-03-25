<template>
    <el-card class="search-bar">
        <el-form inline="true">
            <el-form-item label="部门">
                <el-select v-model="value" multiple filterable remote reserve-keyword
                    placeholder="Please enter a keyword" :remote-method="remoteMethod" :loading="loading"
                    style="width: 160px; ">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="部门">
                <el-select v-model="value" multiple filterable remote reserve-keyword
                    placeholder="Please enter a keyword" :remote-method="remoteMethod" :loading="loading"
                    style="width: 160px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="职位">
                <el-select v-model="value" multiple filterable remote reserve-keyword
                    placeholder="Please enter a keyword" :remote-method="remoteMethod" :loading="loading"
                    style="width: 160px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="姓名">
                <el-select v-model="value" multiple filterable remote reserve-keyword
                    placeholder="Please enter a keyword" :remote-method="remoteMethod" :loading="loading"
                    style="width: 160px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查&nbsp;询</el-button>
                <el-button type="primary">重&nbsp;置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.search-bar {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;

    .el-form.el-form--default.el-form--label-right.el-form--inline {
        height: 32px;
    }

}
</style>