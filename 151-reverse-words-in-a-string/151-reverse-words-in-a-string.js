/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let response = ''
    let start = 0
    
    for (let end = 0; end < s.length; end++) {
        if (s[end] === ' ') continue
        start = end
        while (s[end + 1] !== ' ' && end < s.length) {
            end++
        }
        response = s.substring(start, end + 1) + (response.length > 0 ? ' ': '') + response
    }
    
    return response
    
    
    
//     const words = s.split(' ').reverse()
//     let response = ''
    
//     console.log(words)
    
//     words.forEach((word) => {
//         if (word !== '') response += (response.length > 0 ? ' ': '') + word
//     })
    
//     return response
};