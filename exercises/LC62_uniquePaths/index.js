// Dynamic Programming:
// Solve a simpler version of the problem and then see
// if we can apply what we learn to a more complex representation

// if we're in the first square, we have only one
// unique path right and down

// 1 1
// 1

// with this we can see that the path diagonally down from the start
// has 2 unique paths: right, down and down, right
// 1 1
// 1 2

// now we can see that to reach any box, we sum the unique paths to
// the box above and the box to the left

//   1   1   1   1    1
//   1   2   3   4    5
//   1   3   6   10   15

function uniquePaths(m, n) {
  const dpMatrix = [];

  // initialize the matrix
  for (let row = 0; row < n; row++) {
    dpMatrix.push([]);
  }

  // first row
  for (let row = 0; row < n; row++) {
    dpMatrix[row][0] = 1;
  }

  // first column
  for (let col = 0; col < m; col++) {
    dpMatrix[0][col] = 1;
  }

  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      dpMatrix[row][col] = dpMatrix[row - 1][col] + dpMatrix[row][col - 1];
    }
  }

  return dpMatrix[n - 1][m - 1];
}

module.exports = uniquePaths;
