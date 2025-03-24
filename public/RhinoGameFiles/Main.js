const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);

window.rhinoGameData = {
  player: {
    position: { x: 0, y: 0 },
    health: 0,
    power: 0,
    score: 0, //implement different types of wave and attribute points for each wave depending on the difficulty
    hasMaxPower: false,
  },
  gameState: 'initializing',
};

window.updateGameData = function () {
  const gameScene = game.scene.getScene('GameScene');
  if (gameScene && gameScene.player) {
    window.rhinoGameData.player.position.x = gameScene.player.x;
    window.rhinoGameData.player.position.y = gameScene.player.y;

    if (typeof gameScene.player.health !== 'undefined') {
      window.rhinoGameData.player.health = gameScene.player.health;
    }
    if (typeof gameScene.player.power !== 'undefined') {
      window.rhinoGameData.player.power = gameScene.player.power;
    }
    if (typeof gameScene.player.score !== 'undefined') {
      window.rhinoGameData.player.score = gameScene.player.score;
    }
    if (typeof gameScene.player.hasMaxPower !== 'undefined') {
      window.rhinoGameData.player.hasMaxPower = gameScene.player.hasMaxPower;
    }

    window.rhinoGameData.gameState = gameScene.scene.isActive()
      ? 'running'
      : 'paused';
    try {
      window.parent.postMessage(window.rhinoGameData, '*');
    } catch (e) {
      console.error('Failed to send game data to parent:', e);
    }
  }
};
