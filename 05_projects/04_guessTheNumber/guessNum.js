let randomNum=parseInt(Math.random()*100+1)
const inputField=document.querySelector('#guessField')
const submitInput=document.querySelector('#submit_field')
const GuessArray=document.querySelector('#previous_guesses')
const count=document.querySelector('#count')
const lowHighMessage=document.querySelector('.lowerOrHigher')
const startOver=document.querySelector('#resultParas')

const para=document.createElement('p')

all_previous_guesses=[]
guess_count=1

let playGame = true;

if (playGame) {
    submitInput.addEventListener('click',(submited)=>{
        submited.preventDefault()
        const guess=parseInt(inputField.value)
        validatingGuess(guess)
    })
}

function validatingGuess(guess) {
    if (isNaN(guess)) {
        alert('enter valid Number');
    }else if(guess<1 || guess>100){
        alert('enter Number between 1 - 100')
    }else{
        all_previous_guesses.push(guess)
        if (guess_count===11) {
            displayGuess(guess)
            displayMessage(`Game Over the random Number was ${randomNum}`)
            gameOver()
        }else{
            displayGuess(guess)
            checkTheGuess(guess)
        }
    }
    
}

function checkTheGuess(guess){
    if (guess===randomNum) {
        displayMessage(`you Have Guessed the number`)
    }else if(guess<randomNum){
        displayMessage(`The number is too low`)
    }else if(guess>randomNum){
        displayMessage(`the number is too high`)
    }
}

function displayGuess(guess) {
    inputField.value=''
    GuessArray.innerHTML+=`${guess},`
    guess_count++
    count.innerHTML=`${11-guess_count}`;
}

function displayMessage(message) {
    lowHighMessage.innerHTML=`<h2>${message}</h2>`
}

function gameOver() {
    inputField.value = '';
    inputField.setAttribute('disabled', '');
    startOver.appendChild(para);
    para.classList.add('button');
    para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    all_previous_guesses = [];
    guess_count = 1;
    GuessArray.innerHTML = '';
    count.innerHTML = `${11 - guess_count}`;
    inputField.removeAttribute('disabled');
    startOver.removeChild(para);
    displayMessage('');
    playGame = true;
    })}