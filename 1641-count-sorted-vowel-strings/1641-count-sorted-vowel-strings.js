/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n, v = 5) {
    
    /*
    * Combination : k = (k + n - 1)!
    *               n   (k - 1)!n!
    *
    * k = 5 => (4 + n)! => n!(n + 1)(n + 2)(n + 3)(n + 4) => (n + 1)(n + 2)(n + 3)(n + 4)
    *          4!n!         4!n!                              24
    */
    
    //return (n + 1)*(n + 2)*(n + 3)*(n + 4)/24
    if (n === 1)
        return v
    if (v === 1)
        return 1
    return countVowelStrings(n, v - 1) + countVowelStrings(n - 1, v)
    
    
    
};