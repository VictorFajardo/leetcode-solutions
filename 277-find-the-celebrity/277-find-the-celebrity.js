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
    
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        const popularity = new Array(n).fill(0)
        const candidates = []
    
        for (let i = 0; i < n; i++) {
            let people = 0
            for (let j = 0; j < n; j++) {
                if (i === j) continue
                if (knows(i, j)) {
                    popularity[j] += 1
                    people += 1
                }
            }
            if (people === 0) candidates.push(i)
        }
        console.log(candidates, n)
        console.log(popularity)
        
        for (let i = 0; i < candidates.length; i++) {
            const candidate = candidates[i]
            if (popularity[candidate] === n - 1) return candidate
        }
        return -1
    };
};