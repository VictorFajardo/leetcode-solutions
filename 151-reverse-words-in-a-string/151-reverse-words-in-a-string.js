/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ').reverse()
    let response = ''
    
    console.log(words)
    
    words.forEach((word) => {
        if (word !== '') response += (response.length > 0 ? ' ': '') + word
    })
    
    return response
};