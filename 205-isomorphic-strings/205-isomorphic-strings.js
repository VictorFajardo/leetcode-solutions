/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {}
    const set = new Set()
    
    for (let i = 0; i < s.length; i++) {
        let first = s[i]
        let second = t[i]
        if (!(first in map)) {
            if (set.has(second)) return false
            map[first] = second
            set.add(second)
        } else if (map[first] !== second) {
            return false
        }
    }
    
    return true
    
};