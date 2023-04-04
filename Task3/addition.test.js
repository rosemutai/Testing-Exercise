const Calculator = require('./Calculator');


describe('calculator', () => {

  test('addition of 3 and 5 = 8', () => {
    const calc = new Calculator(3, 5);
    expect(calc.add()).toBe(8);
  });

  test('a value is a number', () => {
    const calc = new Calculator(3, 5);
    expect(3).not.toBeNaN();
    expect(5).not.toBeNaN();
  })

})

