const computerChoiceDisplay = document.getElementById('computer-Choice');
const userChoiceDisplay = document.getElementById('user-Choice');
const resultDisplay = document.getElementById('Result');
let userChoice;
let computerChoice;
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    
    if (randomNumber === 1) {
        computerChoice ='rock'
    }
    if (randomNumber === 2) {
        computerChoice ='scissors'
    }
    if (randomNumber === 3) {
        computerChoice ='paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost!'
    }
    
    resultDisplay.innerHTML = result
}