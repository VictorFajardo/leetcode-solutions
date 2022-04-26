/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    }
    let num = 0
    let last = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i]
        let value = values[char]
        if (value >= last) num += value
        else num -= value
        last = value
    }
    
    return num
};

// Array
// time complexity: O(1)
// space complexity: O(1)