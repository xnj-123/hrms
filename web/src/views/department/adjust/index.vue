<template>
    <div>
        <el-card style="height:80px; margin-bottom:20px">
            <el-form class="form" :inline="true" :model="searchForm">
                <el-form-item label="部门类别：" prop="dtype">
                    <el-select placeholder="请选择部门类别" v-model="searchForm.dtype" style="width: 200px" clearable>
                        <el-option v-for="item in departmentType" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="部门名称：" prop="name">
                    <el-input placeholder="请输入部门名称" v-model="searchForm.keyWord"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getDepartmentList">搜索</el-button>
                    <el-button type="primary" @click="resetDepartment">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card>
            <el-button icon="Plus" type="primary"
                @click="() => { initAddForm(); dialogFormVisible = true }">添加部门</el-button>
            <el-table border style="margin:10px 0" :data="tableData" max-height="calc(100vh - 370px)" load="true">
                <el-table-column label="#" type="index" :index="indexMethod"></el-table-column>
                <el-table-column label="部门名称" prop="name"></el-table-column>
                <el-table-column label="部门类别" prop="dtype">
                    <template #="{ row }">
                        {{departmentType.find(item => item.value === row.dtype)?.label || ''}}
                    </template>
                </el-table-column>
                <el-table-column label="负责人" prop="charge">
                    <template #="{ row }">
                        {{ row.charge?.username || '' }}
                    </template>
                </el-table-column>
                <el-table-column label="当前职位数" prop="positionCount"></el-table-column>
                <el-table-column label="部门人数" prop="positions">
                    <template #="{ row }">
                        {{row.positions.length > 0 ? row.positions?.reduce((sum: number, item: any) => sum +
                            (item?.userCount || 0), 0) : 0}}
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" prop="createdAt" :formatter="timeFoamat"></el-table-column>
                <el-table-column label="更新时间" prop="updatedAt" :formatter="timeFoamat"></el-table-column>
                <el-table-column label="操作" width="300px" fixed="right">
                    <template #="{ row }">
                        <el-button icon="User" type="primary" size="small" @click="requireAlc(row)">查看</el-button>
                        <el-button icon="Edit" type="primary" size="small" @click="editDepartment(row)">编辑</el-button>
                        <el-popconfirm width="220" confirm-button-text="删除" @confirm="deleteDepartment(row.id)"
                            cancel-button-text="取消" icon="InfoFilled" icon-color="#626AEF"
                            :title="`你确定要删除${row.name}吗？`">
                            <template #reference>
                                <el-button size="small" type="danger" icon="Delete">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination v-model:current-page="pagination.page" v-model:page-size="pagination.pageSize"
                :page-sizes="[5, 10, 15, 20]" layout="total, prev, pager, next, jumper, sizes" :total="pagination.total"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </el-card>
        <el-dialog v-model="dialogFormVisible" :title="addForm.id ? '编辑部门' : '添加部门'" width="500" top="30vh">
            <el-form :model="addForm">
                <el-form-item label="部门名称" label-width="100px" prop="name">
                    <el-input v-model="addForm.name" autocomplete="off" clearable="true" placeholder="请输入部门名称" />
                </el-form-item>
                <el-form-item label="部门类别" label-width="100px" prop="dtype">
                    <el-select placeholder="请选择部门类别" v-model="addForm.dtype" clearable>
                        <el-option v-for="item in departmentType" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="部门负责人" label-width="100px" prop="chargeId">
                    <el-select v-model="addForm.chargeId" filterable remote reserve-keyword placeholder="请输入部门负责人"
                        :remote-method="remoteMethod" :loading="loading">
                        <el-option v-for="item in options" :key="item.value"
                            :label="item.username + `（${item.realName}）`" :value="item.value">
                            <span style="float: left">{{ item.username }}</span>
                            <span style="
                                float: right;
                                color: var(--el-text-color-secondary);
                                font-size: 13px;">
                                {{ item.realName }}
                            </span>
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="addDepartment">
                        {{ addForm.id ? '修改' : '添加' }}
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { departmentType } from '@/common/index.ts'
import { reactive, onMounted, ref } from 'vue'
import { departmentFindAll, departmentDelete, departmentAdd, departmentEdit } from '@/api/department'
import { getUserCode } from '@/api/user'
import { timeFoamat } from '@/utils/timeFormat'
import { ElMessage } from 'element-plus'

const searchForm = reactive({
    dtype: '',
    keyWord: ''
})
const pagination = reactive({
    page: 1,
    pageSize: 10,
    total: 0
})

const tableData = ref([])
const dialogFormVisible = ref(false)
const loading = ref(false)
const options = ref<any[]>([])

const addForm = reactive({
    id: null,
    name: '',
    dtype: '',
    chargeId: null
})

onMounted(() => {
    getDepartmentList();
})

const remoteMethod = (query: string) => {
    loading.value = true
    setTimeout(async () => {
        loading.value = false
        let res: any = await getUserCode(query)
        options.value = res || []
    }, 200)
}

const getDepartmentList = async () => {
    let res: any = await departmentFindAll({
        page: pagination.page,
        pageSize: pagination.pageSize,
        ...searchForm
    })
    pagination.total = res.total;
    tableData.value = res.data;
}

const handleSizeChange = (pageSize: number) => {
    pagination.pageSize = pageSize;
    getDepartmentList();
}

const handleCurrentChange = (page: number) => {
    pagination.page = page;
    getDepartmentList();
}

const resetDepartment = () => {
    searchForm.dtype = '';
    searchForm.keyWord = '';
    getDepartmentList();
}

const editDepartment = (row: any) => {
    initAddForm(row);
    dialogFormVisible.value = true;
}

const initAddForm = (row?: any) => {
    row ? Object.assign(addForm, row) : Object.assign(addForm, {
        id: null,
        name: '',
        dtype: '',
        chargeId: null,
    })
}

const deleteDepartment = async (id: number) => {
    let res = await departmentDelete(id)
    if (res) {
        ElMessage({
            message: '删除成功',
            type: 'success'
        })
        getDepartmentList()
    } else {

    }
}

const addDepartment = async () => {
    const id = addForm.id;
    if (id) {
        let res = await departmentEdit(id, addForm)
        if (res) {
            ElMessage({
                message: '修改成功',
                type: 'success'
            })
            dialogFormVisible.value = false;
            getDepartmentList()
        }
    } else {
        let res = await departmentAdd(addForm)
        if (res) {
            ElMessage({
                message: '添加成功',
                type: 'success'
            })
            dialogFormVisible.value = false;
            getDepartmentList()
        }
    }
}

const indexMethod = (index: number) => {
    return (pagination.page - 1) * pagination.pageSize + index + 1;
}

</script>

<style scoped lang='scss'>
.form {
    align-items: center;
}
</style>