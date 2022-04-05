/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const lexical = {}
    
    for (let i = 0; i < order.length; i++) {
        lexical[order[i]] = i
    }
    
    // console.log(lexical)

    for (let i = 1; i < words.length; i++) {
        let prev = words[i - 1]
        let curr = words[i]
        // console.log(prev, curr)
        for (let j = 0; j < Math.min(prev.length, curr.length); j++) {
            if (lexical[prev[j]] < lexical[curr[j]]) break
            else if (lexical[prev[j]] > lexical[curr[j]]) return false
        }
        if (prev.length > curr.length && prev.substr(0, curr.length) === curr) return false
    }
    
    return true
};

// Hashtable
// time complexity: O(n)
// space complexity: O(1)