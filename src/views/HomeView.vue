<template>
    <div class="home">
<<<<<<< HEAD
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
=======
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <!-- 输入任意文本 -->
        <van-field v-model="text" label="文本" />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="tel" type="tel" label="手机号" />
        <!-- 允许输入正整数，调起纯数字键盘 -->
        <van-field v-model="digit" type="digit" label="整数" />
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <van-field v-model="number" type="number" label="数字" />
        <!-- 输入密码 -->
        <van-field v-model="password" type="password" label="密码" />
        <svg-icon icon-class="test" className="svg-size" readOnly />
>>>>>>> deef3a9 (feat: 添加插件)
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '黄金糕',
                },
                {
                    value: '选项2',
                    label: '双皮奶',
                },
                {
                    value: '选项3',
                    label: '蚵仔煎',
                },
                {
                    value: '选项4',
                    label: '龙须面',
                },
                {
                    value: '选项5',
                    label: '北京烤鸭',
                },
            ],
            value: '',
        }
    },
}
</script>
<style scoped>
.svg-size {
    width: 30px;
    height: 30px;
}
</style>
