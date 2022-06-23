/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ')
    
    if (arr.length !== pattern.length) return false
    
    const map = new Map()
    const set = new Set()
    
    
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i]
        const letter = pattern[i]
        if (!map.has(word) && !set.has(letter)) {
            set.add(letter)
            map.set(word, letter)
        } else if (map.get(word) !== letter) return false
    }
    
    console.log(map)
    
    return true
    
    
};