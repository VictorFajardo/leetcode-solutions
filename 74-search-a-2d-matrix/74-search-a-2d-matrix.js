/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    return search(matrix, target) 
};

var search = function(arr, target) {
    const rows = arr.length
    const cols = arr[0].length
    let start = 0
    let end = rows * cols - 1
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        let num = arr[Math.floor(mid / cols)][mid % cols]
        if (num === target) return true
        else if (num > target) end = mid - 1
        else start = mid + 1
    }
    
    return false
};