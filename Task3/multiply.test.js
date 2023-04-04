const Calculator = require('./Calculator');

describe('divide', () => {
  test('2 * 4 is 8', () => {
    const calc = new Calculator(2, 4);
    expect(calc.multiply(2, 4)).toBe(8);
  })

  test('Values are numbers', () => {
    const calc = new Calculator(7, 4);
    expect(7).not.toBeNaN();
    expect(4).not.toBeNaN();
  })

  test('multiply method is defined', () => {
    const calc = new Calculator(7, 4);
    expect(calc.multiply()).toBeDefined();
  });

});


