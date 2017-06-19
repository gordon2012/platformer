export default class extends Phaser.Sprite {
    constructor(game, x, y, speed) {
        super(game, x, y);

        this.spawn_x = x;
        this.spawn_y = y;

        this.speed = speed;

        Phaser.Sprite.call(this, game, x, y, 'spider');

        this.anchor.set(0.5);

        this.animations.add('crawl', [0,1,2], 8, true);
        this.animations.add('die', [0,4,0,4,0,4,3,3,3,3,3,3], 12);
        this.animations.play('crawl');

        this.game.physics.enable(this);
        this.body.collideWorldBounds = false;
        this.randomDir();

        this.tint = 0xff0000;
    }

    die() {
        this.body.enable = false;

        this.animations.play('die').onComplete.addOnce(function() {
            this.kill();
        }, this);
    }

    respawn() {
        this.x = this.spawn_x;
        this.y = this.spawn_y;
        this.randomDir();
    }

    randomDir() {
        let dir = Math.floor(Math.random() * 2);
        this.body.velocity.x = this.speed * (dir === 0 ? 1 : -1);
    }
};
