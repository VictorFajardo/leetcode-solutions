/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let maxLeft = 0
    let maxRight = 0
    let trappingWater = 0
    
    while (left < right) {
        if (height[left] < height[right]) {
            maxLeft = Math.max(maxLeft, height[left])
            trappingWater += maxLeft - height[left]
            left++
        } else {
            maxRight = Math.max(maxRight, height[right])
            trappingWater += maxRight - height[right]
            right--
        }
    }
    
    return trappingWater
    
};