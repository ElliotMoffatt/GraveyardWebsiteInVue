const webpack = require('webpack')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/GraveyardWebsiteInVue/' : '/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
}