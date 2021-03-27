let showGame = document.querySelector('.playGame')
let secretNumber
let attempts
let chosenNumber = ""
let remainingAttempts = document.querySelector('.chance-number')

let options = document.querySelector('.play-again')
let playButton = document.querySelector('.startGame')
let defeatScreen = document.querySelector('.game-over')
let victoryScreen = document.querySelector('.win')  

function start() {
    
    clear()
    
    defeatScreen.style.display = "none"
    victoryScreen.style.display = "none"
    options.style.display = "none"

    playButton.style.display = "none"
    showGame.style.display = "flex"

    secretNumber = parseInt(Math.random() * 10)

    attempts = 3
    remainingAttempts.innerHTML = `Você tem ${attempts} chances. Vamos lá!`

}

function gameplay () {

    chosenNumber = parseInt(document.querySelector('#chosen-number').value)
    
    if (chosenNumber == secretNumber) {
        youWin()
    } else if (chosenNumber > secretNumber) {
        attempts--
        remainingAttempts.innerHTML = `O número secreto é menor. <br> Você tem mais ${attempts} tentativa(s)!`
        clear()
    } else if (chosenNumber < secretNumber) {
        attempts--
        remainingAttempts.innerHTML = `O número secreto é maior. <br> Você tem mais ${attempts} tentativa(s)!`
        clear()
    }


    if (attempts == 0) {
        gameOver()
    }

}

function gameOver () {
    
    let showSecretNumber = document.querySelector('.game-over p')
    showSecretNumber.innerHTML = `O número secreto era ${secretNumber}!`

    showGame.style.display = "none"
    defeatScreen.style.display = "flex"

    options.style.display = "flex"
}

function youWin () {

    showGame.style.display = "none"
    victoryScreen.style.display = "flex"

    options.style.display = "flex"
}

function playAgain () {
    
    start()
    
}

function notPlayAgain () {

    defeatScreen.style.display = "none"
    victoryScreen.style.display = "none"
    options.style.display = "none"

    playButton.style.display = "flex"

}

function clear () {
    let clearInput = document.querySelector("#chosen-number")
    clearInput.value = ""
}
