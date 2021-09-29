/* exported checkPalindrome */

function checkPalindrome(inputString) {
  let newString = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      newString += inputString[i];
    }
  }

  var count = newString.length - 1;
  for (let j = 0; j < newString.length; j++) {
    if (j >= count) {
      return true;
    }
    if (newString[j] !== newString[count]) {
      return false;
    }
    count--;
  }
}
