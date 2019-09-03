function isAnagram(s, t) {
  // given strings s and t, find if t is an anagram of s
  const [sortedS, sortedT] = [s, t].map(v =>
    v
      .split('')
      .sort()
      .join('')
  );

  return sortedS === sortedT;
}

module.exports = isAnagram;
