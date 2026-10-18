import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    player: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    enemy: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    constructor ()
    {
        super('Game');
    }

    create ()
    {
       this.cursors = this.input.keyboard!.createCursorKeys();
       this.player = this.add.rectangle(200, 260, 100, 100, 0xffffff) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
       this.physics.add.existing(this.player);
       this.player.body.setCollideWorldBounds(true);

        this.enemy = this.add.rectangle(800, 260, 100, 100, 0x000000) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
        this.physics.add.existing(this.enemy);
        this.enemy.body.setVelocityX(-250);
        this.enemy.body.setBounce(1, 0);
        this.enemy.body.setCollideWorldBounds(true);



        this.camera = this.cameras.main; 
        this.cursors=this.input.keyboard!.createCursorKeys();
    }
    update() {

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
const distance = Phaser.Math.Distance.Between(
this.enemy.x, this.enemy.y,
this.player.x, this.player.y
);
if (distance > 10) {
this.physics.moveToObject(this.enemy, this.player, 120);
} else {
this.enemy.body.setVelocity(0, 0);
}
}}
