/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let max = 0
    let cache = {}
    
    for (let i = 0; i < text1.length; i++) {
        max = Math.max(max, dp(text1, text2, i, 0, cache))
    }
    
    return max
    
};

var dp = function(text1, text2, index1, index2, cache) {
    let char = text1[index1] //a
    let valid = false
    
    for (let i = index2; i < text2.length; i++) {
        if (char === text2[i]) {
            valid = true
            index2 = i + 1
            break
        }
    }
    
    if (!valid) return 0
    
    let key = index1 + ':' + index2
    
    if (!(key in cache)) {
        let counter = 0

        for (let i = index1 + 1; i < text1.length; i++) {
            counter = Math.max(counter, dp(text1, text2, i, index2, cache))
        }
        
        cache[key] = counter + 1
    }
    return cache[key]
    
}