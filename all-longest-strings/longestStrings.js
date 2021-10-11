/* exported allLongestStrings */

const test = ['aba',
  'aa',
  'ad',
  'vcd',
  'aba'];

function allLongestStrings(inputArray) {
  let longest = [inputArray[0]];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length === longest[0].length) {
      longest.push(inputArray[i]);
    } else if (inputArray[i].length > longest[0].length) {
      longest = [inputArray[i]];
    }
  }
  return longest;
}

// eslint-disable-next-line no-console
console.log('final result: ', allLongestStrings(test));
