/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = []
    
    while (pushed.length) {
        let left = pushed.shift()
        stack.push(left)
        
        while (stack.length && popped.length && stack[stack.length - 1] === popped[0]) {
            stack.pop()
            popped.shift()
        }
    }
    
    return !stack.lenght && !popped.length
    
};

// Stacks
// time complexity: O(n)
// space complexity: O(n)