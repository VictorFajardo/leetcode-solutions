/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let windowStart = 0
    let maxLength = 0
    const charIndexMap = {}
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd]
        if(charIndexMap[rightChar] !== undefined) {
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
        }
        
        charIndexMap[rightChar] = windowEnd
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }
    
    return maxLength
};

// Sliding Window
// time complexity: O(n)
// space complexity: O(k)