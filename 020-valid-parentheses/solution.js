// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const stack = [];

  for (const char of s) {
    if (!map.has(char)) {
      stack.push(char);
    } else if (map.get(char) !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
