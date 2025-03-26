class EnemySpawner {
  constructor(scene) {
    this.scene = scene;
    this.waveStartInterval = 3000;
    this.isGameOver = false;
    this.wavesCount = 0;

    if (!this.scene.coroutines) {
      this.scene.coroutines = new CoroutineSystem(scene);
    }
  }

  update() {
    while (!this.isGameOver) {
      this.scene.coroutines.start(this.waveManager.bind(this));
    }
  }

  //send a wave when the last one is over
  *waveManager() {}

  StartEnemyWave(enemyWaveCoroutine) {
    this.scene.coroutines.start(enemyWaveCoroutine.bind(this));
    this.wavesCount++;
    window.updateGameData();
  }

  *enemyWaveCoroutine1() {
    const topLimit = 700;
    const bottomLimit = 1050;
    let randomYPosition = null;
    yield this.waveStartInterval;

    for (let i = 0; i < 20; i++) {
      if (randomYPosition === null) {
        randomYPosition = topLimit + Math.random() * (bottomLimit - topLimit);
      } else {
        randomYPosition += Math.random() * 300 - 150; // Random shift between -100 and 100
        randomYPosition = Math.max(
          topLimit,
          Math.min(bottomLimit, randomYPosition)
        );
      }
      const xStartPosition = window.innerWidth + 100;
      yield 500;
      const item1 = this.scene.enemies.create(
        xStartPosition,
        randomYPosition,
        'enemy'
      );
      const item2 = this.scene.enemies.create(
        xStartPosition,
        randomYPosition - 1150,
        'enemy'
      );
      this.scene.tweens.add({
        targets: [item1, item2],
        x: -100, // Move off screen to the left
        duration: 3000, // 5 seconds to cross the screen
        ease: 'Linear',
        onComplete: () => {
          item1.destroy();
          item2.destroy();
        },
      });
    }
  }
}
