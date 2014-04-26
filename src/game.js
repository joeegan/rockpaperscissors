/**
 * Basic Rock / Paper / Scissors game.
 *
 * @main rockPaperScissors
 * @param {String} players guess, must be chosen from the choices Array.
 */
function rockPaperScissors(guess) {
   var index = rockPaperScissors.choices.indexOf(guess);
   var computerIndex = Math.random() * 3 | 0;
   var result = (3 + index - computerIndex) % 3;

   console.log('Player chooses ', guess);
   console.log('Computer chooses ', rockPaperScissors.choices[computerIndex]);
   
   if (result === 0) {
      console.log('Draw!');
   } else if(result === 1) {
      console.log('Player wins!');
   } else {
      console.log('Computer wins!');
   }
}

/**
 * @readOnly
 * @type {String[]} possible guesses for game.
 */
rockPaperScissors.choices = ['rock', 'paper', 'scissors'];
