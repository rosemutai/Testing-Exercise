const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

capitalize('hello');

module.exports = capitalize;