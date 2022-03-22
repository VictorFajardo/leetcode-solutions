/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let response = ''
    
    for (let char of s) {
        let charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            response += String.fromCharCode(charCode + 32)
        } else {
            response += char
        }
    }
    
    return response
    
};