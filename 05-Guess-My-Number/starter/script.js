'use strict';

//getting random number
let secretNumber = Math.trunc(Math.random() * 100) + 1;
//displays secret number
// document.querySelector('.number').textContent = secretNumber;
//the score
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//when the button is clicked it will display the value of the class .guess in the console log.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //shows that there is no number in .guess.
  if (!guess) {
    //if the number in .guess is has no number.
    // document.querySelector('.message').textContent = ' ❓ No Number!';
    displayMessage(' ❓ No Number!');
  } else if (guess === secretNumber) {
    //if the number in .guess is correct.
    // document.querySelector('.message').textContent =
    //   '🔰 Correct Number You Win!';
    displayMessage('🔰 Correct Number You Win!');
    //displays secret number
    document.querySelector('.number').textContent = secretNumber;
    //targets the background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess if wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // returns too high or too low if guess is not secretnumber
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '🤯 That guess is too high. Try Again'
      //     : '🤯 That guess is too low. Try Again';
      displayMessage(
        guess > secretNumber
          ? '🤯 That guess is too high. Try Again'
          : '🤯 That guess is too low. Try Again'
      );
      //subtracts from score
      score--;
      //displays the score in the .score class
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭 You Lost The Game';
      displayMessage('😭 You Lost The Game');
      //displays the score in the .score class
      document.querySelector('.score').textContent = 0;
    }
  }

  // }else if (guess > secretNumber) {
  //   if (score > 1) {
  //     // if the number in .guess is higher than the secretnumber.
  //     document.querySelector('.message').textContent =
  //       '🤯 That guess is too high. Try Again';
  //     //subtracts from score
  //     score--;
  //     //displays the score in the .score class
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You Lost The Game';
  //     //displays the score in the .score class
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     // if the number in .guess is higher than the secretnumber.
  //     document.querySelector('.message').textContent =
  //       '🤯 That guess is too low. Try Again';
  //     //subtracts from score
  //     score--;
  //     //displays the score in the .score class
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You Lost The Game';
  //     //displays the score in the .score class
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//resetting the game using the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
