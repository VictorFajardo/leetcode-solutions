/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dictionary = {}
    const res = []
    
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('')
        if (dictionary[key] === undefined) {
            dictionary[key] = []  
        }
        dictionary[key].push(i)
    }
    
    for (let val of Object.values(dictionary)) {
        res.push([])
        for (let idx of val) {
            res[res.length - 1].push(strs[idx])
        }
    }
    
    return res
    
};