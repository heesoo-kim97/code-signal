/* exported commonCharcterCount commonCharcterCount2 */

function commonCharcterCount(s1, s2) {
  let amount = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      arr2.spice(index, 1);
      amount += 1;
    }
  }
  return amount;
}

function commonCharcterCount2(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1) {
      count++;
      s2 = s2.replace(s1[i], '');
    }
  }
  return count;
}
