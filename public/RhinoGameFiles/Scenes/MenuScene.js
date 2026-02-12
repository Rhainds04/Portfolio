class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  preload() {
    // Load any menu assets here if needed
    // this.load.image('menuBackground', 'assets/menu/background.png');
    // this.load.image('logo', 'assets/menu/logo.png');
  }

  create() {
    const { width, height } = this.scale;
    const centerX = width / 2;
    const centerY = height / 2;

    // Game title
    this.add.text(centerX, centerY - 75, 'RHINO GAME', {
      fontSize: '64px',
      fontFamily: 'pixelFont',
      color: '#39FF14',
      fontStyle: 'bold'
    }).setOrigin(0.5);
    
    this.add.text(centerX, centerY, 'Move to start.',{
        fontSize: "20px",
        fontFamily: "pixelFont",
        color: '#39FF14'
    }).setOrigin(.5);

    this.input.keyboard.on('keydown', () => {
      const allowedKeys = ['W', 'A', 'S', 'D'];

      if(allowedKeys.includes(event.key.toUpperCase())){
      this.scene.start('GameScene');
      }
    });
  }
}