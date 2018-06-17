function checkPalindrome(inputString) {
  let reversed = '';

  for(letter of inputString) {
    reversed = letter + reversed;
  }

  if(inputString === reversed) {

    console.log(`This is a Palindrome: ${inputString} and ${reversed}`);
    return true;

  } else {
    console.log(`This is Not a Palindrome: ${inputString} and ${reversed}`);
    return false;
  }
}

checkPalindrome('aaeeaa');

