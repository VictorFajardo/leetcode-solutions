// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // const isAlphaNum = (c) => /[a-z0-9]/i.test(c);
  const str = s.toLowerCase().replaceAll(/[\W_]/g, "");

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};
