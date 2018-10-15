/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

*/

function largestOfFour(arr) {
  let largestNumArr = [];

  for(let i = 0; i < arr.length; i++) {  
    let subArr = arr[i];
    let largeNum = arr[i][0];

    for(let j = 0; j < subArr.length; j++) {
      if(arr[i][j] > largeNum) {
       largeNum = subArr[j];
      }
    }
    largestNumArr.push(largeNum);
  }
  return largestNumArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//OR

function largestOfFive(arr) {
  let largestNumArr = [];

  for(let i = 0; i < arr.length; i++) {
    let subArr =  arr[i];

    let max = Math.max(...subArr);
    
    largestNumArr.push(max)
  }
  
  return largestNumArr;
}

largestOfFive([[4, 5, 1, 3, 6], [13, 27, 18, 26, 21], [32, 35, 37, 39, 28], [1000, 1001, 857, 1, 45]]);


//OR

function largestOfSix(arr) {
  let largestNumArr = [];

  for(let i = 0; i < arr.length; i++) {
    let subArr =  arr[i];

    let max = subArr.reduce((a, b) => Math.max(a, b))
    
    largestNumArr.push(max)
  }
  
  return largestNumArr;
}

largestOfSix([[4, 5, 1, 3, 6, 3], [13, 27, 18, 26, 21, 7], [32, 35, 37, 39, 28, 11], [1000, 1001, 857, 1, 45, 23]]);