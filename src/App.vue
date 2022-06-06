<template>
    <div id="app">
        <transition name="fade" mode="out-in" appear>
            <router-view />
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: ''
        }
    },
}
</script>
<style lang="less">
html,
body,
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    overflow: auto;
    touch-action: manipulation;
}
* {
    -webkit-overflow-scrolling: touch;
}
*,
:after,
:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
