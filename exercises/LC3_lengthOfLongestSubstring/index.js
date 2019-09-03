// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// iterate through input string
// use a shifting window
// use a hashMap to record the lastSeenIndex
// if the character at windowEnd has been seen, move
// window start to one character higher than the last index
// we saw that character at

function lengthOfLongestSubstring(s) {
  const lastSeen = {};
  let windowStart = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (lastSeen[s.charAt(i)] !== undefined) {
      windowStart = lastSeen[s.charAt(i)] + 1;
    }
    lastSeen[s.charAt(i)] = i;
    thisMax = i - windowStart + 1;
    if (thisMax > max) {
      max = thisMax;
    }
  }

  return max;
}

module.exports = lengthOfLongestSubstring;
