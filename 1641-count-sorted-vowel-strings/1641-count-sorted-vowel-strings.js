/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    /*
    * Combination : k = (k + n - 1)!
    *               n   (k - 1)!n!
    *
    * k = 5 => (4 + n)! => n!(n + 1)(n + 2)(n + 3)(n + 4) => (n + 1)(n + 2)(n + 3)(n + 4)
    *          4!n!         4!n!                              24
    */
    
    return (n + 1)*(n + 2)*(n + 3)*(n + 4)/24
    
    
    
};