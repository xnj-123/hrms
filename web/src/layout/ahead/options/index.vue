<template>
    <div class="options-container">
        <el-button size="large" circle icon="Refresh"></el-button>
        <el-button size="large" circle icon="FullScreen" @click="changeFullScreen"></el-button>
        <el-button size="large" circle icon="Setting"></el-button>
        <el-button size="large" circle icon="Bell"></el-button>
    </div>
    <div class="user-container">
        <img class="user-avatar" src="@/assets/images/admin.gif" alt="">
        <span class="user-name">admin</span>
    </div>
</template>

<script setup lang='ts'>


const changeFullScreen = () => {
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

</script>

<style scoped lang='scss'>
.user-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        margin: 0 15px 0 30px;
    }

    .user-name {
        width: $div-user-name;
        font-size: $div-user-name-font-size;
    }
}
</style>