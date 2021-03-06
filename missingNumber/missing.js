const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const findMissingNum = arr => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }

  return false;
};
// eslint-disable-next-line no-console
console.log(findMissingNum(arr));

// Find the missing number in given array
// Since the array is sorted, we can solve this in one pass by looking ahead using arr[i] + 1 and comparing that to arr[i + 1].
// If arr[i + 1] is not equal to arr[i] + 1, it means that arr[i] + 1 is the missing number.
// console log the result.
