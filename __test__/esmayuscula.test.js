const isUpperCase = require('../utils/esmayuscula');

test('comprobar frase mayusculas', () => {

    expect(isUpperCase("THEKING")).toBe(true);

})

test('comprobar frase mayusculas', () => {

    expect(isUpperCase("hello")).toBe(false);

})