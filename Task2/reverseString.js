const reverseString = (string) => {
  if (!string) {
    throw new Error('STring must not be empty');
  } else {
    const reversedStr = string.split('').reverse().join('');
    return reversedStr;
  }
  
}

reverseString('Hello');

module.exports = reverseString;