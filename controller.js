import GameModel from './model.js';
import GameView from './view.js';

class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Lyt efter brugerinput eller andre begivenheder
        this.setupEventListeners();
    }

    // Initialiser spillet
    initGame() {
        // Tilføj startkugler til spillet
        this.model.addBall('rød');
        this.model.addBall('blå');
        this.model.addBall('grøn');
        this.model.addBall('rød');
        this.model.addBall('gul');

        // Vis de startkugler i viewet
        this.view.renderBalls(this.model.ballList);
    }

    // Lyt efter brugerinput eller andre begivenheder
    setupEventListeners() {
        // Implementer eventlisteners som f.eks. klik på kugler
    }

    // Metode til at håndtere brugerens klik på en kugle
    handleBallClick(index) {
        // Implementer logikken til at håndtere klik på en kugle
    }
}

export default GameController;