/* exported addTwoDigits addTwoDigits2 */

function addTwoDigits(n) {
  const arr = (n).toString(10).split('').map(Number);

  return arr[0] + arr[1];
}

function addTwoDigits2(n) {
  return n % 10 + Math.floor(n / 10);
}
