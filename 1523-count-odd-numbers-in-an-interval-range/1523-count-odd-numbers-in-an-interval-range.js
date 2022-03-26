/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let diff = Math.round((high - low + (low % 2 !== 0 ? 1 : 0)) / 2)
    
    return diff
};