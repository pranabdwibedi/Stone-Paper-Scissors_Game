let buttons = document.querySelectorAll(".buttons");
let userWin = document.querySelector("#winCount")
let compWin = document.querySelector("#lossCount")
let outputMsg = document.querySelector("#output")


let userScore = 0;
let compScore = 0;


let availableChoices = ["stone","paper","scissor"];
                  //0        1        2


let compChoicer = () =>{
    let cChoice = Math.floor(Math.random()*3);
    return availableChoices[cChoice];
}

let winnerCalculator = (uChoice,cChoice) =>{
    if((uChoice == "stone" && cChoice=="scissor") || (uChoice == "scissor" && cChoice=="paper") || (uChoice == "paper" && cChoice=="stone")){
        userScore++;
        userWin.innerText = userScore;
        outputMsg.innerText = `You win, ${uChoice} beats ${cChoice}`
        outputMsg.style.backgroundColor = "#3A7D44"
    }
    else if((cChoice == "stone" && uChoice == "scissor") || (cChoice == "paper" && uChoice == "stone") || (cChoice == "scissor" && uChoice == "paper")){
        compScore++;
        compWin.innerText = compScore;
        outputMsg.innerText = `You lost, ${cChoice} beats ${uChoice}`
        outputMsg.style.backgroundColor = "rgb(161, 36, 36)"
    }
    else{
        outputMsg.innerText = "Game was Draw ! Play again"
        outputMsg.style.backgroundColor = "#69B578"
    }
}

buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
        let userChoice = button.getAttribute("id");
        let compChoice = compChoicer();
        console.log("User : ",userChoice,"\nComputer : ",compChoice);
        winnerCalculator(userChoice,compChoice);
    })
})