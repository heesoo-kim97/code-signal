/* exported shapeArea */

function shapeArea(n) {
  let newNumber = 0;
  for (let i = 1; i < n; i++) {
    newNumber += i + 4 * n;
  }
  return newNumber;
}
