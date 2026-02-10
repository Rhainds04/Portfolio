class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.scene = scene; // Explicitly store scene reference
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.speed = 5;
    this.health = 3;
    this.power = 0;
    this.score = 0;
    this.isInvulnerable = false;
    this.isGameOver = false;
    this.hasMaxPower = false;

    if (!scene.coroutines) {
      scene.coroutines = new CoroutineSystem(scene);
    }

    window.updateGameData();
  }

  update() {
    this.handleMovement();
    if (this.hasMaxPower) {
      this.handlePowerUsage();
    }
  }

  handlePowerUsage() {
    const keyboard = this.scene.input.keyboard;

    if (keyboard.addKey('SPACE').isDown && this.health !== 3) {
      this.scene.coroutines.start(this.graduallyIncreaseHealth.bind(this));
      this.scene.coroutines.start(this.graduallyRemovePower.bind(this));
      this.hasMaxPower = false;
      window.updateGameData();
    } else if (keyboard.addKey('E').isDown) {
      this.scene.coroutines.start(this.graduallyRemovePower.bind(this));
      this.hasMaxPower = false;
      window.updateGameData();
      this.scene.coroutines.start(this.invulnerabilityRoutine.bind(this));
    }
  }
  //gradually remove power to create an animation with the images
  *graduallyRemovePower() {
    this.power = 2;
    window.updateGameData();
    yield 150;
    this.power = 1;
    window.updateGameData();
    yield 150;
    this.power = 0;
    window.updateGameData();
  }

  *graduallyIncreaseHealth() {
    this.health = 1;
    window.updateGameData();
    yield 150;
    this.health = 2;
    window.updateGameData();
    yield 150;
    this.health = 3;
    window.updateGameData();
  }

  takeDamage() {
    if (this.isInvulnerable) return;

    this.health--;
    window.updateGameData(); //health value changes
    this.scene.coroutines.start(this.invulnerabilityRoutine.bind(this));

    if (this.health <= 0) {
      this.gameOver();
    }
  }

  *invulnerabilityRoutine() {
    this.isInvulnerable = true;

    //pause for 3 seconds
    for (let i = 1; i <= 3; i++) {
      this.alpha = 0.5;
      yield 500;
      this.alpha = 1;
      yield 500;
    }
    this.isInvulnerable = false;
  }

  gameOver() {
    this.isGameOver = true;
    this.setTint(0xff0000);
  }

  collectPower(item) {
    if (this.hasMaxPower) return;
    if (this.power < 3) {
      item.disableBody(true, true);
      this.power++;
      window.updateGameData(); //power value changes
    }
    if (this.power === 3) {
      this.hasMaxPower = true;
      window.updateGameData(); //hasMaxPower value changes
    }
  }

  handleMovement() {
    const keyboard = this.scene.input.keyboard;

    if (keyboard.addKey('A').isDown || keyboard.addKey('LEFT').isDown) {
      this.x -= this.speed;
    }
    if (keyboard.addKey('D').isDown || keyboard.addKey('RIGHT').isDown) {
      this.x += this.speed;
    }
    if (keyboard.addKey('W').isDown || keyboard.addKey('UP').isDown) {
      this.y -= this.speed;
    }
    if (keyboard.addKey('S').isDown || keyboard.addKey('DOWN').isDown) {
      this.y += this.speed;
    }
  }
}
