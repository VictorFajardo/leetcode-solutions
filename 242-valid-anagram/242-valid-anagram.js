/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const dictionary = new Array(26).fill(0)
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i) - 97
        dictionary[char]++
    }
    
    for (let i = 0; i < t.length; i++) {
        let char = t.charCodeAt(i) - 97
        dictionary[char]--
        if (dictionary[char] < 0) return false
    }
    
    return true
    
};

// Array
// time complexity: O(n || m)
// space complexity: O(n || m)