import path from 'path';

export default {
    entry: [
        './src'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js']
    }
};
