<!--
 * @Author: linbin
 * @Date: 2021-12-09 14:12:26
<<<<<<< HEAD
 * @LastEditTime: 2022-06-06 18:04:00
 * @LastEditors: linBin
 * @Description: 显示所有svg
 * @FilePath: /vue2-pc-template/src/views/devViews/SvgList.vue
=======
 * @LastEditTime: 2022-06-07 10:23:31
 * @LastEditors: linBin
 * @Description: 显示所有svg
 * @FilePath: /vue2-mobile-template/src/views/devViews/SvgList.vue
>>>>>>> deef3a9 (feat: 添加插件)
-->
<template>
    <div class="content">
        <h1 class="m-top-20 m-bottom-20">全局的svg</h1>
        <ul class="icon-list">
<<<<<<< HEAD
            <li v-for="svg in svgList" :key="svg" @click="copyLink(svg)">
                <svg-icon :icon-class="svg" width="30" height="30" />
=======
            <li v-for="svg in svgList" :key="svg">
                <svg-icon :icon-class="svg" className="svg-size" readOnly />
>>>>>>> deef3a9 (feat: 添加插件)
                <span class="icon-name">{{ svg }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'svgList',
    data() {
        return {
            svgList: [],
        }
    },
    methods: {
        getSvg(urls) {
            let reg = /(.+).svg$/
            return urls.keys().map((el) => {
                let content = el.split('/').pop()
                return content.match(reg)[1]
            })
        },
<<<<<<< HEAD
        copyLink(content) {
            let _this = this
            content = `<svg-icon icon-class="${content}" width="22" height="22" />`
            _this.$copyText(content).then(
                () => {
                    _this.$message.success('复制成功')
                },
                () => {
                    _this.$message.error('复制失败')
                }
            )
        },
=======
>>>>>>> deef3a9 (feat: 添加插件)
    },
    created() {
        const urls = require.context('@/assets/icons/svg', true, /\.svg$/)
        this.svgList = this.getSvg(urls) // 获取config的svg
    },
}
</script>

<style lang="less" scoped>
.icon-list {
    display: flex;
    border: 1px solid #eee;
    border-radius: 4px;
    flex-wrap: wrap;
}
.icon-list li {
    padding: 20px 10px;
    height: 150px;
    display: flex;
    flex-direction: column;
    width: 150px;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 120px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
}
.icon-name {
    color: #505050;
    margin-top: 20px;
    cursor: pointer;
}
<<<<<<< HEAD
=======
.svg-size {
    width: 30px;
    height: 30px;
}
>>>>>>> deef3a9 (feat: 添加插件)
</style>
