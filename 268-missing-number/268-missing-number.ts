function missingNumber(nums: number[]): number {
    let sum = nums.reduce((acc, val) => acc + val)
    const n = nums.length
    let total = n * (n + 1) / 2
    return total - sum
};