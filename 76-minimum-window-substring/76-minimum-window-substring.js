/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let windowStart = 0
    let windowEnd = 0
    const n = t.length
    const m = s.length
    let counter = 0
    let charFrequency = {}
    let minLength = Infinity
    let substrStart = 0
    
    for (let i = 0; i < n; i++) {
        let char = t[i]
        if (!(char in charFrequency)) charFrequency[char] = 0
        charFrequency[char]++
        counter++
    }
    
    while (windowEnd < m) {
        const rightChar = s[windowEnd]
        if (rightChar in charFrequency) {
            charFrequency[rightChar]--
            if (charFrequency[rightChar] >= 0) counter--
        }
        
        while (counter === 0) {
            if (minLength > windowEnd - windowStart + 1) {
                minLength = windowEnd - windowStart + 1
                substrStart = windowStart
            }
            const leftChar = s[windowStart]
            windowStart++
            if (leftChar in charFrequency) {
                charFrequency[leftChar]++
                if (charFrequency[leftChar] > 0) counter++
            }
        }
        windowEnd++
        
    }
    
    if (minLength === Infinity) return ''
    return s.substr(substrStart, minLength)
    
};


// Sliding Window
// time complexity: O(n + m)
// space complexity: O(m)


    /*let characters = []
    let indexes = []
    let left = 0
    let minLength = Infinity
    let minIndex = 0
    const dict = {}
    
    for (let char of t) {
        if (dict[char] === undefined) {
            dict[char] = 0
        }
        dict[char]++
    }
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if (dict[char] !== undefined) {
            characters.push(char)
            indexes.push(i)
        }
    }
    
    let size = t.length
    
    for (let right = 0; right < characters.length; right++) {
        let rightChar = characters[right]
        if (dict[rightChar] > 0) size--
        dict[rightChar]--
        while (size === 0) {
            if (indexes[right] - indexes[left] + 1 < minLength) {
                minLength = indexes[right] - indexes[left] + 1
                minIndex = indexes[left]
            }
            let leftChar = characters[left]
            dict[leftChar]++
            if (dict[leftChar] > 0) size++
            left++
        }
    }
    
    return minLength === Infinity ? "" : s.substring(minIndex, minIndex + minLength)*/