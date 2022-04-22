/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keyboard = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    const queue = new Queue()
    const n = digits.length
    queue.enqueue('')
    
    while(queue.front().length < n) {
        let current = queue.dequeue()
        let index = current.length
        let digit = digits[index]
        let chars = keyboard[digit]
        
        for (let char of chars) {
            queue.enqueue(current + char)
        }
    }
    
    if (queue.size() === 1) return []
    return queue.toArray()
    
};