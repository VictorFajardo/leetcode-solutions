/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let response = ''
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue
        let word = ''
        while (s[i] !== ' ' && i < s.length) {
            word += s[i]
            i++
        }
        response = word + (response.length > 0 ? ' ': '') + response
    }
    
    return response

};