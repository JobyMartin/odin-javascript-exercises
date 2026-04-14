const palindromes = function (word) {
  let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '')
  let reversedWord = cleanWord.split('').reverse().join('')
  return cleanWord === reversedWord
};

// Do not edit below this line
module.exports = palindromes;
