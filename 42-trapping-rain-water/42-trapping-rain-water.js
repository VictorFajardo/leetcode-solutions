/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let maxLeft = height[left]
    let maxRight = height[right]
    let currHeight = 0
    let trappingWater = 0
    
    while (left < right) {
        maxLeft = Math.max(maxLeft, height[left])
        maxRight = Math.max(maxRight, height[right])
        if (maxLeft < maxRight) {
            currHeight = height[left]
            trappingWater += maxLeft - currHeight
            left++
        } else {
            currHeight = height[right]
            trappingWater += maxRight - currHeight
            right--
        }
    }
    
    return trappingWater
    
};