class PowerSpawner {
  constructor(scene) {
    this.scene = scene;
    this.spawnInterval = 5000;
    this.horizontalLimit = window.innerWidth;
    this.verticalLimit = window.innerHeight;
    this.powerOnScene = false;

    if (!this.scene.coroutines) {
      this.scene.coroutines = new CoroutineSystem(scene);
    }
  }

  PowerSpawningCoroutine() {
    this.scene.coroutines.start(this.spawnPowerItem.bind(this));
  }

  *spawnPowerItem() {
    yield this.spawnInterval;

    if (!this.powerOnScene) {
      const x = Math.floor(Math.random() * (this.horizontalLimit - 30)) + 15;
      const y = Math.floor(Math.random() * (this.verticalLimit - 30)) + 15;

      const item = this.scene.items.create(x, y, 'item');
      this.powerOnScene = true;
    }
  }
}
