/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const length = columnTitle.length
    let columnNumber = 0
    
    for (let i = 0; i < length; i++) {
        let code = columnTitle.charCodeAt(i) - 64
        columnNumber += code * Math.pow(26, length - i - 1) 
    }
    
    return columnNumber
};