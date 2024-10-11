

window.onload = function()                       
{
    var canvas = document.getElementById('mon_canvas'); 
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

var myInterval = setInterval(animate, 1000/50);    // 30 fois par seconde

const paddleWidth = 75;
    const paddleHeight = 10;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let R = 10;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    let score = 0;
    let isPlaying = false;

    document.getElementById('startButton').addEventListener('click', startGame);

    function startGame() {
        isPlaying = true;
        score = 0;
        document.getElementById('score').textContent = "Score: " + score;
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        draw();
    }

    document.addEventListener('mousemove', (event) => {
        if (isPlaying) {
            const relativeX = event.clientX - canvas.getBoundingClientRect().left;
            if (relativeX > 0 && relativeX < canvas.width) {
                paddleX = relativeX - paddleWidth / 2;
            }
        }
    });

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, R, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function drawScore() {
        document.getElementById('score').textContent = "Score: " + score;
    }

    function collisionDetection() {
        if (y + dy > canvas.height - R) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
                score++;
                drawScore();
            } else {
                isPlaying = false;
                alert("Game Over! Your score: " + score);
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();
        collisionDetection();

        if (isPlaying) {
            x += dx;
            y += dy;

            if (x + dx > canvas.width - R || x + dx < R) {
                dx = -dx;
            }
            if (y + dy < R) {
                dy = -dy;
            }

            requestAnimationFrame(draw);
        }

}

}
