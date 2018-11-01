// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let charMap = {};
	let maxChars = { char: null, repeat: 0 };

	for (let char of str) {
		const repeat = charMap[char] + 1 || 1;

		charMap[char] = repeat;

		if (maxChars.repeat < repeat) {
			maxChars = { char, repeat };
		}
	}
	return maxChars.char;
}

maxChar('milia');
