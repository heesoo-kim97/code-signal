/* exported shapeArea */

function shapeArea(n) {
  let newNumber = 0;
  for (let i = 0; i < n; i++) {
    let updatedNumber = 1;
    if (i === 0) {
      newNumber = updatedNumber;
    } else {
      newNumber = (n - 1) * 4 + updatedNumber;
      updatedNumber = newNumber;
    }
  }
  return newNumber;
}
