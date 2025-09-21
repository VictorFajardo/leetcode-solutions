// Ransom Note
// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;

  const rFreqMap = new Array(26).fill(0);
  const mFreqMap = new Array(26).fill(0);

  for (let i = 0; i < ransomNote.length; i++) {
    ++rFreqMap[ransomNote.charCodeAt(i) - 97];
  }

  for (let i = 0; i < magazine.length; i++) {
    ++mFreqMap[magazine.charCodeAt(i) - 97];
  }

  for (let i = 0; i < 26; i++) {
    if (rFreqMap[i] > mFreqMap[i]) {
      return false;
    }
  }

  return true;
};
