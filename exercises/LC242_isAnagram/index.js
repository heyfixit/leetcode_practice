function isAnagramOld(s, t) {
  // given strings s and t, find if t is an anagram of s
  const [sortedS, sortedT] = [s, t].map(v =>
    v
      .split('')
      .sort()
      .join('')
  );

  return sortedS === sortedT;
}

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  sCharCounts = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    if (sCharCounts[sChar] !== undefined) {
      sCharCounts[sChar] += 1;
    } else {
      sCharCounts[sChar] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    if (sCharCounts[tChar] === undefined || sCharCounts[tChar] === 0) {
      return false;
    }
    sCharCounts[tChar] -= 1;
  }

  return true;
}

module.exports = isAnagram;
