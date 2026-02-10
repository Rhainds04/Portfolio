class CoroutineSystem {
  constructor(scene) {
    this.scene = scene;
    this.coroutines = new Map();
    this.nextId = 0;

    // Add update to scene's update loop
    const originalUpdate = scene.update;
    scene.update = (time, delta) => {
      if (originalUpdate) {
        originalUpdate.call(scene, time, delta);
      }
      this.update(delta);
    };
  }

  update(delta) {
    for (const [id, coroutine] of this.coroutines.entries()) {
      if (coroutine.delay > 0) {
        coroutine.delay -= delta;
        continue;
      }

      const result = coroutine.generator.next();

      if (result.done) {
        this.coroutines.delete(id);
        continue;
      }

      if (typeof result.value === 'number') {
        coroutine.delay = result.value;
      }
    }
  }

  start(generatorFn) {
    const id = this.nextId++;
    this.coroutines.set(id, {
      generator: generatorFn(),
      delay: 0,
    });
    return id;
  }

  stop(id) {
    return this.coroutines.delete(id);
  }
}
