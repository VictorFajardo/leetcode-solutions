function missingNumber(nums: number[]): number {
    const n = nums.length
    let total = n * (n + 1) / 2
    nums.forEach((num) => total -= num)
    return total
};