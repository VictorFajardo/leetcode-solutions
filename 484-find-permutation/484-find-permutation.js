/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function(s) {
    const stack = []
    const res = []
    let n = 1
    
    for (let i = 0; i <= s.length; i++) {
        stack.push(n)
        const char = s.charAt(i)
        if (char === 'I' || i === s.length) {
            while(stack.length) {
                res.push(stack.pop())
            }
        }
        n += 1
    }
    
    return res
    
};

// Stacks
// time complexity: O(n)
// space complexity: O(n)