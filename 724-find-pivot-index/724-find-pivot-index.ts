function pivotIndex(nums: number[]): number {
    let leftSum: number = 0;
    let sum: number = 0;
    
    for (let num of nums) {
        sum += num;
    }
    
    for (let i: number = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }
    
    return -1;
};