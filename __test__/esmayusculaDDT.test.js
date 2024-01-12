const isUpperCase = require('../utils/esmayuscula');


//Data Driven Testing
describe('mayusculas', () => {
    test.each`
      firstValue             |  expectedResult    
      ${"H"}                 |  ${true}
      ${"h"}                 |  ${false}
      ${"HELLO"}             |  ${true}
      ${"hello"}             |  ${false}
      ${"Esto Es MayusCula"} |  ${false}
    
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue,)).toBe(expectedResult);
    });
  });