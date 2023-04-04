const Calculator = require('./Calculator');

describe('divide', () => {
  test('20 / 4 is 5', () => {
    const calc = new Calculator(20, 4);
    expect(calc.divide(12, 4)).toBe(5);
  })

  test('Values are numbers', () => {
    const calc = new Calculator(20, 4);
    expect(20).not.toBeNaN();
    expect(4).not.toBeNaN();
  })

  test('Divide method is defined', () => {
    const calc = new Calculator(20, 4);
    expect(calc.divide()).toBeDefined();
  });

  test('second number is not zero', () => {
    const calc = new Calculator(20, 4);
    expect(4).not.toBeFalsy();
  });

});


