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
    
    while (s[i] === ' ' && i < n) {
        i++
    }
    
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '+' ? 1 : -1
        i++
    }
    
    let number = ''
    
    while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 && i < n) {
        number += s[i]
        i++
    }
    console.log(number)
    let response = sign * Number(number)
    
    if (response < MIN) return MIN
    else if (response > MAX) return MAX
    return response
    
};