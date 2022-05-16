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
    this.root = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    node = this.root
    for (let char of word) {
        if (!node.has(char)) node.set(char, new Map())
        node = node.get(char)
    }
    node.set('isEnd', true)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.startsWith(word)
    return node && node.has('isEnd')
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    node = this.root
    for (let char of prefix) {
        if (!node.has(char)) return false
        node = node.get(char)
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