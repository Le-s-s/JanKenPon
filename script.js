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

let round = 1;
let player_score = 0;
let computer_score = 0;

main()
function main(){
    let player = player_choice()
    let computer = computer_choice()

    let winner = play_round(player, computer)

    console.log(`player chose ${player}`)
    console.log(`computer chose ${computer}`)
    console.log(winner)
    console.log(`Player ${player_score} & Computer ${computer_score}`)
    round +=1

    function player_choice(){
        let player = String(prompt("Rock, Paper, or Scissors?").toLowerCase())
        if(player == "rock" || player == "paper" || player == "scissors"){
            return player
        }
        else{
            return player_choice()
        }
    }

    function computer_choice(){
        const rpc = ["rock", "paper", "scissors"];
        return rpc[Math.floor(Math.random() * 3)];
    }

    function play_round(get_player_choice, get_computer_choice){
        console.log(`Current round ${round}`)
        if (get_player_choice == get_computer_choice){
            return "Tie"
        }

        if(get_player_choice == "rock"){
            if(get_computer_choice == "paper"){
                computer_score ++
                return "computer wins"
            }
            else{
                player_score ++
                return "player wins"
            }

        }

        if(get_player_choice == "paper"){
            if(get_computer_choice == "scissors"){
                computer_score ++ 
                return "computer wins"
            }
            else{
                player_score ++
                return "player wins"
            }
        }

        if(get_player_choice == "scissors"){
            if(get_computer_choice == "rock"){
                computer_score ++
                return "computer wins"
            }
            else{
                player_score ++
                return "player wins"
            }
        }
    }
}