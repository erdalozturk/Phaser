class Preloader {
    protected game: Phaser.Game;

    init() : void {
        this.game.input.maxPointers = 1;
        this.game.scale.pageAlignHorizontally = true;
    }

    preload() : void {
        this.game.load.image('logo', 'Resources/images/logo.png');
        this.game.load.image('skis', 'Resources/images/skis.png');
        this.game.load.image('snow', 'Resources/images/snow.png');
        this.game.load.image('tree', 'Resources/images/tree.png');
        this.game.load.bitmapFont('fat-and-tiny', 'Resources/images/fat-and-tiny.png', 'Resources/images/fat-and-tiny.xml');
        this.game.load.spritesheet('skier', 'Resources/images/skier.png', 32, 32);
        this.game.load.spritesheet('flags', 'Resources/images/flags.png', 16, 16);
    }

    create(): void {
        this.game.state.start('MainMenu');
    }
}