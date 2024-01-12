const palindromo = require('../utils/palindromo');


//Data Driven Testing
describe('palindromo', () => {
    test.each`
    firstValue             |  expectedResult    
    ${"HELLO"}                 |  ${"OLLEH"}
    ${"OK"}                 |  ${"KO"}
    ${"KING"}             |  ${"GNIK"}
    
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue,)).toBe(expectedResult);
    });
  });