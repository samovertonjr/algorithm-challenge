/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  const arrayStrings = str.split(' ');
  let wordLength = 0;

  for (let i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i].length > wordLength) {
      wordLength = arrayStrings[i].length;
    }
  }

  return wordLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
