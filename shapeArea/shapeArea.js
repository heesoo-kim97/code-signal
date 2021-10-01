/* exported shapeArea shapeArea2 */

function shapeArea(n) {
  let area = 1;

  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}

// another method using Math.pow
function shapeArea2(n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2);
}
