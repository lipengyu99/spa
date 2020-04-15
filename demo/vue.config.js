module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: false, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8081',
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: {
            '/rest': {
                target: 'http://59.196.99.4/gateway/api', //API服务器的地址
                 headers: { 'AppKey': '688337637353717760' },
                changeOrigin: true,
                pathRewrite: {
                    '^/rest': ''
                }
            }
        },
        
    }
}
