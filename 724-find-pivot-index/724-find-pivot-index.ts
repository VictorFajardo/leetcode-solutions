function pivotIndex(nums: number[]): number {
    let totalSum: number = 0
    
    for (let num of nums) {
        totalSum += num;
    }
    
    let leftSum: number = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) return i;
        leftSum += nums[i];        
    }
    
    return -1;

};