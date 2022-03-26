/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let index1 = s.length - 1
    let index2 = t.length - 1
    
    while (index1 >= 0 || index2 >= 0) {
        
        if (s[index1] === '#') index1 = getValidCharIndex(s, index1)
        
        if (t[index2] === '#') index2 = getValidCharIndex(t, index2)
        
        if (s[index1] !== t[index2]) return false
        else {
            index1--
            index2--
        }
    }
    
    return true
};

var getValidCharIndex = function(arr, index) {
    let counter = 2
    
    while (counter > 0) {
        index--
        if (arr[index] === '#') counter += 2
        counter--
    }
    
    return index
}

// Two pointers
// time complexity: O(n + m)
// space complexity: O(1)