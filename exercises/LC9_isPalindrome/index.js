// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false

function isPalindrome(x) {
  const digits = [];
  let isPalindrome = false;
  while (x > 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    digits.push(digit);
    if (digits[0] === digit) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }

  return isPalindrome;
}

module.exports = isPalindrome;
