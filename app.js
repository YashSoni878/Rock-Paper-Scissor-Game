let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Its a Draw!");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // Scissors, paper
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            } 
        }
        else if(userChoice === "paper"){
            // Rock, scissors
            if(compChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            // Rock, paper
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});