/* exported makeArrayConsecutive2 */

function makeArrayConsecutive2(statues) {
  let smallestInt = 0;
  let largestInt = 0;
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] < statues[i + 1]) {
      smallestInt = statues[i];
    } else {
      largestInt = statues[i];
    }
  }
  return (largestInt - smallestInt) - (statues.length - 1);
}
