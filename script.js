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
    let player_score = 0;
    let computer_score = 0;
    const maxRound = 5;

    // creates nodelist of buttons on page
    const buttons = document.querySelectorAll('button');
        //iterates through nodelist
        buttons.forEach(button => {

                // add listeners to button as it iterates over them
                button.addEventListener('click', () => {
                    
                    // sets player to clicked buttons classname
                    let player = button.className;
                    let computer = computer_choice();
                    let winner = play_round(player, computer);

                    console.log(`Current round ${round}`)
                    console.log(`player chose ${player}`);
                    console.log(`computer chose ${computer}`);
                    console.log(winner);
                    console.log(`Player ${player_score} & Computer ${computer_score}`);
                    round ++;
                });
        });

    function computer_choice(){
        const rpc = ["rock", "paper", "scissors"];
        return rpc[Math.floor(Math.random() * 3)];
    }

    function play_round(get_player_choice, get_computer_choice){
        if (get_player_choice == get_computer_choice){
            return "Tie";
        }

        if(get_player_choice == "rock"){
            if(get_computer_choice == "paper"){
                computer_score++;
                return "computer wins";
            }
            else{
                player_score++;
                return "player wins";
            }
        }

        if(get_player_choice == "paper"){
            if(get_computer_choice == "scissors"){
                computer_score++; 
                return "computer wins";
            }
            else{
                player_score++;
                return "player wins";
            }
        }

        if(get_player_choice == "scissors"){
            if(get_computer_choice == "rock"){
                computer_score++;
                return "computer wins";
            }
            else{
                player_score++;
                return "player wins";
            }
        }
    }
});
