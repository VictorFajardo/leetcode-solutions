class TrieNode {
    constructor() {
        this.links = new Map()
        this.isWord = false
    }
    
    set(char) {
        this.links.set(char, new TrieNode())
    }
    
    has(char) {
        return this.links.get(char) !== undefined
    }
    
    get(char) {
        return this.links.get(char)
    }
    
    setEnd() {
        this.isWord = true
    }
    
    isEnd() {
        return this.isWord
    }
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    root = this.root
    for (let char of word) {
        if (!root.has(char)) {
            root.set(char)
        }
        root = root.get(char)
    }
    root.setEnd()
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.startsWith(word)
    return node && node.isEnd()
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    root = this.root
    for (let char of prefix) {
        if (!root.has(char)) {
            return false
        }
        root = root.get(char)
    }
    return root
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */