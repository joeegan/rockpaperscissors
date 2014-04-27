describe('rock paper scissors', function() {

   it('should throw an error if the human choice does not match the legal choices', function(){
      expect(function(){rockPaperScissors.judge('foo', 'rock');}).toThrow();
   });

   it('should award paper over rock', function() {
      expect(rockPaperScissors.judge('paper', 'rock')).toBe(rockPaperScissors.results.HUMAN_WIN);
      expect(rockPaperScissors.judge('rock', 'paper')).toBe(rockPaperScissors.results.COMPUTER_WIN);
   });

   it('should award scissors over paper', function() {
      expect(rockPaperScissors.judge('paper', 'scissors')).toBe(rockPaperScissors.results.COMPUTER_WIN);
      expect(rockPaperScissors.judge('scissors', 'paper')).toBe(rockPaperScissors.results.HUMAN_WIN);
   });

   it('should award rock over scissors', function() {
      expect(rockPaperScissors.judge('rock', 'scissors')).toBe(rockPaperScissors.results.HUMAN_WIN);
      expect(rockPaperScissors.judge('scissors', 'rock')).toBe(rockPaperScissors.results.COMPUTER_WIN);
   });

   it('should judge the result to be a draw if the choices are valid and identical', function() {
      expect(rockPaperScissors.judge('scissors', 'scissors')).toBe(rockPaperScissors.results.DRAW);
      expect(rockPaperScissors.judge('paper', 'paper')).toBe(rockPaperScissors.results.DRAW);
      expect(rockPaperScissors.judge('rock', 'rock')).toBe(rockPaperScissors.results.DRAW);
   });

});