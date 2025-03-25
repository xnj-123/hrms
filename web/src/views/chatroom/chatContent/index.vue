<template>
  <div class="chatContent-container">
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />
  </div>
</template>

<script setup lang='ts'>
import Message from '../message/index.vue'
</script>

<style scoped lang='scss'>
.chatContent-container {
  width: 100%;
  height: 100%;
}
</style>