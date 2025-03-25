<template>
    <div class="message-container">
        <div class="message-date">
            <span>2024年12月24号</span>
        </div>
    </div>
    <div class="message-container">
        <div class="userAvatar">
            <img class="user-avatar" src="@/assets/images/user.jpg" alt="">
        </div>
        <div class="seperator"></div>
        <div class="message-div">
            <div class="message-time">
                12.01.02
            </div>
            <div class="message-content">
                卡的网卡觉得我能看看见单位缴纳，达娃大那我肯定哈维大家好我打卡大卡我的达瓦达瓦达瓦达瓦达瓦德瓦达达娃大碗大碗
            </div>
            <div class="message-state">
                <span>已读</span>
            </div>
        </div>
    </div>
    <div class="message-container" :style="{ flexDirection: 'row-reverse' }">
        <div class="userAvatar">
            <img class="user-avatar" src="@/assets/images/admin.gif" alt="">
        </div>
        <div class="seperator"></div>
        <div class="message-div" :style="{ alignItems: 'flex-end' }">
            <div class="message-time">
                12.01.02
            </div>
            <div class="message-content" :style="{ backgroundColor: '#CEE6FD' }">
                卡的网卡觉得我能看看见单位缴纳，达娃大那我肯定哈维大家好我打卡大卡我的达瓦达瓦达瓦达瓦达瓦德瓦达达娃大碗大碗
            </div>
            <div class="message-state">
                <span>已读</span>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.message-container {
    width: 100%;
    display: flex;
    user-select: none;

    .message-date {
        width: 100%;
        text-align: center;
        margin: 5px 0;
        font-size: $font-size-smaller;
        color: $chatroom-content-color;
        font-weight: $font-weight-default;
    }

    .userAvatar {
        padding-top: 20px;

        .user-avatar {
            width: 70px;
            border-radius: 10px;
            border: 1px solid #77777742;
        }
    }

    .seperator {
        width: 14px;
    }

    .message-div {
        flex: 1;
        display: flex;
        flex-direction: column;

        .message-time {
            font-size: $font-size-smaller;
            color: $chatroom-content-color;
        }

        .message-content {
            max-width: 80%;
            padding: 15px 10px;
            background-color: $message-other-background-color;
            border-radius: 10px;
            margin: 5px 0;
            box-sizing: border-box;
            display: inline-block;
            line-height: 1.5;
            user-select: text;
        }

        .message-state {
            height: 16px;
            font-size: $font-size-smaller;
            color: $chatroom-content-color;
        }
    }

}
</style>