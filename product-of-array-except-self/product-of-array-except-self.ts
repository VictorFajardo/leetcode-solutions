function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const response: number[] = [];
    
    for (let i = 0; i < n; i++) {
        response[i] = i > 0 ? response[i - 1] * nums[i - 1] : 1;
    }    
    
    let right: number = 1;
    
    for (let i = n - 1; i >= 0; i--) {
        right = i < n - 1 ? right * nums[i + 1]: 1;
        response[i] *= right;
    } 
    
    return response;
};