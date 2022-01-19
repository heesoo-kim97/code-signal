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

function largestNumber3(n) {
  var i = 0;
  var large = ' ';

  while (i < n) {
    large += 9;
    i++;
  }
  return parseInt(large);
}

// finding the largest number in given input in three different wayss
