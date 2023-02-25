"use strict";
// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  // check for length of letters, if word longer than letters, is false
  if (word.length > letters.length) return false;
  // build freq counter of letters available
  const letterCount = getFreqCounter(letters);
  // iterate over word
  for (const letter of word) {
    // check if that letter is in the letters freq counter
    if (letterCount[letter] > 0) {
    // if so, decrement our freq for letters
      letterCount[letter]--;
    } else {
    // if not return false
    return false;
    }
  }
  //return true
  return true;
}

function getFreqCounter(items) {
  let freqs = {};
  for (let item of items) {
    let value = freqs[item] || 0;
    freqs[item] = value + 1;
  }
  return freqs;
}