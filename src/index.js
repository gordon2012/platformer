import 'pixi';
import 'p2';
import Phaser from 'phaser';

import PlayState from './PlayState';


window.onload = function() {
    let game = new Phaser.Game(960, 600, Phaser.AUTO, 'game');

    game.state.add('play', PlayState);
    game.state.start('play', true, false, {level: 0});
}
