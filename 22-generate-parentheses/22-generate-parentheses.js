/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const response = []
    
    const bt = function(str = '', oP = 0, cP = 0) {
        //base case
        if (str.length === n * 2) {
            response.push(str)
        }
        
        //case 1
        if (oP < n) bt(str + "(", oP + 1, cP)
        
        //case 2
        if (cP < oP) bt(str + ")", oP, cP + 1)
    }
    
    bt()
    
    return response
    
};

// Backtracking
// time complexity: O(2^(2n)*n)
// space complexity: O(2^(2n)*n)