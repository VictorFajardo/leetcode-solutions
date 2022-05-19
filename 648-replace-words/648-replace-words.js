/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const trie = new Map()
    const words = sentence.split(' ')
    
    const addWord = function(word) {
        let node = trie
        for (let char of word) {
            if (!node.has(char)) node.set(char, new Map())
            node = node.get(char)
        }
        node.set('isEnd', true)
    }
    
    const searchRoot = function(word) {
        let node = trie
        let root = ''
        for (let char of word) {
            if (!node.has(char)) return false
            root += char
            node = node.get(char)
            if (node.get('isEnd')) return root
        }
        return false
    }
    
    dictionary.forEach((word) => {
        addWord(word)
    })
    
    const response = words.map((word) => {
        const root = searchRoot(word)
        return root ? root : word
    }).join(' ')
    
    return response
    
    
};