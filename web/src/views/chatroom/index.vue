<template>
    <div class="chatroom-container">
        <div class="userList" :style="{ width: width + 'px' }">
            <UserList></UserList>
        </div>
        <div class="drag-bar" @mousedown="startDrag">
        </div>
        <div class="chatroom">
            <Chat></Chat>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Chat from './chat/index.vue'
import UserList from './userList/index.vue'
import { useResizable, ResizableType } from '@/utils/resizable';

const { width, startDrag } = useResizable({
    type: ResizableType.Horizontal,
    minWidth: 330, // 最小宽度
    maxWidth: 600, // 最大宽度
    initialWidth: 460, // 初始宽度
});

</script>

<style scoped lang='scss'>
.chatroom-container {
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
    border: 1px solid rgba(145, 145, 145, 0.404);
    border-radius: 20px 20px 0 0;
    background-color: $chatroom-background-color;

    .userList {
        width: $chatroom-userList-width;
    }

    .drag-bar {
        width: 2px;
        background-color: rgba(145, 145, 145, 0.404);
        cursor: ew-resize;
    }

    .chatroom {
        flex: 1;
    }
}
</style>