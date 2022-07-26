function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const leftProducts: number[] = [...nums];
    const rightProducts: number[] = [...nums];
    
    let left: number = 1;
    
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            leftProducts[i] *= leftProducts[i - 1];
        }
    }    
    
    let right: number = 1;
    
    for (let i = n - 1; i >= 0; i--) {
        if (i < n - 1) {
            rightProducts[i] *= rightProducts[i + 1];
        }
    }
    
    const response: number[] = [];
    
    for (let i = 0; i < n; i++) {
        response[i] =
            (i === 0 ? 1 : leftProducts[i - 1])
            *
            (i === n - 1 ? 1 : rightProducts[i + 1]);
    }    
    
    return response;
};