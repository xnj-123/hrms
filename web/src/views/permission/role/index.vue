<template>
    <div>
        <el-card style="height:80px;margin-bottom:10px">
            <el-form class="form" :inline="true">
                <el-form-item label="职位搜索">
                    <el-input placeholder="请输入搜索职位的关键字" v-model="keyword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">搜索</el-button>
                    <el-button type="primary" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <el-button icon="Plus" type="primary" @click="addRole">添加职位</el-button>
            <el-table border style="margin:10px 0" :data="roleArr">
                <el-table-column label="#" type="index"></el-table-column>
                <el-table-column label="ID" prop="id"></el-table-column>
                <el-table-column label="职位名称" prop="roleName"></el-table-column>
                <el-table-column label="创建时间" prop="createTime"></el-table-column>
                <el-table-column label="更新时间" prop="updateTime"></el-table-column>
                <el-table-column label="操作" width="300px" fixed="right">
                    <template #="{ row }">
                        <el-button icon="User" type="primary" size="small" @click="requireAlc(row)">分配权限</el-button>
                        <el-button icon="Edit" type="primary" size="small" @click="editRole(row)">编辑</el-button>
                        <el-button icon="Delete" type="primary" size="small" @click="deleteRole(row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <el-drawer>


        </el-drawer>
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