/*
	Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

	For a = [2, 1, 3, 5, 3, 2], the output should be
	firstDuplicate(a) = 3.
*/

//check to see if set works better.
const a = [2, 1, 3, 5, 3, 2];

function firstDuplicate(a) {
	let map = new Map(); // O(1)

	for (let i = 0; i < a.length; i++) {
		if (map.has(a[i])) {
			return a[i];
		} else {
			map.set(a[i]);
		}
	} // O(n)

	return -1; // O(1)
}

firstDuplicate(a);
