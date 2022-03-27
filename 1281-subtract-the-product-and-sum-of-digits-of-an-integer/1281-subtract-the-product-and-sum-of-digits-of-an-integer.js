/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let prod = 1
    
    while(n > 0) {
        let number = n % 10
        n = Math.floor(n / 10)
        sum += number
        prod *= number
    }
    
    return prod - sum
    
};