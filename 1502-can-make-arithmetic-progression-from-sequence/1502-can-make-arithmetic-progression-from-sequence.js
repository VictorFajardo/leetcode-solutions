/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b)
    let diff = arr[1] - arr[0]
    
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) return false
    }
    
    return true
    
};

// Array
// time complexity: O(n*log(n))
// space complexity: O(1)