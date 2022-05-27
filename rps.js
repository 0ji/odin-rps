// rock = 0, paper = 1, scissors = 2
let selections = ['rock', 'paper', 'scissors']
function computerPlay() {
    // genereate random integer (choice) between 0-2
    let choice = Math.floor(Math.random() * 3);
    return selections[choice];
}

// plays a single round for rps
function playRound(playerSelection, computerSelection) {
    // playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerSelection.toLowerCase();
    console.log("Player: " + playerSelection + ", Computer: " + computerSelection)

    // check for tie first
    if (playerSelection == computerSelection) {
        return "Tie! Both chose " + playerSelection; 
    }

    playerSelection = playerSelection.toLowerCase();
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

function validateChoice(choice) {
    choice = choice.toLowerCase();
    for (const validChoice of selections) {
        if (choice == validChoice) {
            return true;
        }
        console.log("comparing " + choice + " to " + validChoice)
    }
    return false;
}
function game() {
    // play 5 rounds
    for (let i = 0; i < 5; i++) {
        let validChoice = false;
        while (validChoice == false) {
            let choice = prompt("Please enter a choice (rock, paper, scissors): ");
            // check if valid
            if (!validateChoice(choice)) {
                alert("You've entered an invalid choice. Please try again.");
            // if valid choice, then play a round
            } else {
                validChoice = true;
                let result = playRound(choice, computerPlay());
                console.log(result);
                alert(result);
            }
        }
     }
}

game();