<template>
    <div>
        <el-card style="height:80px">
            <el-form :inline="true" class="form">
                <el-form-item label="用户名:">
                    <el-input placeholder="请输入用户名" style="width:240px" v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card style="margin:10px 0">
            <el-table border style="margin:10px 0">
                <el-table-column type="selection"></el-table-column>
                <el-table-column label="#" type="index"></el-table-column>
                <el-table-column label="id" prop="id"></el-table-column>
                <el-table-column label="用户名字" prop="name"></el-table-column>
                <el-table-column label="用户名称" prop="username"></el-table-column>
                <el-table-column label="用户角色" prop="roleName"></el-table-column>
                <el-table-column label="创建时间" prop="createTime"></el-table-column>
                <el-table-column label="更新时间" prop="updateTime"></el-table-column>
                <el-table-column label="操作" fixed="right" width="300px">
                    <template #="{ row, $index }">
                        <el-button size="small" type="primary" icon="User" @click="">添加角色</el-button>
                        <el-button size="small" type="primary" icon="Edit" @click="">编辑</el-button>
                        <el-popconfirm width="220" confirm-button-text="删除" @confirm="" cancel-button-text="取消"
                            icon="InfoFilled" icon-color="#626AEF" :title="`你确定要删除${row.name}吗？`">
                            <template #reference>
                                <el-button size="small" type="danger" icon="Delete">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang='scss'>
.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>