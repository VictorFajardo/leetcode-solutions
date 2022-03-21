/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    let i = 0
    let j = 0
    
    let response = ''
    
    while (i < m || j < n) {
        if (i < m) {
            response += word1[i]
            i++
        }
        if (j < n) {
            response += word2[j]
            j++
        }
    }
    
    return response
    
};

// String
// time complexity: O(max(m,n))
// space complexity: O(1)