
import { Scene } from 'phaser';

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    player: Phaser.GameObjects.Rectangle & {
        body: Phaser.Physics.Arcade.Body
    };

    enemy: Phaser.GameObjects.Rectangle & {
        body: Phaser.Physics.Arcade.Body
    };

    crystals: Phaser.Physics.Arcade.Group;
    scoreText: Phaser.GameObjects.Text;

    collected = 0;
    enemySpeed = 120;
    won = false;

    constructor() {
        super('Game');
    }

    create() {
        this.camera = this.cameras.main;
        this.cursors = this.input.keyboard!.createCursorKeys();

        this.player = this.add.rectangle(
            200, 260, 50, 50, 0x00ff00
        ) as Phaser.GameObjects.Rectangle & {
            body: Phaser.Physics.Arcade.Body
        };

        this.physics.add.existing(this.player);
        this.player.body.setCollideWorldBounds(true);

        this.enemy = this.add.rectangle(
            800, 260, 50, 50, 0xff0000
        ) as Phaser.GameObjects.Rectangle & {
            body: Phaser.Physics.Arcade.Body
        };

        this.physics.add.existing(this.enemy);
        this.enemy.body.setCollideWorldBounds(true);

        this.crystals = this.physics.add.group();

        for (let i = 0; i < 5; i++) {
            const x = Phaser.Math.Between(100, 900);
            const y = Phaser.Math.Between(100, 600);

            const crystal = this.add.rectangle(
                x, y, 30, 30, 0xffff00
            );

            this.physics.add.existing(crystal, true);
            this.crystals.add(crystal);
        }

        this.scoreText = this.add.text(
            20, 20, 'Кристаллы: 0/5',
            {
                fontSize: '28px',
                color: '#ffffff',
                backgroundColor: '#000000'
            }
        );

        this.physics.add.overlap(
            this.player,
            this.crystals,
            (_player, crystal) => {
                if (this.won) return;

                crystal.destroy();

                this.collected++;
                this.enemySpeed += 30;

                this.scoreText.setText(
                    `Кристаллы: ${this.collected}/5`
                );

                if (this.collected === 5) {
                    this.won = true;
                    this.enemy.body.setVelocity(0, 0);

                    const victoryText = this.add.text(
                        this.cameras.main.centerX,
                        this.cameras.main.centerY,
                        'Ты победил!',
                        {
                            fontSize: '56px',
                            color: '#ffff00',
                            backgroundColor: '#000000'
                        }
                    );

                    victoryText.setOrigin(0.5);

                    this.time.delayedCall(3000, () => {
                        this.scene.start('MainMenu');
                    });
                }
            }
        );

        this.physics.add.overlap(
            this.player,
            this.enemy,
            () => {
                if (!this.won) {
                    this.scene.start('GameOver');
                }
            }
        );
    }

    update() {
        if (this.won) return;
        this.player.body.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-200);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(200);
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-200);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(200);
        }

        const distance = Math.hypot(
            this.enemy.x - this.player.x,
            this.enemy.y - this.player.y
        );

        if (distance > 10) {
            this.physics.moveToObject(
                this.enemy,
                this.player,
                this.enemySpeed
            );
        } else {
            this.enemy.body.setVelocity(0, 0);
        }
    }
}
