const stringLength = require('./stringLength');

test('length of string Hello is 5', () => {
  const string = 'Hello';
  expect(stringLength(string)).toBe(5);

})