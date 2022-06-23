/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p1 = 0
    let p2 = 0
    
    for (; p1 < s.length; p1++, p2++) {
        console.log(p1)
        while(s[p1] !== t[p2]) {
            if (p2 === t.length) return false
            p2++
        }
    }
    return true
    
};

// Two Pointers
// time complexity: O(n)
// space complexity: O(1)