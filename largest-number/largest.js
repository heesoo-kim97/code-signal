/* exported largestNumber largestNumber2 largestNumber3 */

function largestNumber(n) {
  return Math.pow(10, n) - 1;
}

function largestNumber2(n) {
  var num = '';
  for (var i = 0; i < n; i++) {
    num += '9';
  }
  return Number(num);
}
