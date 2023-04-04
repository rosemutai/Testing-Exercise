const reverseString = require('./reverseString');

test('string yes returns sey', () => {
  const string = 'yes';
  expect(reverseString(string)).toBe('sey')
})