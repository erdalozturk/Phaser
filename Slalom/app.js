var App = (function () {
    function App() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, App.containerID, {
            create: this.create
        });
    }
    App.prototype.create = function () {
        this.game.state.add('Preloader', Preloader);
        this.game.state.add('MainMenu', MainMenu);
        this.game.state.add('Game', Game);
        this.game.state.start('Preloader', true, false);
    };
    return App;
}());
App.containerID = 'game-container';
window.onload = function () {
    var game = new App();
};
//# sourceMappingURL=app.js.map