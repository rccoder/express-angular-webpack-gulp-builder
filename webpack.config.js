var webpackConfig = {
    entry: {
        'index': './app/resources/index/index.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'css-loader'
        }]
    }

};

module.exports = webpackConfig;