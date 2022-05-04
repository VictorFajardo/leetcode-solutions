/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

var cache = function(fn) {
    const cache = new Map()
    return function(...args) {
        const key = args.join(':')
        if (!cache.has(key)) {
            const value = fn(...args)
            cache.set(key, value)
        }
        return cache.get(key)
    }
}

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    knows = cache(knows)
    
    function isCelebrity(i, n) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue
            if (knows(i, j) || !knows(j, i)) return false
        }
        return true
    }
    
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let celebrityCandidate = 0
        
        for (let i = 0; i < n; i++) {
            if (knows(celebrityCandidate, i)) {
                celebrityCandidate = i
            }
        }
        
        if (isCelebrity(celebrityCandidate, n)) return celebrityCandidate
        return -1
        
    };
};