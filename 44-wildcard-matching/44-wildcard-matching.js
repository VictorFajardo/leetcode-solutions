/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    let top = 0
    let bottom = 0
    let tempTop = -1
    let star = -1
    
    while (top < s.length) {
        let topChar = s[top]
        let bottomChar = p[bottom]
        if (bottom < p.length && (bottomChar === topChar || bottomChar === '?')) {
            top += 1
            bottom += 1
        } else if (bottom < p.length && bottomChar === '*') {
            tempTop = top
            star = bottom
            bottom += 1
        } else if (star === -1) {
            return false
        } else {
            top = tempTop + 1
            tempTop = top
            bottom = star + 1
        }
    }
    
    while (bottom < p.length) {
        let bottomChar = p[bottom]
        if (bottomChar !== '*') return false
        bottom += 1
    }
    return true
};