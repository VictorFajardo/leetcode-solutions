class TrieNode {
    constructor() {
        this.children = new Map()
        this.isWord = false
    }
    
    set(char) {
        this.children.set(char, new TrieNode())
    }
    
    has(char) {
        return this.children.get(char) !== undefined
    }
    
    get(char) {
        return this.children.get(char)
    }
    
    setEnd() {
        this.isWord = true
    }
    
    isEnd() {
        return this.isWord
    }
}

var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    node = this.root
    for (let char of word) {
        if (node[char] === undefined) node[char] = {}
        node = node[char]
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.startsWith(word)
    return node && node.isEnd === true
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    node = this.root
    for (let char of prefix) {
        if (node[char] === undefined) return false
        node = node[char]
    }
    return node
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */