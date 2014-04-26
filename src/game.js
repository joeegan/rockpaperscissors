/**
 * Basic Rock / Paper / Scissors game.
 *
 * @main rockPaperScissors
 * @param {String} players guess, must be chosen from the choices Array.
 */
function rockPaperScissors(humanChoice) {
   console.log('Player chooses ', humanChoice);
   var computerChoice = rockPaperScissors.generateComputerChoice();
   console.log('Computer chooses ', computerChoice);
   return rockPaperScissors.judge(humanChoice, computerChoice);
}

/**
 * @returns {String}
 */
rockPaperScissors.generateComputerChoice = function() {
   return rockPaperScissors.choices[Math.random() * 3 | 0];
};

/**
 * For readable testing.
 * @param humanChoice
 * @param computerChoice
 */
rockPaperScissors.judge = function(humanChoice, computerChoice){
   var humanIndex = rockPaperScissors.choices.indexOf(humanChoice);
   if (humanIndex == -1) throw Error('Player must supply a guess of ' + rockPaperScissors.choices);
   var computerIndex = rockPaperScissors.choices.indexOf(computerChoice);
   var resultIndex = (3 + humanIndex - computerIndex) % 3;
   return rockPaperScissors.results[Object.keys(rockPaperScissors.results)[resultIndex]];
};

/**
 * @readOnly
 * @type {String[]} Legal choices for game.
 */
rockPaperScissors.choices = ['rock', 'paper', 'scissors'];

/**
 * @readOnly
 * @type {Object} Possible results of the game enum.
 */
rockPaperScissors.results = {
   DRAW: 'Draw!',
   HUMAN_WIN: 'Player wins!',
   COMPUTER_WIN: 'Computer wins!'
};
