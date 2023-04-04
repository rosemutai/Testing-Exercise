const Calculator = require('./Calculator');

describe('subtract', () => {
  test('12 minus 4 is 8', () => {
    const calc = new Calculator(12, 4);
    expect(calc.subtract(12, 4)).toBe(8);
  })

  test('Values are numbers', () => {
    const calc = new Calculator(12, 4);
    expect(12).not.toBeNaN();
    expect(4).not.toBeNaN();
  })

  test('subtract method is defined', () => {
    const calc = new Calculator(12, 4);
    expect(calc.subtract()).toBeDefined();
  });
  
});


