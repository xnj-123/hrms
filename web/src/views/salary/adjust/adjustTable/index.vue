<template>
    <div class="adjustTable-container">
        <div class="attendance-bar">
            <SearchBar></SearchBar>
        </div>
        <div class="attendance-table-container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.adjustTable-container {
    width: 100%;
    height: 100%;
    padding: 30px;

    .attendance-bar {
        margin-bottom: 30px;
    }
}
</style>