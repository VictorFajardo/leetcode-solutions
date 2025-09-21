// Valid Anagram
// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Map();

  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!freq.has(char)) return false;
    freq.set(char, freq.get(char) - 1);
    if (freq.get(char) === 0) freq.delete(char);
  }

  return freq.size === 0;
};

// Time: O(n)
// Space: O(1) ~ 26 characters
