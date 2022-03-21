/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    
    let response = ''
    
    for (let i = 0; i < Math.min(m, n); i++) {
        response += word1[i] + word2[i]
    }
    
    if (m > n) response += word1.substring(n)
    else response += word2.substring(m)
    
    return response
    
};