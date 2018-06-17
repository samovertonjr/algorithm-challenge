const inputArray = [3, 6, -2, -5, 7, 3];

function adjacentElementsProduct(inputArray) {

  var product = inputArray[0] * inputArray[1];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] >= product) {
      product = inputArray[i] * inputArray[i + 1];
    }
  }
  console.log(product);
  //return product;
}

adjacentElementsProducts(inputArray);