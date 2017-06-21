// Hero
//
export default class extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y);

        Phaser.Sprite.call(this, game, x, y, 'hero');
        this.anchor.set(0.5, 0.5);
        this.game.physics.enable(this);
        this.body.collideWorldBounds = true;

        // Animations
        this.animations.add('stop', [0]);
        this.animations.add('run', [1, 2], 8, true); // 8fps looped
        this.animations.add('jump', [3]);
        this.animations.add('fall', [4]);
    }

    move(direction) {
        const SPEED = 200;
        this.body.velocity.x = direction * SPEED;
        // this.x += direction * 2.5

        if(this.body.velocity.x < 0) {
            this.scale.x = -1;
        } else if(this.body.velocity.x > 0) {
            this.scale.x = 1;
        }
    }

    jump() {
        const JUMP_SPEED = 600;
        let canJump = this.body.touching.down;

        if(canJump) {
            this.body.velocity.y = -JUMP_SPEED
        }
        return canJump;
    }

    bounce() {
        const BOUNCE_SPEED = 200;
        this.body.velocity.y = -BOUNCE_SPEED;
    }

    update() {
        // Update sprite animation if needed
        let animationName = this._getAnimationName();
        if(this.animations.name !== animationName) {
            this.animations.play(animationName);
        }
    }

    prerender() {
        console.log('hero prerender');
    }

    _getAnimationName() {
        let name = 'stop' // default

        if(this.body.velocity.y < 0) {
            // Jumping
            name = 'jump';
        } else if(this.body.velocity.y >= 0 && !this.body.touching.down) {
            // Falling
            name = 'fall';
        } else if(this.body.velocity.x !== 0 && this.body.touching.down) {
            // Running
            name = 'run';
        }
        return name;
    }
}
