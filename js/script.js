document.getElementById('levelForm').addEventListener('submit', play)

function play(e) {
    e.preventDefault();
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    document.querySelector('h3').innerHTML = `Select the difficulty and press Play!`;
    const level = document.getElementById('level').value; /* easy = 100 ,medium = 81, hard = 49 */
    let squareNumber = level == 'easy' ? 100 : level == 'medium' ? 81 : 49;
    const nBombs = 16;
    let userScore = 0;
    let gameOver = false;
    const bombAudio = new Audio('./audio/bLungo.mp3');
    let squarePerRow = Math.sqrt(squareNumber);
    const bombsArray = generateBombs(nBombs, squareNumber);
    const winCondition = squareNumber - nBombs;
    for (let i = 1; i <= squareNumber; i++){
        const square = drawSquare(i, squarePerRow);
        square.addEventListener('click', handleSquareEvent)
        playGround.appendChild(square);
    }
    function handleSquareEvent() {
        if (!gameOver && (!this.classList.contains('safe'))) {
            if (bombsArray.includes(parseInt(this.innerText))){
                if (!document.querySelector('.bomb')){bombAudio.play();}
                this.classList.add('bomb');
                document.querySelector('h3').innerHTML = `You have achieved a score of ${userScore}`;
                gameOver = true;
                showAllBombs(bombsArray);
            }else{
                this.classList.add('safe');
                userScore ++;
                this.style.animation = 'boing 0.4s ease-in-out';
                if (userScore == winCondition){
                    document.querySelector('h3').innerHTML = `You Won!!! How did you do it?!`;
                }else{
                    document.querySelector('h3').innerHTML = `Your score is: ${userScore}`;
                }
            }
        }
    }
}