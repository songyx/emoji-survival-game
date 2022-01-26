import 'phaser'

import Game from './game/Game'
import LevelUpScene from './game/ui/LevelUpScene'
// import FirstGameScene from './scenes/firstGameScene'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene, LevelUpScene],
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
      debug: false,
      gravity: { y: 0 }
    }
  }
}

window.addEventListener('load', () => {
  window['game'] = new Game(config)
})