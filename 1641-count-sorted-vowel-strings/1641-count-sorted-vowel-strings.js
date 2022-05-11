/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const base = [0,0,0,0,1]
    
    for (let i = 0; i < n; i++) {
        for (let j = 3; j >= 0; j--) {
            base[j] += base[j + 1]
        }
    }
    
    console.log(base)
    let sum = 0
    
    for (let i = 0; i < base.length; i++) sum += base[i]
    
    return sum
    
    
    
};