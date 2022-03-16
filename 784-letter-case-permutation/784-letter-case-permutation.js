/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const n = s.length
    const response = []
    
    const permutate = function(pos, str = '') {
        //base case
        if (str.length === n) {
            response.push(str)
            return
        }
        const char = s[pos]
        //loop
        if (char >= 0 && char <= 9) permutate(pos + 1, str + char)
        else {
            permutate(pos + 1, str + char.toLowerCase())
            permutate(pos + 1, str + char.toUpperCase())    
        }
        
        
    }
    
    permutate(0)
    
    return response
    
};

//Backtracking