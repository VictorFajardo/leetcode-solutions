/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0
    let p1 = 0
    let p2 = height.length - 1
    let maxLeft = height[p1]
    let maxRight = height[p2]
    let diff = 0
    
    while (p1 < p2) {
        let minTop = Math.min(maxLeft, maxRight)
        if (height[p1] < height[p2]) {
            diff = minTop - height[p1]
            p1++
            maxLeft = Math.max(maxLeft, height[p1])
        } else {
            diff = minTop - height[p2]
            p2--
            maxRight = Math.max(maxRight, height[p2])
        }
        if (diff > 0) water += diff
    }
    
    return water
};

// 2 Pointers
// time complexity O(n)
// space complexity O(1)