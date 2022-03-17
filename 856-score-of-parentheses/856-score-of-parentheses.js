/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0]
    
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        if (current === '(') stack.push(0)
        else if (current === ')') {
            if (stack[stack.length - 1] === 0) {
                stack.pop()
                stack[stack.length - 1]++
            } else {
                let n = stack.pop()
                stack[stack.length - 1] += n * 2
            }
        }
    }
    
    return stack[0]
};