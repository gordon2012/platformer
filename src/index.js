require('file-loader?name=[name].[ext]!./index.html');

require('file-loader?name=./data/[name].[ext]!./assets/data/level00.json');
require('file-loader?name=./data/[name].[ext]!./assets/data/level01.json');
require('file-loader?name=./images/[name].[ext]!./assets/images/background.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/hero.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/ground.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/grass_8x1.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/grass_6x1.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/grass_4x1.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/grass_2x1.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/grass_1x1.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/coin_animated.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/spider.png');
require('file-loader?name=./audio/[name].[ext]!./assets/audio/jump.wav');
require('file-loader?name=./audio/[name].[ext]!./assets/audio/coin.wav');
require('file-loader?name=./audio/[name].[ext]!./assets/audio/stomp.wav');
require('file-loader?name=./audio/[name].[ext]!./assets/audio/key.wav');
require('file-loader?name=./audio/[name].[ext]!./assets/audio/door.wav');
require('file-loader?name=./images/[name].[ext]!./assets/images/invisible_wall.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/invisible_wall2.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/coin_icon.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/numbers.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/key_icon.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/door.png');
require('file-loader?name=./images/[name].[ext]!./assets/images/key.png');


import 'pixi';
import 'p2';
import Phaser from 'phaser';

import PlayState from './PlayState';


window.onload = function() {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');

    game.state.add('play', PlayState);
    game.state.start('play', true, false, {level: 0});
}
