/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const dictionary = {}
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (!(char in dictionary)) dictionary[char] = 0
        dictionary[char]++
    }
    
    for (let i = 0; i < t.length; i++) {
        let char = t.charAt(i)
        if (!(char in dictionary)) return false
        dictionary[char]--
        if (dictionary[char] === 0) delete dictionary[char]
    }
    
    return true
    
};