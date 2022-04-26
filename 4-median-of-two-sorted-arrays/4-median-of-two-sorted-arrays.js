/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = []
    let p1 = 0
    let p2 = 0
    
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            merged.push(nums1[p1])
            p1++
        } else {
            merged.push(nums2[p2])
            p2++
        }
    }
    
    while (p1 < nums1.length) {
        merged.push(nums1[p1])
        p1++
    }
    
    while (p2 < nums2.length) {
        merged.push(nums2[p2])
        p2++
    }
    
    const n = merged.length
    const mid = Math.floor(n / 2)
    
    return (n % 2 === 0) ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid]
    
};

// Divide and Conquer
// time complexity: O(n + m)
// space complexity: O(n + m)