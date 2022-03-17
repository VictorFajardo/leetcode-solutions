/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true
    const n = s1.length
    const diff = []
    
    for (let i = 0; i < n; i++) {
        if (s1[i] === s2[i]) continue
        else diff.push(i)
        
        if (diff.length > 2) return false
    }
    
    return (s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]])
};