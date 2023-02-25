"use strict";

/** Function takes two strings:  word and letters, checks to see
 * if the word can be made out of letters given. Returns boolean.
*/

function canConstructWord(word, letters) {
  if (word.length > letters.length) return false;

  const letterCount = getFreqCounter(letters);

  for (const letter of word) {
    if (letterCount[letter] > 0) {
      letterCount[letter]--;
    } else {
    return false;
    }
  }

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