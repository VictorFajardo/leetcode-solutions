/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let startWindow = 0
    const visited = {}
    let longestSubstr = 0
    
    
    for (let endWindow = 0; endWindow < s.length; endWindow++) {
        let char = s[endWindow]
        if (char in visited) {
            startWindow = Math.max(startWindow, visited[char] + 1)
        }
        
        visited[char] = endWindow
        longestSubstr = Math.max(longestSubstr, endWindow - startWindow + 1)
    }
    
    return longestSubstr
    
};

/*
{
    a: 3,
    b: 1,
    c: 2,

}


*/