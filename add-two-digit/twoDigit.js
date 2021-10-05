/* exported addTwoDigits */

function addTwoDigits(n) {
  let num = 0;
  for (let i = 0; i < n.length; i++) {
    num += n[i];
  }
  return num;
}
