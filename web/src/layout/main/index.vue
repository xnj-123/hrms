<template>
    <RouterView v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'>
.fade-enter-from {
    opacity: 0;
    transform:calc(0);
}
.fade-enter-all {
    transition: all 0.3s;
}
.fade-enter-to {
    opacity:1;
    transform:calc(1);
}
</style>