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
        // preventing overflow
        if (result > Math.floor(MAX/10) ||
            (result === Math.floor(MAX/10) && digit > MAX%10)) {
            return sign === 1 ? MAX : MIN
        }
        result = result * 10 + digit
        i++
    }    
    
    return sign * result
    
};

// String
// time complexity: O(n)
// space complexity: O(n)