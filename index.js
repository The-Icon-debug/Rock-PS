let userSel = document.getElementById('user-sel')
let compSel = document.getElementById('comp-sel')
let result = document.getElementById('result')
let score = document.getElementById('score')
let colorView = document.getElementById("color-view")
let playerSelection
let compSelection
let count = 0
const choices = ["Rock","Paper","Scissors"]
//const outcome = ["You Won!", "you Lost!", "It's a Draw!"]


const colorsArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]



function selectRock(){
    playerSelection = choices[0]
    userSel.textContent = playerSelection
    computerSelection()
    outCome()
    randomColor()
}

function selectPaper(){
    playerSelection = choices[1]
    userSel.textContent = playerSelection
    computerSelection()
    outCome()
    randomColor()
}

function selectScissors(){
    playerSelection = choices[2]
    userSel.textContent = playerSelection
    computerSelection()
    outCome()
    randomColor()
}

function computerSelection(){
    let randomNum = randomGen()
    compSelection = choices[randomNum]
    compSel.textContent = compSelection
    //console.log(randomNum)
}

function outCome(){
    if (playerSelection === "Rock" && compSelection === "Rock"){
        result.innerHTML = "It's a Draw!"
    }
    else if (playerSelection === "Rock" && compSelection === "Paper"){
        count--
        score.innerText = count
        result.innerHTML = "You Lost! Try Again"
        
    }
    else if (playerSelection === "Rock" && compSelection === "Scissors"){
        result.innerHTML = "You Won! Play Again"
        count++
        score.innerText = count
    }
    else if (playerSelection === "Paper" && compSelection === "Rock"){
        result.innerHTML = "You Won! Play Again"
        count++
        score.innerText = count
    }
    else if (playerSelection === "Paper" && compSelection === "Paper"){
        result.innerHTML = "It's a Draw!"
    }
    else if (playerSelection === "Paper" && compSelection === "Scissors"){
        result.innerHTML = "You Lost! Try Again"
        count--
        score.innerText = count
    }
    else if (playerSelection === "Scissors" && compSelection === "Rock"){
        result.innerHTML = "You Lost! Try Again"
        count--
        score.innerText = count
    }
    else if (playerSelection === "Scissors" && compSelection === "Paper"){
        result.innerHTML = "You Won! Play Again"
        count++
        score.innerText = count
    }
    else if (playerSelection === "Scissors" && compSelection === "Scissors"){
        result.innerHTML = "It's a Draw!"
    }
}

function randomColor(){
    let mycol = "#"
    for( let i = 1; i < 7; i++){
        let randCol = randomColorGen()
        mycol += colorsArray[randCol]
    }
    document.body.style.backgroundColor = mycol
    colorView.innerHTML = mycol
    console.log(mycol);
}




function randomGen(){
    return Math.floor(Math.random()*choices.length)
}

function randomColorGen(){
    return Math.floor(Math.random()*colorsArray.length)
}