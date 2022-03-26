/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let minSalary = Infinity
    let maxSalary = -Infinity
    let sum = 0
    
    for (let employee of salary) {
        minSalary = Math.min(minSalary, employee)
        maxSalary = Math.max(maxSalary, employee)
        sum += employee
    }
    
    return (sum - minSalary - maxSalary) / (salary.length - 2)
    
};

// Array
// time complexity: O(n)
// space complexity: O(1)