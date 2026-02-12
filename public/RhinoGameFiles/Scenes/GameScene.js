class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');

    this.player = null;
    this.items = null;
  }

  preload() {
    this.load.image('player', 'assets/imagesRhinoGame/playerTemp.png');
    this.load.image('enemy', 'assets/imagesRhinoGame/enemies/enemy1.png');
    this.load.image('item', 'assets/imagesRhinoGame/itemTemp.png');
  }

  create() {
    const { width, height } = this.scale;
    const centerX = width / 2;
    const centerY = height / 2;

    this.input.keyboard.createCursorKeys();

    this.items = this.physics.add.group();
    this.enemies = this.physics.add.group();

    this.player = new Player(this, centerX, centerY);

    this.coroutines = new CoroutineSystem(this);
    this.powerSpawner = new PowerSpawner(this);
    this.enemySpawner = new EnemySpawner(this);

    this.powerSpawner.PowerSpawningCoroutine();
    this.enemySpawner.StartEnemyWave(this.enemySpawner.enemyWaveCoroutine1);

    // Set up collisions
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.playerCollideEnemy,
      null,
      this
    );

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
