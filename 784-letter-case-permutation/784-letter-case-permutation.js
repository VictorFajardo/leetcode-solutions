/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const n = s.length
    const response = []
    
    const bt = function(pos, str = '') {
        //base case
        if (str.length === n) {
            response.push(str)
            return
        }
        const char = s[pos]
        //loop
        if (char >= 0 && char <= 9) bt(pos + 1, str + char)
        else {
            bt(pos + 1, str + char.toLowerCase())
            bt(pos + 1, str + char.toUpperCase())    
        }
        
        
    }
    
    bt(0)
    
    return response
    
};

//Backtracking