// rock = 0, paper = 1, scissors = 2
let selections = ['Rock', 'Paper', 'Scissors']
function computerPlay() {
    // genereate random integer (choice) between 0-2
    let choice = Math.floor(Math.random() * 3);
    return selections[choice];
}

console.log(computerPlay());