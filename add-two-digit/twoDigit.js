/* exported addTwoDigits */

function addTwoDigits(n) {
  const arr = (n).toString(10).split('').map(Number);

  return arr[0] + arr[1];
}
