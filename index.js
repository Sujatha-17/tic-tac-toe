let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-btn");
let newGame = document.querySelector(".newgame");
let player1 = true;
let winnerContainer = document.querySelector(".winner-container");
let winnerText = document.querySelector("#winner-text")
const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        const pos1value = boxes[pattern[0]].innerText;
        const pos2value = boxes[pattern[1]].innerText;
        const pos3value = boxes[pattern[2]].innerText;

        if (pos1value !== '' && pos2value !== '' && pos3value !== '') {
            if (pos1value === pos2value && pos2value === pos3value) {
                const winnerSymbol = player1 ? "O" : "X";
                winnerText.textContent = `Congratulations, Player ${winnerSymbol} won the game`;
                winnerContainer.classList.add('show'); 
                boxes.forEach(box => box.disabled = true);
                return;
            }
        }
    }
};



boxes.forEach(box => {
    box.addEventListener("click", () => {
        
        if (box.innerText === '') {
            if (player1) {
               box.innerText = "X";
                player1 = false;
            
            } else {
                box.innerText = "O";
                player1 = true;
            }
            checkWinner();
        }
    });
});

resetGame.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        
    });
    player1 = true; 
});
newGame.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    player1 = true; 
    winnerContainer.style.display = "none"; 
    document.getElementById("winnercontainer").style.display = "block";
});



