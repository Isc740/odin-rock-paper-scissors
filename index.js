function getHumanChoice() {
    const choice = parseInt(
        prompt("Type your choice\n 1: Rock\n2:Paper\n3:Scissors"),
    );
    if (choice !== 1 && choice !== 2 && choice !== 3) {
        alert("Valor ingresado no valido!");
        getHumanChoice();
    }
    return choice;
}

const getComputerChoice = () => Math.floor(Math.random() * 3) + 1;

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        humanChoice === 1 && computerChoice === 2 ||
        humanChoice === 2 && computerChoice === 3 ||
        humanChoice === 3 && computerChoice === 1
    ) {
        computerScore++;
    } else if (
        humanChoice === 2 && computerChoice === 1 ||
        humanChoice === 3 && computerChoice === 2 ||
        humanChoice === 1 && computerChoice === 3
    ) {
        humanScore++;
    }
}
