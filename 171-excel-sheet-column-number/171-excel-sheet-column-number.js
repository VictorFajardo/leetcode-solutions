/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const BASE = 26
    const cLength = columnTitle.length
    let sum = 0
    for (let i = 0; i < cLength; i++) {
        let digit = columnTitle.charCodeAt(i) - 64
        sum += digit * Math.pow(BASE, cLength - i - 1)
    }
    return sum
};