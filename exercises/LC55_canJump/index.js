function canJump(nums) {
  const dpArray = Array(nums.length).fill(false);
  dpArray[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dpArray[i] && i + nums[i] >= j) {
        dpArray[j] = true;
        break;
      }
    }
  }

  return dpArray[dpArray.length - 1];
}

module.exports = canJump;
