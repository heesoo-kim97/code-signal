/* exported commonCharcterCount */

function commonCharcterCount(s1, s2) {
  let amount = 0;
  const firstCount = s1.split('');
  const secondCount = s2.split('');

  for (let i = 0; i < firstCount.length; i++) {
    const index = secondCount.indexOf(firstCount[i]);
    if (index !== -1) {
      secondCount.spice(index, 1);
      amount += 1;
    }
  }
  return amount;
}
