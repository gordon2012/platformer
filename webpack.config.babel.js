import path from 'path';
import webpack from 'webpack';

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

export default {
    entry: path.resolve(__dirname, 'src/index.js'),

    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'build'),
        publicPath: './build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader', include: path.join(__dirname, 'src') },
            { test: /pixi\.js/, use: ['expose-loader?PIXI']},
            { test: /phaser-split\.js/, use: ['expose-loader?Phaser']},
            { test: /p2\.js/, use: ['expose-loader?p2']}
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    }
};
