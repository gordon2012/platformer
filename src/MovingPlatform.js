export default class extends Phaser.Sprite {
    constructor(game, x, y, key, group, motion) {
        super(game, x, y);

        // this.speed = speed;

        Phaser.Sprite.call(this, game, x, y, key);

        // this.anchor.set(0.5);

        // this.animations.add('crawl', [0,1,2], 8, true);
        // this.animations.add('die', [0,4,0,4,0,4,3,3,3,3,3,3], 12);
        // this.animations.play('crawl');

        this.game.physics.enable(this);

        this.anchor.x = 0.5;

        this.body.customSeparateX = true;
        this.body.customSeparateY = true;
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.playerLocked = false;

        group = typeof group === 'undefined' ? game.world : group;
        group.add(this);

        // this.body.collideWorldBounds = true;
        // this.body.velocity.x = this.speed;

        // console.log(motion.length);

        // Motion Paths
        this.motion = {
            data: motion,
            index: 0,
            dir: 1,
            count: motion.length
        };
        
        // = motion;
        // console.log(this.motion);
        // this.
        // console.log(`curr: ${this.motion.index} | next: ${this.motion.index + this.motion.dir}`);

        // console.log(this.game);

        this.tween = new Phaser.Tween(this, this.game, this.game.tweens);

        // console.log(motion);
        motion.props.forEach((e) => {
            // to(properties, duration, ease, autoStart, delay, repeat, yoyo) → {Phaser.Tween}

            e.x = this.x + e.x;

            this.tween = this.tween.to(e, motion.speed, Phaser.Easing.Default, false, 0, -1, true);
        });
        this.tween.start();

        // console.log(this.tween);

        this.lock = {
            locked: false,
            target: null
        }

    }

    update() {
    //    console.log(this.game.physics);
    //    console.log(this.x);
        // console.log(this.lock);
        // this.physics.arcade.collide()
    }





}
