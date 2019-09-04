const climbStairs = n => {
  if (n < 4) {
    return n;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};

module.exports = climbStairs;
