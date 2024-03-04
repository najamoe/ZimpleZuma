import GameModel from './model.js';
import GameView from './view.js';

export default class GameController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Listen for user input or other events
        this.setupEventListeners();
    }

    // Initialize the game
    initGame() {
        // Clear previous balls from the model
        this.model.clearBalls();

        // Generate and add random balls to the game
        for (let i = 0; i < 5; i++) {
            const randomBallType = Math.floor(Math.random() * 6) + 1;
            this.model.addBall(randomBallType);
        }

        // Display the starting balls in the view
        this.view.renderBalls(this.model.ballList);

        // Load the cannon with a ball
        this.loadCannonWithBall();
    }

    setupEventListeners() {
        const gameContainer = document.querySelector("#game-container");
        gameContainer.addEventListener("click", this.clickBall.bind(this));
    }
    

    loadCannonWithBall() {
        // Create a cannonball element
        const cannonBallType = Math.ceil(Math.random() * 6);
        const cannonBall = this.createBallElement(cannonBallType);
    
        // Append the cannonball to the cannon
        document.querySelector("#cannon").innerHTML = ''; // Clear previous cannonball
        document.querySelector("#cannon").appendChild(cannonBall);
    
        // Store the cannonball type for later use
        this.cannonBallType = cannonBallType;
    }
    

// Method to handle the user's click on a ball
clickBall(event) {
    // Prevent default to avoid any default action that might trigger twice
    event.preventDefault();

    // Logic to determine the side and create a new ball
    const side = event.offsetX / event.target.offsetWidth < 0.5 ? "before" : "after";
    const newBall = this.createBallElement(this.cannonBallType);

    // Find the clicked ball
    const existingBall = event.target.closest('.ball'); // Using closest to ensure the div.ball is targeted
    if (existingBall) {
        if (side === "before") {
            existingBall.parentNode.insertBefore(newBall, existingBall);
        } else {
            existingBall.parentNode.insertBefore(newBall, existingBall.nextElementSibling);
        }

        // Animate and handle the new ball
        this.view.animateCannonShot(newBall);
        this.makeBallClickable(newBall);
        this.loadCannonWithBall(); // Load a new ball into the cannon
    }
}

    // Helper function to create a ball element
    createBallElement(ballType) {
        const ball = document.createElement("div");
        ball.className = "ball";
        const img = document.createElement("img");
        img.src = `images/marble${ballType}.png`;
        img.dataset.balltype = ballType;
        ball.dataset.balltype = ballType;
        ball.appendChild(img);
        return ball;
    }

    // Add ball to the chain
    addBallToChain(ball) {
        document.querySelector("#balls").appendChild(ball);
        this.makeBallClickable(ball);
    }

    // Remove balls from the chain
    removeBallsFromChain(balls) {
        balls.forEach(ball => {
            ball.classList.add("remove");
            requestAnimationFrame(() => ball.addEventListener("animationend", () => {
                ball.removeEventListener("animationend", removeElement);
                ball.remove();
            }));
        });
    }

    // Make ball clickable
    makeBallClickable(ball) {
        ball.querySelector("img").addEventListener("click", this.clickBall.bind(this));
    }
}


