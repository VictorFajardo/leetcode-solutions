/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const arrOfSets = []
    
    for (let i = 0; i < words.length; i++) {
        const set = new Set()
        for (const letter of words[i]) {
            set.add(letter)
        }
        arrOfSets[i] = set
    }
    
    let max = 0
    
    for (let i = 0; i < arrOfSets.length - 1; i++) {
        const left = arrOfSets[i]
        for (let j = i + 1; j < arrOfSets.length; j++) {
            const right = arrOfSets[j]
            let noSharing = true
            for (const letter of left) {
                if (right.has(letter)) {
                    noSharing = false
                    break
                }
            }
            if (noSharing) {
                max = Math.max(max, words[i].length * words[j].length)
            }
        }
    }
    
    return max
    
};