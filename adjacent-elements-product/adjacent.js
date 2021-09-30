/* exported adjacentElementsProduct adjacentElementsProduct2 */

function adjacentElementsProduct(inputArray) {
  let highestProduct = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (i === 0) {
      highestProduct = inputArray[i] * inputArray[i + 1];
    }
    if (highestProduct <= currentProduct) {
      highestProduct = currentProduct;
    }
  }
  return highestProduct;
}

function adjacentElementsProduct2(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}
