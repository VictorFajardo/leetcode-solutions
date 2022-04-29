/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramsMap = {}
    const response = []
    
    strs.forEach((word) => {
        const charMap = new Array(26).fill(0)
        for (let char of word) {
            let index = char.charCodeAt(0) - 97
            charMap[index]++
        }
        const key = charMap.join(':')
        if (!(key in anagramsMap)) anagramsMap[key] = []
        anagramsMap[key].push(word)
    })
    
    for (let words of Object.values(anagramsMap)) {
        response.push(words)
    }
    
    return response
};

// Array
// time complexity: O(nk)
// space complexity: O(nk)