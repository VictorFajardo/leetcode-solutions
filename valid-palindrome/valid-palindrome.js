/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    for (let [left, right] = [0, s.length - 1]; left < right; left++, right--) {
        if (s[left] !== s[right]) return false
    }
    return true
};

// Two Pointers
// time complexity : O(n)
// space complexity: O(1)