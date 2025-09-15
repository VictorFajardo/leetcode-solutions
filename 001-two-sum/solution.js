// Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Map to store previously seen numbers and their indices
  const seen = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target
    const complement = target - nums[i];

    // If the complement exists in the map, we found a solution
    if (seen.has(complement)) {
      // Return the indices of the complement and current number
      return [seen.get(complement), i];
    }

    // Store the current number and its index in the map
    seen.set(nums[i], i);
  }

  // If no solution is found, return undefined
  return;
};
