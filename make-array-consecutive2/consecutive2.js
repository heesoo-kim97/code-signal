/* exported makeArrayConsecutive2 */

function makeArrayConsecutive2(statues) {
  let statuesNeeded = 0;
  // Sort array smallest to largest
  statues.sort((a, b) => {
    return a - b;
  });
  // Iterate through array and find gaps in values
  for (let i = 0; i < statues.length; i++) {
    // If there is a gap between neighboring numbers subtract higher number from lower number i.e. [3, 6] is 6 - 3. There is a gap of 3, so 2 numbers are missing i.e. 4, 5
    if (statues[i + 1] - statues[i] > 1) {
      statuesNeeded += statues[i + 1] - statues[i] - 1;
    }
  }
  return statuesNeeded;
}
