/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const n = salary.length
    salary.sort((a, b) => a - b)
    let sum = 0

    for (let i = 1; i < n - 1; i++) {
        sum += salary[i]
    }
    
    return sum / (n - 2)
    
};