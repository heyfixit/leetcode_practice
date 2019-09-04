const climbStairs_recursive = n => {
  if (n < 4) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

const climbStairs = n => {
  if (n < 4) {
    return n;
  }

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
};

module.exports = climbStairs;
