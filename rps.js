// rock = 0, paper = 1, scissors = 2
let selections = ['Rock', 'Paper', 'Scissors']
function computerPlay() {
    // genereate random integer (choice) between 0-2
    let choice = Math.floor(Math.random() * 3);
    return selections[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log("Player: " + playerSelection + ", Computer: " + computerSelection)

    if (playerSelection == computerSelection) {
        return "Tie! Both chose " + playerSelection; 
    }

    switch(playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'paper':
                    return "You lose! " + computerSelection + " beats " + playerSelection;
                case 'scissors':
                    return "You win! " + playerSelection + " beats " + computerSelection;
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return "You win! " + playerSelection + " beats " + computerSelection;
                case 'scissors':
                    return "You lose! " + computerSelection + " beats " + playerSelection;
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return "You lose! " + computerSelection + " beats " + playerSelection;
                case 'paper':
                    return "You win! " + playerSelection + " beats " + computerSelection;

            }
    }
}

for (let i=0; i<5; i++) {
    console.log(playRound(computerPlay(), computerPlay()));
}