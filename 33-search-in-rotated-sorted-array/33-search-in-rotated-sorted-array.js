/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length - 1
    let start = 0
    let end = n
    
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2)
        
        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else if (nums[mid] < nums[start]) {
            end = mid
        } else break
    }
    
    let rotatedIndex = start
    
    if (target >= nums[0] && target <= nums[rotatedIndex - 1]) return binarySearch(nums, 0, rotatedIndex - 1, target)
    else if (target >= nums[rotatedIndex] && target <= nums[n]) return binarySearch(nums, rotatedIndex, n, target)
    else return -1
    
};
    
    var binarySearch = function(arr, start, end, target) {

        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2)

            if (arr[mid] > target) {
                end = mid- 1
            } else if (arr[mid] < target) {
                start = mid + 1
            } else return mid
        }
        
        return -1    
    }