/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const factor = 96
    let response = ''
    
    for (let i = 0; i < s.length; i++) {
        if (i + 2 < s.length && s[i + 2] === '#') {
            //j to z
            // console.log(s[i] * 10 + s[i + 1] * 1 + factor)
            response += String.fromCharCode(Number(s[i] + s[i + 1]) + factor)
            i += 2
        } else {
            //a to i
            response += String.fromCharCode(Number(s[i]) + factor)
        }
    }
    
    return response
    
};