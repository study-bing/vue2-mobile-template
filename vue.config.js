const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: (config) => {
        config.resolve.alias = {
            '@api': path.resolve('./src/api/'),
            '@views': path.resolve('./src/views/'),
            '@modules': path.resolve('./src/modules/'),
            '@components': path.resolve('./src/components/'),
        }
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
