const reverseString = require('./reverseString');

test('string is empty', () => {
  expect(() => reverseString('')).toThrow(Error);
})