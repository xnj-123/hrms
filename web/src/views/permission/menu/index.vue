<template>
  <div>
    <el-card>
      <el-table border :data="permissionList" row-key="id">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="权限值" prop="code"></el-table-column>
        <el-table-column label="修改时间" prop="updateTime"></el-table-column>
        <el-table-column label="操作">
          <template #="{ row }">
            <el-button type="primary" size="small" @click="addMenu(row)" :disabled="row.level == 4 ? true : false">
              {{ row.level < 3 ? '添加菜单' : '添加功能' }}</el-button>
                <el-button type="primary" size="small" @click="updateMenu(row)"
                  :disabled="row.level == 1 ? true : false">
                  编辑</el-button>
                <el-button type="primary" size="small" @click="deleteMenu(row)"
                  :disabled="row.level == 1 ? true : false">
                  删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog v-model="dialogVisible" title="Tips" width="500">
      <el-form label-width="80px">
        <el-form-item label="名称">
          <el-input placeholder="权限管理" v-model="menuParams.name"></el-input>
        </el-form-item>
        <el-form-item label="获取值">
          <el-input placeholder="Acl" v-model="menuParams.code"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveMenu">
            保存
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang='scss'></style>