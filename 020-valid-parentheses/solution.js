// Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Map closing brackets to their corresponding opening brackets
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  // Stack to keep track of opening brackets
  const stack = [];

  // Iterate through each character in the string
  for (const char of s) {
    // If it's an opening bracket, push to stack
    if (!map.has(char)) {
      stack.push(char);
    } else {
      // If it's a closing bracket, check if it matches the last opening bracket
      if (map.get(char) !== stack.pop()) {
        // Mismatch found, not valid
        return false;
      }
    }
  }

  // If stack is empty, all brackets matched correctly
  return stack.length === 0;
};
