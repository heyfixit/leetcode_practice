function isPalindrome(s) {
  let isPalindrome = true;
  s = s.replace(/[\W_]+/g, "");
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const rightSideChar = s[s.length - 1 - i];
    const leftSideChar = s[i];

    if (leftSideChar.toLowerCase() !== rightSideChar.toLowerCase()) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

module.exports = isPalindrome;
