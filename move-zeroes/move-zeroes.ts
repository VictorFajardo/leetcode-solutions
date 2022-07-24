/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let start: number = 0;
    let end: number = 0;
    
    while (end < nums.length) {
        const endNumber: number = nums[end];
        
        if (endNumber !== 0) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start += 1;
        }
        
        end += 1;
    }

    return;
};