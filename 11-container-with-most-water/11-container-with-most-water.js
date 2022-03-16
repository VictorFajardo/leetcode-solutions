/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let leftPointer = 0
    let rightPointer = height.length - 1
    
    while (leftPointer < rightPointer) {
        // calculating the area
        const HEIGHT = Math.min(height[leftPointer],height[rightPointer])
        const WIDTH = rightPointer - leftPointer
        const AREA = HEIGHT * WIDTH
        // updating maxArea
        maxArea = Math.max(maxArea, AREA)
        // moving pointers
        if (height[leftPointer] < height[rightPointer]) leftPointer++
        else rightPointer--
    }
    
    return maxArea
};

// time complexity: O(n)
// space complexity: O(1)
