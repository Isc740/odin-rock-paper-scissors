function getHumanChoice() {
    let choice = parseInt(prompt("Type your choice\n 1: Rock\n2:Paper\n3:Scissors"));
    if (choice !== 1 && choice !== 2 && choice !== 3) {
        alert("Valor ingresado no valido!");
        getHumanChoice();
    }
    return choice;
}

const getComputerChoice = () => Math.floor((Math.random() * 3)) + 1;
