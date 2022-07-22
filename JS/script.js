console.log("Welcome to tic tac toe")
let turnAudio = new Audio('Materials/turnAudio2.wav');
let winAudio = new Audio('Materials/winAudio.mp3')
let gameOverAudio = new Audio('Materials/gameOver.wav');
let turn = "X";
let gameOver = false;
let info = document.getElementsByClassName('info')[0];
let boxTexts = document.querySelectorAll(".boxText");

//change turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
//function to checkWin
function checkWin() {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    Array.from(wins).forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText === boxTexts[e[2]].innerText) && boxTexts[e[0]].innerText !== "") {
            info.innerText = 'Congratulation ! ' + boxTexts[e[0]].innerText + "  have won";
            boxTexts[e[0]].style.color = 'red';
            boxTexts[e[1]].style.color = 'red';
            boxTexts[e[2]].style.color = 'red';
            gif.style.width = '12vw';
            gameOver = true;
            winAudio.play();
        }
    })


}
//game logic 


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    
    element.addEventListener('click', () => {
        if (!gameOver){
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!gameOver) {
                info.innerText = 'Turn for ' + turn;
            }
        }
    }
    })

})
// if(!gameover){
//     info.innerText="It is a TIE";
// }
Array.from(boxes).forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'rgb(215, 110, 18)';
    })
})
Array.from(boxes).forEach(element => {
    element.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'white';
    })
})

// function for reset

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
        element.style.color = 'black'
        gameOverAudio.play();
        gameOver=false;
        info.innerText = 'Turn for ' + turn;
        gif.style.width = '0';
    })
    

})