// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'x'];

//Solution 1
function containsCommonItem(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {

		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				return true;
			}
		}
	}
	return false;
} // O(a * b)


// Solution 2
function containsCommonItem2(arr1, arr2) {
	// first loop through first array and create object where properties === items in the array

	const map = {};

	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}

	//loop through second array and check if item in second array exist on created object
	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			return true;
		}
	}
	return false;

}//O(a + b) Time Complexity

//Solution 3

function containsCommonItem3(arr1, arr2) {
	return arr1.some(item => arr2.includes(item));
}


containsCommonItem(arr1, arr2);
containsCommonItem2(arr1, arr2);
containsCommonItem3(arr1, arr2);