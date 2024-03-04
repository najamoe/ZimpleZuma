import LinkedList from './linkedlist.js';
import GameView from './view.js';
import GameController from './controller.js';

export default class GameModel {
    constructor() {
        this.ballList = new LinkedList(); 
    }

    addBall(color) {
        this.ballList.addLast(color);
    }

    removeBall(index) {
        this.ballList.remove(index);
    }



    getBallColor(index) {
        return this.ballList.getAt(index);
    }

   detectAndRemoveMatches() {
    let matches = []; // Store starting index and length of each match
    let startIndex = 0; // Start index of current sequence of matching balls
    let count = 1; // Count of matching balls in the current sequence
    let prevColor = this.getBallColor(0); // Color of the first ball

    // Function to add matches to the array if they qualify
    const addMatch = () => {
        if (count >= 3) {
            matches.push({ startIndex, count });
        }
    };

    // Iterate over the balls starting from the second one
    for (let i = 1; i < this.ballList.length; i++) {
        const currentColor = this.getBallColor(i);
        if (currentColor === prevColor) {
            count++;
        } else {
            // Check if the previous sequence of balls is a match
            addMatch();

            // Reset for the next sequence
            startIndex = i;
            count = 1;
            prevColor = currentColor;
        }
    }

    // Check for a match at the end of the list
    addMatch();

    // Remove identified matches from the list, starting from the end to not affect the indexes
    for (let i = matches.length - 1; i >= 0; i--) {
        const match = matches[i];
        for (let j = 0; j < match.count; j++) {
            this.removeBall(match.startIndex);
        } if (matches.length > 0 && this.onBallsRemoved) {
            const removedBallsInfo = matches.map(match => ({startIndex: match.startIndex, count: match.count}));
            this.onBallsRemoved(removedBallsInfo);
        }

    }

    // Optionally, return the number of removed balls or matches for further processing
    return matches.reduce((acc, match) => acc + match.count, 0);
}

    

    clearBalls() {
        // Clear all balls from the ball list
        this.ballList = new LinkedList();
    }
}


