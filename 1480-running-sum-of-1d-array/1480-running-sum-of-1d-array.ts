function runningSum(nums: number[]): number[] {
    let sum: number = 0;
    const response: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        response.push(sum);
    }
    
    return response;

};