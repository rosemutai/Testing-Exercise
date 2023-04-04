const stringLength = require('./stringLength');

test('length of string must be atleast 1 and no longer thatn 10', () => {
  const string = 'HelloNebuchadnezzar';
  expect(() => stringLength(string)).toThrow();
})