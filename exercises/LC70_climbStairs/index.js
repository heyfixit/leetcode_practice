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

  const answers = [0, 1, 2, 3];

  for (let i = 4; i <= n; i++) {
    answers.push(answers[i - 1] + answers[i - 2]);
  }

  return answers[answers.length - 1];
};

module.exports = climbStairs;
