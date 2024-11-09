function getHumanChoice() {
    const choice = prompt("Type your choice\nRock\nPaper\nScissors")
        .toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Valor ingresado no valido!");
    }
    return choice;
}

const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return undefined;
    }
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        computerScore++;
    } else if (
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors"
    ) {
        humanScore++;
    }
}
