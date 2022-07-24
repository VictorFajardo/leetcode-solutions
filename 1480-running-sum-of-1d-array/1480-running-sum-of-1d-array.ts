function runningSum(nums: number[]): number[] {
    let preSum: number = 0;
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] += preSum;
        preSum = nums[i];
    }
    
    return nums;

};