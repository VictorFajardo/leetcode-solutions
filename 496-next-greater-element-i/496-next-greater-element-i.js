/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(num => findNextGreater(num, nums2))    
};

var findNextGreater = function(num, arr) {
    let i = arr.indexOf(num) + 1
    for (; i < arr.length; i++) {
        if (arr[i] > num) return arr[i]
    }
    return -1
}