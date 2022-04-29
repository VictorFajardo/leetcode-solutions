/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const n = s.length
    const MIN = -Math.pow(2, 31)
    const MAX = Math.pow(2, 31) - 1
    let sign = 1
    let i = 0
    let result = 0
    
    while (i < n && s[i] === ' ') {
        i++
    }
    
    if (i < n && s[i] === '-' || s[i] === '+') {
        sign = s[i] === '+' ? 1 : -1
        i++
    }
    
    let number = ''
    
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0'
        result = result * 10 + digit
        if (sign === 1) {
            if (result > MAX) return MAX
        } else {
            if (-result < MIN) return MIN
        }
        i++
    }    
    
    return sign * result
    
};

// String
// time complexity: O(n)
// space complexity: O(n)