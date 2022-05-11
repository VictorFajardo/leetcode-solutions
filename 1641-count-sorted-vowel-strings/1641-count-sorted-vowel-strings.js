/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n, v = 5, cache = new Map()) {
    
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
    
    let key1 = `${n}:${v-1}`
    let key2 = `${n-1}:${v}`
    
    if (!cache.has(key1)) cache.set(key1, countVowelStrings(n, v - 1, cache))
    if (!cache.has(key2)) cache.set(key2, countVowelStrings(n - 1, v, cache))
    
    return cache.get(key1) + cache.get(key2)
    
};