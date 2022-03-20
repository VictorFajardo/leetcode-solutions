/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    return [findBoundElement(nums, target, true), findBoundElement(nums, target, false)]
};

var findBoundElement = function(nums, target, isFirst) {
    let start = 0
    let end = nums.length - 1
    let bound = -1
    
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
        let num = nums[mid]
        if (num === target) {
            if (isFirst) end =  mid - 1
            else start = mid + 1
            bound = mid
        } else if (num > target) end = mid - 1
        else start = mid + 1
    }
    
    return bound
}

// var findFirstElement = function(nums, target) {
//     let start = 0
//     let end = nums.length - 1
//     let bound = -1
    
//     while (start <= end) {
//         let mid = Math.floor((end + start) / 2)
//         let num = nums[mid]
//         if (num === target) {
//             end = mid - 1
//             bound = mid
//         } else if (num > target) end = mid - 1
//         else start = mid + 1
//     }
    
//     return bound
// }

// var findLastElement = function(nums, target) {
//     let start = 0
//     let end = nums.length - 1
//     let bound = -1
    
//     while (start < end) {
//         let mid = Math.floor((end + start) / 2)
//         let num = nums[mid]
//         if (num === target) {
//             start = mid + 1
//             bound = mid
//         } else if (num > target) end = mid - 1
//         else start = mid + 1
//     }
    
//     return bound
// }