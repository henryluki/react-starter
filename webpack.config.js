var path = require('path');
var webpack = require('webpack');

var getModulePath = function(name) {
  return path.join(__dirname, 'node_modules', name);
};

module.exports = {
    entry: {
        'home': './src/containers/index.js',
        'vendor': ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux']
        // 'common': './src/common/app.js',
    },
    output: {
        path: path.join(__dirname, 'public/dist/'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
        alias: {
            'app': path.join(__dirname, 'src', 'app'),
            'utils': path.join(__dirname, 'src', 'utils'),
            'components': path.join(__dirname, 'src', 'components')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor",
            /* filename= */"vendor.js"
        )
    ],
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: path.join(__dirname, 'src'),
            query: {
                    presets: ['react', 'es2015'],
                    plugins: [
                        "transform-object-rest-spread",
                        "transform-decorators-legacy"
                    ]
            }
        }, {
            test: /\.coffee$/,
            loader: "coffee-loader"
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
}
