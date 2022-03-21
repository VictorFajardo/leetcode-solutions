/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const dict = {}
    
    for (let char of s) {
        if (!(char in dict)) dict[char] = 0
        dict[char]++
    }
    
    for (let char of t) {
        if (!(char in dict) || dict[char] === 0) return char
        dict[char]--
    }
    
};

// Hash Table
// time complexity: O(n)
// space complexity: O(1)