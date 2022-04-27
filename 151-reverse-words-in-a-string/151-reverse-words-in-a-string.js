/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let response = ''
    let i = 0
    
    while (i < s.length) {
        // space
        while (s[i] === ' ') {
            i++
        }
        if (i === s.length) break
        // letter
        let word = ''
        while (s[i] !== ' ' && i < s.length) {
            word += s[i]
            i++
        }
        response = word + (response.length > 0 ? ' ': '') + response
    }
    
    return response

};

// Array
// time complexity: O(n)
// space complexity: O(1)