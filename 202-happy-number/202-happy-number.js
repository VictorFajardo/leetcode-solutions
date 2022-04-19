/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n
    let fast = n
    
    do {
        slow = getHappy(slow)
        fast = getHappy(getHappy(fast))
        if (slow === 1 || fast === 1) return true
    } while (slow !== fast)
        
    return false
    
};

var getHappy = function(n) {
    const digits = []
    let sum = 0
    
    while (n > 0) {
        let digit = n % 10
        digits.push(digit)
        n = Math.floor(n / 10)
    }
    
    digits.forEach((digit) => {
        sum += digit**2
    })
    
    return sum
}