/* exported centuryFromYear centuryFromYear2 */
function centuryFromYear(year) {
  let count = 0;
  if (year % 100 === 0) {
    count = year / 100;
  } else {
    count = ((year / 100) - (year % 100) / 100) + 1;
  }
  return count;
}

function centuryFromYear2(year) {
  return Math.ceil(year / 100);
}

// Figuring out the century that particular year is in
