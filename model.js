import LinkedList from './linkedlist.js';

class GameModel {
    constructor() {
        this.ballList = new LinkedList(); 
    }

    addBall(color) {
        this.ballList.addLast(color);
    }

    removeBall(index) {
        this.ballList.remove(index);
    }

    getBallCount() {
        return this.ballList.length;
    }

    getBallColor(index) {
        return this.ballList.getAt(index);
    }

    detectAndRemoveMatches() {
        // Implementer logikken til at finde og fjerne matches i kuglelisten
    }
}

export default GameModel;