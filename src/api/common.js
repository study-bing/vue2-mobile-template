import service from './index'

export function getInitApi(data = {}) {
    return service({
        url: '/app/init',
        method: 'get',
        params: data
    })
}