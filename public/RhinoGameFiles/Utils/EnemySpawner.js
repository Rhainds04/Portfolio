class PowerSpawner {
  constructor(scene) {
    this.scene = scene;

    if (!this.scene.coroutines) {
      this.scene.coroutines = new CoroutineSystem(scene);
    }
  }

  StartEnemyCoroutine() {
    this.scene.coroutines.start(this.spawnPowerItem.bind(this));
  }

  *EnemyCoroutine() {
    yield 1000;
  }
}
