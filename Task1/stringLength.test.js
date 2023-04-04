const stringLength = require('./stringLength');

test('length of string Hello is 10', () => {
  const string = 'HelloHello';
  expect(stringLength(string)).toBe(10);

})