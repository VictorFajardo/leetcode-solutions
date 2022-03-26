/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sums = [0]
    
    for (let i = 0; i < nums.length; i++) {
        this.sums.push(nums[i] + this.sums[i])
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right + 1] - this.sums[left]
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */