/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    let n = s.length
    let start = 0
    let end = 0
    
    //go through the array reversing word by word
    while (start < n) {
        while (end < n && s[end] !== " ") {
            end += 1    
        }
        
        reverseSubArray(s, start, end - 1)
        end += 1
        start = end
    }
    
    //reverse the whole array
    reverseSubArray(s, 0, n - 1)
    
    return s
};

var reverseSubArray = function(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

// Array
// time complexity: O(n)
// space complexity: O(1)