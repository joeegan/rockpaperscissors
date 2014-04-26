describe('Rock paper scissors', function() {

   it('Validates', function() {
      expect(rockPaperScissors.judge('paper', 'rock')).toBe(rockPaperScissors.results.HUMAN_WIN);
      expect(rockPaperScissors.judge('rock', 'paper')).toBe(rockPaperScissors.results.COMPUTER_WIN);
      expect(rockPaperScissors.judge('paper', 'paper')).toBe(rockPaperScissors.results.DRAW);
   });

});