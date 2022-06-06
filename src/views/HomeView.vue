<template>
    <div class="home">
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
    </div>
</template>

<script>
import { Button, Field } from 'vant'
export default {
    name: 'HomeView',
    components: {
        [Button.name]: Button,
        [Field.name]: Field,
    },
    data() {
        return {
            text: '',
            tel: '',
            digit: '',
            number: '',
            password: '',
        }
    },
}
</script>
