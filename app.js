// define userInput via button onclick


// Get user choice
function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    return 'Error!';
  }
}
// Get computer choice
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    default:
    return 'error';
  }
}
// Determine Winner
function determineWinner(userChoice, computerChoice) {
  if(userChoice === computerChoice){
     document.getElementById("outcome").innerHTML = 'Tie!';
    return 'Tie!';
  }

  if(userChoice !== computerChoice){
    if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        wins++;
        document.getElementById("wins").innerHTML = wins;
         document.getElementById("outcome").innerHTML = 'Winner!';
        return 'You win!';
      } else {
        losses++;
        document.getElementById("losses").innerHTML = losses;
         document.getElementById("outcome").innerHTML = 'Loser!';
        return 'Computer wins.!';
      }
    } else if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        wins++;
        document.getElementById("wins").innerHTML = wins;
         document.getElementById("outcome").innerHTML = 'Winner!';
        return 'You win!';
      } else {
        losses++;
        document.getElementById("losses").innerHTML = losses;
         document.getElementById("outcome").innerHTML = 'Loser!';
        return 'Computer wins.!';
      }
    } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        wins++;
        document.getElementById("wins").innerHTML = wins;
         document.getElementById("outcome").innerHTML = 'Winner!';
        return 'You win!';
      } else {
        losses++;
        document.getElementById("losses").innerHTML = losses;
         document.getElementById("outcome").innerHTML = 'Loser!';
        return 'Computer wins.';
      }
    }
  }
}

// Play game
function clickRock(){
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice);
  console.log('The computer chose ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

function clickPaper(){
  var userChoice = getUserChoice('paper');
  var computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice);
  console.log('The computer chose ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

function clickScissors(){
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice);
  console.log('The computer chose ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
//Tally of wins and losses
var wins = 0;
var losses = 0;
