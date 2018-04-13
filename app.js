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
    return 'Tie!';
  }

  if(userChoice !== computerChoice){
    if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return 'You win!';
      } else {
        return 'Computer wins.!';
      }
    } else if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'You win!';
      } else {
        return 'Computer wins.!';
      }
    } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'You win!';
      } else {
        return 'Computer wins.';
      }
    }
  }
}
// Play game
function playGame(){
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice);
  console.log('The computer chose ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

  playGame();
