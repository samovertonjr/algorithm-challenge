// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Example 1
const reverseString = str =>
	str
		.split('')
		.reverse()
		.join('');

reverseString('apple');

// Example 2
const reverseString2 = str => {
	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
	}

	return reversed;
};

reverseString2('Samuel');

function reverseString3(str) {
	if (!str || typeof str != 'string' || str.length < 2) return str;

	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	return backwards.join('');
}

reverseString2('Milia');
