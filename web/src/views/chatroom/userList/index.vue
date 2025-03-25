<template>
    <div class="userList-container">
        <div class="user-search">
            <el-input prefix-icon="Search" class="search-input"></el-input>
            <el-button class="" icon="Plus"></el-button>
        </div>
        <ul class="userList">
            <li class="user-item-container">
                <div class="user-item">
                    <img class="user-avatar" src="@/assets/images/user.jpg" alt="">
                    <div class="user-message">
                        <p class="user-message-title"><span class="user-message-name">visdwadawditor</span><span
                                class="user-message-state">dwada</span><span class="message-date">2025-02-23</span></p>
                        <p class="user-message-content">wdadwdawdwadadwdawdwadadwdawdwadadwdawdwadadwdawdwa</p>
                    </div>
                </div>
            </li>
            <li class="user-item-container">
                <div class="user-item">
                    <img class="user-avatar" src="@/assets/images/user.jpg" alt="">
                    <div class="user-message">
                        <p class="user-message-title"><span class="user-message-name">visitor</span><span
                                class="user-message-state">dwada</span><span class="message-date">2025-02-23</span></p>
                        <p class="user-message-content">wdadwdawdwadadwdawdwadadwdawdwadadwdawdwadadwdawdwa</p>
                    </div>
                </div>
            </li>
            <li class="user-item-container">
                <div class="user-item" style="background-color: white;">
                    <img class="user-avatar" src="@/assets/images/user.jpg" alt="">
                    <div class="user-message">
                        <p class="user-message-title"><span class="user-message-name">visitor</span><span
                                class="user-message-state">dwada</span><span class="message-date">2025-02-23</span></p>
                        <p class="user-message-content">wdadwdawdwadadwdawdwadadwdawdwadadwdawdwadadwdawdwa</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.userList-container {
    display: flex;
    flex-direction: column;
    height: 100%;

    .user-search {
        width: 100%;
        height: $chatroom-title-height;
        display: flex;
        justify-content: center;
        align-items: center;

        .search-input {
            width: 66%;
            margin-right: 20px;
        }
    }

    .userList {
        flex: 1;
        width: 100%;
        overflow: auto;

        .user-item-container {
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            justify-content: center;

            .user-item {
                width: 92%;
                height: 90px;
                border-radius: $radios-15;
                background-color: $chatroom-user-background-color;
                display: flex;
                align-items: center;
                padding: 0 20px;
                user-select: none;

                .user-avatar {
                    width: 66px;
                    border-radius: $radios-15;
                    margin-right: 15px;
                }

                .user-message {
                    flex: 1;
                    height: 66px;
                    padding: 5px 0;
                    min-width: 0;

                    .user-message-title {
                        width: 100%;
                        display: flex;
                        align-items: baseline;

                        .user-message-name {
                            font-size: $font-size-small;
                            font-weight: $font-weight-default;
                            width: 80px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            flex-shrink: 0;
                        }

                        .user-message-state {
                            fleX: 1;
                            font-size: $font-size-smaller;
                            color: $chatroom-user-state-color;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            min-width: 0;
                            padding-left: 10px;
                        }

                        .message-date {
                            font-size: $font-size-smaller;
                            text-align: right;
                            min-width: 95px;
                        }
                    }

                    .user-message-content {
                        width: 100%;
                        margin-top: 15px;
                        color: $chatroom-content-color;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
}
</style>