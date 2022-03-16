/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    // Linked List solution
    if (!digits) return []
    const keyboard = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    const list = [''] //replace for a Linked List
    
    while(list[0].length !== digits.length) {
          const base = list.shift()
          const chars = keyboard[digits[base.length]]
          for (let i = 0; i < chars.length; i++) {
              list.push(base + chars[i])
          }
    }
    
    return list
    
    
    // Recursive solution
    /*if (!digits) return []
    const keyboard = ['', '', 'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    const res = []
    
    const conbinations = (digits, index = 0, str = '') => {
        if (digits.length === index) res.push(str)
        else {
            const number = digits[index]
            const keys = keyboard[number]
            for (let i = 0; i < keys.length; i++) {
                conbinations(digits, index + 1, str + keys[i])
            }    
        }
    }
    
    conbinations(digits)
    
    return res*/
    
};