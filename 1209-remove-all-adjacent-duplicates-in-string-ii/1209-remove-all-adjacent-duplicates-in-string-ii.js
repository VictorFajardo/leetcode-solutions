/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = []
    let response = ''
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        stack.push(char)
        let sLength = stack.length
        if (sLength >= k) {
            if (verifyKLastElements(stack, char, k)) removeKLastElements(stack, k)
        }        
    }
    
    stack.forEach((char) => {
        response += char
    })
    
    return response
    
};

var verifyKLastElements = function(arr, char, k) {
    let lastIndex = arr.length - 1
    while (k > 0) {
        if (arr[lastIndex] !== char) return false
        lastIndex -= 1
        k -= 1
    }
    return true
}

var removeKLastElements = function(arr, k) {
    let lastIndex = arr.length - 1
    while (k > 0) {
        arr.pop()
        lastIndex -= 1
        k -= 1
    }
}