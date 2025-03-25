<template>
    <div class="chat-container">
        <div class="chat-title">
            <div class="userInfo">
                <img class="user-avatar" src="@/assets/images/user.jpg" alt="">
                <div class="user-message">
                    <p class="user-message-title">
                        <span class="user-message-name">visdwadawditor</span>
                        <span class="user-message-state">dwada</span>
                    </p>
                    <p class="user-introduce">
                        <span class="user-name">XXX</span>
                        <span>(技术研发部&nbsp;-&nbsp;算法测试师)</span>
                    </p>
                </div>
            </div>
            <div class="chatTools">
                <el-icon size="40" class="tool-icon">
                    <DocumentAdd />
                </el-icon>
                <el-icon size="40" class="tool-icon">
                    <FolderChecked />
                </el-icon>
                <el-icon size="40" class="tool-icon">
                    <More />
                </el-icon>
            </div>
        </div>
        <div class="chat-content" :style="{ height: height + 'px' }">
            <ChatContent></ChatContent>
        </div>
        <div class="drag-bar" @mousedown="startDrag">
        </div>
        <div class="rich-text-editor">
            <Editor></Editor>
        </div>
    </div>
</template>

<script setup lang='ts'>
import ChatContent from '../chatContent/index.vue'
import Editor from '../editor/index.vue'
import { useResizable, ResizableType } from '@/utils/resizable'
const { height, startDrag } = useResizable({
    type: ResizableType.Vertical,
    minHeight: 300,
    maxHeight: 600,
    initialHeight: 420,
})
</script>

<style scoped lang='scss'>
.chat-container {
    width: 100%;
    height: calc(100vh - 121px);
    display: flex;
    flex-direction: column;

    .chat-title {
        height: $chatroom-title-height;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: stretch;
        padding: 0 20px;

        .userInfo {
            flex: 1;
            height: 100px;
            display: flex;
            align-items: center;
            user-select: none;

            .user-avatar {
                width: 70px;
                border-radius: $radios-15;
                margin-right: 15px;
            }

            .user-message {
                flex: 1;
                height: 70px;
                padding: 5px 0;
                min-width: 0;

                .user-message-title {

                    .user-message-name {
                        font-size: $font-size-normal;
                        font-weight: $font-weight-default;
                        margin-right: 10px;
                    }

                    .user-message-state {
                        font-size: $font-size-small;
                        color: $chatroom-user-state-color;

                    }
                }

                .user-introduce {
                    font-size: $font-size-smaller;
                    color: $chatroom-content-color;
                    margin-top: 15px;
                }

            }

        }

        .chatTools {
            width: 160px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .chat-content {
        padding: 0 20px;
        overflow: auto;
    }

    .drag-bar {
        height: 2px;
        background-color: rgba(145, 145, 145, 0.404);
        cursor: n-resize;
    }

    .rich-text-editor {
        flex: 1;

    }
}
</style>