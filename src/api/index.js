import axios from 'axios'
import { Toast } from 'vant'
import router from '../router'
let axiosOptions = {} // 配置
const service = axios.create({
    // 设置超时时间
    timeout: 60000,
    baseURL: process.env.NODE_ENV !== 'development' ? window.location.origin : '/web/',
})

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('token')
        if (token) {
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(
    (response) => {
        const responseCode = response.status
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (responseCode === 200 && response.data.code === 200) {
            return Promise.resolve(response.data)
        } else {
            if (response.data.code === 5000001) {
                localStorage.removeItem('token')
                router.replace('/')
            }
            if (!axiosOptions.toastError) {
                //toastError为true表示不用弹窗错误
                Toast(response.data && response.data.msg)
            }
            return Promise.reject(response.data)
        }
    },
    (error) => {
        // 服务器返回不是 2 开头的情况，会进入这个回调
        // 可以根据后端返回的状态码进行不同的操作
        const responseCode = error.response ? error.response.status : ''
        switch (responseCode) {
            case 5000001:
                localStorage.removeItem('token')
                router.replace('/')
                break
            case 502:
                Toast('服务器错误')
                break
            default:
                if (!axiosOptions.toastError) {
                    Toast(error.response && error.response.data ? error.response.data.hint || error.response.data.message : '服务器错误')
                }
                break
        }

        return Promise.reject(error)
    }
)

const paasService = (params, options = {}) => {
    axiosOptions = options
    return service.request(params)
}

export default paasService
