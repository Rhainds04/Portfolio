class Item extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'item');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    if (!scene.coroutines) {
      scene.coroutines = new CoroutineSystem(scene);
    }
  }
}
