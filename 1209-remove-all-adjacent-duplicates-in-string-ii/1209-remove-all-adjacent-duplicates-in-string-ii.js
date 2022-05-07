/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = []
    let response = ''
    let i = 0
    
    while (i < s.length) {
        let char = s.charAt(i)
        
        if (stack.length && stack[stack.length - 1][0] === char) {
            let top = stack[stack.length - 1]
            if (top[1] === k - 1) {
                stack.pop()
            } else {
                top[1] += 1
            }
        } else {
            stack.push([char, 1])
        }
        i += 1
    }
    stack.forEach(([char, rep]) => {
        while (rep > 0) {
            response += char
            rep -= 1
        }
    })
    
    return response
    
};