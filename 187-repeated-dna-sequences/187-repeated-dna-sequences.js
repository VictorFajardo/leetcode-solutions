/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const response = new Set()
    const l = 10
    
    for (let i = 0; i < s.length - l + 1; i++) {
        const sequence = s.substring(i, i + l);
        if (seen.has(sequence)) response.add(sequence)
        seen.add(sequence)
    }
    // console.log(set)
    return Array.from(response)
};