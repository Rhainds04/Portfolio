class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');

    this.player = null;
    this.items = null;
  }

  preload() {
    this.load.image('player', 'assets/imagesRhinoGame/playerTemp.png');
    this.load.image('enemy', 'assets/imagesRhinoGame/enemyTemp.png');
    this.load.image('item', 'assets/imagesRhinoGame/itemTemp.png');
  }

  create() {
    // Ensure input is set up
    this.input.keyboard.createCursorKeys();

    // Create physics group for items
    this.items = this.physics.add.group();

    // Create player
    this.player = new Player(this, 100, 100);

    // Set up coroutines and power spawner
    this.coroutines = new CoroutineSystem(this);
    this.powerSpawner = new PowerSpawner(this);
    this.powerSpawner.PowerSpawningCoroutine();

    // Set up collisions
    if (this.enemy) {
      this.physics.add.overlap(
        this.player,
        this.enemy,
        this.playerCollideEnemy,
        null,
        this
      );
    }

    this.physics.add.overlap(
      this.player,
      this.items,
      this.collectPower,
      null,
      this
    );
  }

  update() {
    if (!this.player.isGameOver) {
      this.player.update();
    }
    MapLimits.apply(this.player, window.innerWidth, window.innerHeight);
  }

  //when player collides with enemy
  playerCollideEnemy(player, enemy) {
    player.takeDamage();
  }

  //when player collect a power
  collectPower(player, item) {
    player.collectPower(item);
    item.destroy();
    this.powerSpawner.powerOnScene = false;
    this.powerSpawner.PowerSpawningCoroutine();
  }
}
