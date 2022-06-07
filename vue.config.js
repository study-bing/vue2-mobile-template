const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(_dirname)设置绝对路径
}
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_debugger: true, // console
                            drop_console: true,
                            pure_funcs: ['console.log'], // 移除console
                        },
                    },
                    sourceMap: false,
                    parallel: true,
                })
            )
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[file].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,
                })
            )
        }
    },
    //压缩图片
    chainWebpack: (config) => {
        config.module.rule('svg').exclude.add(path.resolve('./src/assets/icons/svg')).end()
        config.module
            .rule('assets')
            .test(/\.svg$/)
            .include.add(path.resolve('./src/assets/icons/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end()
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set('@components', resolve('src/components'))
            .set('@api', resolve('src/api'))
            .set('@views', resolve('src/views'))
            .set('@modules', resolve('src/modules'))
    },
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
        port: 8887,
        proxy: {
            '^/web/': {
                target: 'http://121.40.139.139:108',
                ws: false,
                pathRewrite: {
                    '^/web': '',
                },
            },
        },
    },
})
