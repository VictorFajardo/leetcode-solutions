/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    const findBoundElement = function(isFirst) {
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
    
    return [findBoundElement(true), findBoundElement(false)]
};

