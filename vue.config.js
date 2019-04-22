const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.VUE_APP_SERVER_ENV === 'online' ? '/doulongwanbk/' : '/',

    
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('assets', resolve('src/assets'))
    //         .set('components', resolve('src/components'))
    //         .set('api', resolve('src/api'))
    //         .set('utils', resolve('src/utils'))
    //         .set('filter', resolve('src/utils/filter'))
    //         .set('store', resolve('src/store'))
    //         .set('router', resolve('src/router'))
    // }
}