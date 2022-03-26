/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
    this.cache = {}
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let key = `${left}:${right}` //0:3
    
    if (!(key in this.cache)) {
        let sum = 0

        while (left <= right) {
            sum += this.nums[left]
            left++
        }

        this.cache[key] = sum
    }
    return this.cache[key]
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */