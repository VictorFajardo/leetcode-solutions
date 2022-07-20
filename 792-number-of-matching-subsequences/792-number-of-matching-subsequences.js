/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let response = 0;
    for (let word of words) {
        if (isWordIncluded(s, word)) response++;
    }
    
    return response;
};

var isWordIncluded = function(s, word) {
    let prevIdx = -1;
    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        let idx = s.indexOf(char, prevIdx + 1);
        if (idx > prevIdx) {
            prevIdx = idx;
        } else {
            return false
        }
    }
    
    return true;
}