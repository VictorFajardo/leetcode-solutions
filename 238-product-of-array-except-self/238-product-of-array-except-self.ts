function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const response: number[] = [];
    const leftProducts: number[] = [];
    const rightProducts: number[] = [];
    
    // let left: number = 1;
    
    for (let i = 0; i < n; i++) {
        leftProducts[i] = i > 0 ? leftProducts[i - 1] * nums[i - 1] : 1;
    }    
    
    for (let i = n - 1; i >= 0; i--) {
        rightProducts[i] = i < n - 1 ? rightProducts[i + 1] * nums[i + 1] : 1;
    }
    
    console.log(leftProducts, rightProducts);
    
    for (let i = 0; i < n; i++) {
        response[i] = leftProducts[i] * rightProducts[i];
    }    
    
    return response;
};