const palindromo = require('../utils/palindromo');

test('comprobar palindromo', () => {

    expect(palindromo("roma")).toBe("amor");

})

test('comprobar palindromo', () => {

    expect(palindromo("ana")).toBe("ana");

})