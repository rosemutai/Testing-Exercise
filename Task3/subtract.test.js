const Calculator = require('./Calculator');

describe('subtract ', () => {
  test('subtract positive numbers', () => {
    const calc = new Calculator(12, 4);
    expect(calc.subtract(12, 4)).toBe(8);
  })

  test('subtract negative numbers', () => {
    const calc = new Calculator(-2, -4);
    expect(calc.subtract(-2, -4)).toBe(2);
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


