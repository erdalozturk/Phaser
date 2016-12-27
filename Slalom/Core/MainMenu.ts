class MainMenu {
    protected game : Phaser.Game;

    create() : void {

        this.game.stage.backgroundColor = 0xffffff;

        var logo = this.game.add.image(this.game.world.centerX, 100, 'logo');
        logo.anchor.x = 0.5;

        var start = this.game.add.bitmapText(this.game.world.centerX, 460, 'fat-and-tiny', 'CLICK TO PLAY', 64);
        start.anchor.x = 0.5;
        start.smoothed = false;
        start.tint = 0xff0000;

        this.game.input.onDown.addOnce(this.start, this);
    }
    start() : void {
        this.game.state.start('Play');
    }
}