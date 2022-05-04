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

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    function isCandidate(i, n) {
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
        let candidate = 0
        
        for (let i = 0; i < n; i++) {
            if (knows(candidate, i)) {
                candidate = i
            }
        }
        
        if (isCandidate(candidate, n)) return candidate
        return -1
        
    };
};