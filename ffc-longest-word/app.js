/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  const arrayStrings = str.split(' ');
  const wordLength = 0;

  for (let i = 0; i < arrayStrings.length; i++) {
    console.log(arrayStrings[i]);
  }

  return str.length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
