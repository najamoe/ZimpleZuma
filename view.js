class GameView {
    constructor() {
        this.gameContainer = document.getElementById('game-container');
    }

    renderBalls(ballList) {
        // Clear previous list of balls
        this.gameContainer.innerHTML = '';

        // Convert linked list to array and then iterate
        const ballArray = Array.from(ballList);
        ballArray.forEach(color => {
            const ballElement = document.createElement('div');
            ballElement.className = 'ball';
            ballElement.style.backgroundColor = color;
            this.gameContainer.appendChild(ballElement);
        });
    }

    animateCannonShot() {
        // Implement animation for shooting the cannonball
    }

    animateMatchRemoval() {
        // Implement animation for removing matches
    }
}

export default GameView;
