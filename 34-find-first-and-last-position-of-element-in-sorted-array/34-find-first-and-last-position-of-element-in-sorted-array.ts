function searchRange(nums: number[], target: number): number[] {
    const response: number[] = [-1, -1];

    response[0] = findBound(nums, target, true);
    if (response[0] !== -1) {
        response[1] = findBound(nums, target, false);
    }
    
    return response;
};

function findBound(nums: number[], target: number, isFirst: boolean): number {
    let start: number = 0;
    let end: number = nums.length - 1;
    let keyIndex: number = -1;
    
    while (start <= end) {
        const mid: number = start + Math.floor((end - start) / 2);
        if (target > nums[mid]) {
            start = mid + 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            keyIndex = mid;
            if (isFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    
    return keyIndex;
}