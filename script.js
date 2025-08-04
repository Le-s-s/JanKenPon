    // this program receives user input and generated a random choice between 3 options using a number generator
    // after the choice is made, the number will be assigned to rock(0) paper(1) or scissors(2).
    // the game rules will be applied and the winner wins, adding to their score.
    // after a score is made, the round counter will also go up
    // first receive input
    // when input is confirmed generate number
    // in computer function assign generated number to element for computer.
    // compare user input with computer input using the rulse of rock paper scissors.
    // whoever wins count their score up
    // when a winner is decided start a new round by counting up

document.addEventListener("DOMContentLoaded", () => {
    let round = 1;
    let playerScore = 0;
    let cpuScore = 0;
    const maxRound = 5;

    // creates nodelist of buttons on page
    const buttons = document.querySelectorAll('button');
        //iterates through nodelist
        buttons.forEach(button => {

                // add listeners to button as it iterates over them
                button.addEventListener('click', () => {
                    
                    // sets player to clicked buttons classname
                    let player = button.className;
                    let computer = cpuChoice();
                    let roundWinner = playRound(player, computer);;

                    let display = document.querySelector(".results");
                    // sets all html within results to empty
                    display.innerHTML = "";

                    if(round < maxRound){
                        // creates element of type changes text and appends results classed div
                        let currentRound = document.createElement("h1");
                        currentRound.textContent = `Round ${round}`;
                        display.appendChild(currentRound)

                        let score = document.createElement("p");
                        score.textContent = `Player: ${playerScore}. CPU: ${cpuScore}`;
                        display.appendChild(score);

                        let choice = document.createElement('p');
                        choice.textContent = `Player chose ${player}, CPU chose ${computer}.`;
                        display.appendChild(choice);

                        let rWinner = document.createElement("p");
                        rWinner.textContent = `${roundWinner}`;
                        display.appendChild(rWinner);

                        round ++;
                        }
                    else if(round == maxRound){
                        let winner = document.createElement("h1");
                        winner.textContent = `The winner of the game is ${roundWinner}!`;
                        display.appendChild(winner)
                    }
                });
        });

    function cpuChoice(){
        // use random number and array of strings to choose and returns result
        const rpc = ["rock", "paper", "scissors"];
        return rpc[Math.floor(Math.random() * 3)];
    }

    function playRound(get_player_choice, get_cpuChoice){
        // takes results of cpu choice and compares it to player button clicked in a very convoluted way
        if(round < maxRound){
            if (get_player_choice == get_cpuChoice){
                return "Tie";
            }

            if(get_player_choice == "rock"){
                if(get_cpuChoice == "paper"){
                    cpuScore++;
                    return "Round winner is CPU.";
                }
                else{
                    playerScore++;
                    return "Round winner is player!";
                }
            }

            if(get_player_choice == "paper"){
                if(get_cpuChoice == "scissors"){
                    cpuScore++; 
                    return "Round winner is CPU.";
                }
                else{
                    playerScore++;
                    return "Round winner is player!";
                }
            }

            if(get_player_choice == "scissors"){
                if(get_cpuChoice == "rock"){
                    cpuScore++;
                    return "Round winner is CPU.";
                }
                else{
                    playerScore++;
                    return "Round winner is player!";
                }
            }
        }
        else{
            // game winner logic, very advanced.
            if(playerScore > cpuScore){
                return "Player";

            }
            else{
                return "CPU";
            }
        }
    }
});
