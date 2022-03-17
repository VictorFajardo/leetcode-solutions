/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0]
    
    for (let char of s) {
        if (char === '(') stack.push(0)
        else {
            let n = stack.pop()
            stack[stack.length - 1] += n === 0 ? 1 : n * 2
        }
    }
    
    return stack[0]
};