function pivotIndex(nums: number[]): number {
    let totalSum: number = 0
    
    for (let num of nums) {
        totalSum += num;
    }
    
    let leftSum: number = 0;
    
    for (let i = 0; i < nums.length; i++) {
        leftSum += nums[i - 1] || 0;
        totalSum -= nums[i];
        console.log(leftSum, totalSum);
        if (leftSum === totalSum) return i
    }
    
    return -1;

};