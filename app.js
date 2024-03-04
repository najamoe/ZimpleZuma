// importing my modules
import GameModel from './model.js';
import GameView from './view.js';
import GameController from './controller.js';

// creating instanses 
const model = new GameModel();
const view = new GameView();
const controller = new GameController(model, view);

// initializing the game
controller.initGame();
