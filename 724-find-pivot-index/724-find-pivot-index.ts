function pivotIndex(nums: number[]): number {
    let leftSum = 0
    let sum = 0
    
    for (let number of nums) sum += number
    
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) return i
        leftSum += nums[i]
    }
    
    return -1
};