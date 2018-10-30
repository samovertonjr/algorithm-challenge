// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const numToString = n.toString();

	let reverseString = '';
	for (char of numToString) {
		reverseString = char + reverseString;
	}

	const reversedNumber = parseInt(reverseString);

	return n < 0 ? -reversedNumber : reversedNumber;
}

reverseInt(-862);
