const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('String must be at least1 character long and not longer than 10');
  }
  
};

stringLength('Hey');

module.exports = stringLength;