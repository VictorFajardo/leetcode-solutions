/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const indexes = {}
    const response = []
    
    for (let i = 0; i < nums2.length; i++) {
        let currentValue = nums2[i]
        indexes[currentValue] = i
    }
    
    for (let i = 0; i < nums1.length; i++) {
        let currentValue = nums1[i]
        let j = indexes[currentValue]
        let nextGreater = findNextGreater(nums2, currentValue, j)
        response.push(nextGreater)
    }
    
    return response    
    
};

var findNextGreater = function(arr, target, index) {
    for (let i = index + 1; i < arr.length; i++) {
        let currentValue = arr[i]
        if (currentValue > target) return currentValue
    }
    return -1
}