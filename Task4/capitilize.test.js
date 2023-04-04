const capitalize = require('./capitalize');

test('check a string is capitalized', () => {
  const string = 'javascript';
  expect(capitalize(string)).toBe('Javascript');
})