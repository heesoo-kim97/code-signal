// eslint-disable-next-line no-unused-vars
function matrixElementsSum(matrix) {
  let notHaunted = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        notHaunted += matrix[i][j];
      } else if (matrix[i - 1][j] === 0) {
        matrix[i][j] = 0;
        notHaunted += matrix[i][j];
      } else {
        notHaunted += matrix[i][j];
      }
    }
  }
  return notHaunted;
}

// second way of solving this function

// eslint-disable-next-line no-unused-vars
function matrixElementsSum2(matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break;
      else r += matrix[i][j];
    }
  }
  return r;
}
