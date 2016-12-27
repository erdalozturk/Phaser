class Game {
    private game: Phaser.Game;
    
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, null, { create: this.create });
    }

    create() {
        this.game.state.add('Preloader', Preloader);
        this.game.state.add('MainMenu', MainMenu);
        this.game.state.add('Play', Play);
        this.game.state.start('Preloader', true, false);
    }
}

window.onload = () => {
    let app = new Game();
}