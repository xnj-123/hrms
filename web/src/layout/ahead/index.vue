<template>
    <div class="ahead-container">
        <div class="left-container">
            <Bread></Bread>
        </div>
        <div class="right-container">
            <Options></Options>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Bread from './bread/index.vue'
import Options from './options/index.vue'


</script>

<style scoped lang='scss'>
.ahead-container {
    width: 100%;
    height: $ahead-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;


    .left-container {
        display: flex;
        align-items: center;
    }

    .right-container {
        display:flex;
        align-items: center;
    }
}
</style>