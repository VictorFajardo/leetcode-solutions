/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const factor = 96
    let response = ''
    
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            //j to z
            response += String.fromCharCode(Number(s[i] + s[i + 1]) + factor)
            i += 2
        } else {
            //a to i
            response += String.fromCharCode(Number(s[i]) + factor)
        }
    }
    
    return response
    
};

// String
// time complexity: O(n)
// space complexity: O(1)