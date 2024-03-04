

export default class GameView {
    constructor() {
        this.gameContainer = document.getElementById('game-container');
    }

    renderBalls(ballList) {
        // Clear previous list of balls
        this.gameContainer.innerHTML = '';
    
        // Iterate through the linked list
        let current = ballList.head;
        while (current) {
            const ballElement = this.createBallElement(current.data);
            this.gameContainer.appendChild(ballElement);
            current = current.next;
        }
    }
    

    createBallElement(balltype) {
        const ball = document.createElement("div");
        ball.className = "ball";
        const img = document.createElement("img");
        img.src = `images/marble${balltype}.png`; 
        img.dataset.balltype = balltype;
        ball.dataset.balltype = balltype;
        ball.appendChild(img);
        return ball;
    }

    // Animation code from petlatkea
    animateCannonShot(newBall) {
        const source = newBall.getBoundingClientRect();
        const img = newBall.firstElementChild;
        const dest = img.getBoundingClientRect();
        const deltaX = source.x - dest.x;
        const deltaY = source.y - dest.y;
        img.style.setProperty("--delta-x", deltaX + "px");
        img.style.setProperty("--delta-y", deltaY + "px");
        img.classList.add("animatefromcannon");
        newBall.classList.add("expand");
        newBall.addEventListener("animationend", animationComplete);
    
        function animationComplete() {
            newBall.removeEventListener("animationend", animationComplete);
            newBall.classList.remove("expand");
            img.classList.remove("animatefromcannon");
            img.style.removeProperty("--delta-x");
            img.style.removeProperty("--delta-y");
        }
        // Make newBall clickable as well
        this.makeBallClickable(newBall);
    }

    makeBallClickable(ball, clickBallHandler) {
        ball.querySelector("img").addEventListener("click", clickBallHandler);
    }

    animateMatchRemoval(ballsToRemove) {
        // Implement animation for removing matches
        ballsToRemove.forEach(ball => {
            ball.classList.add("remove");
            requestAnimationFrame(() => {
                ball.addEventListener("animationend", () => {
                    ball.removeEventListener("animationend", () => {});
                    ball.remove();
                });
            });
        });
    }
}


