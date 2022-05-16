
var Trie = function() {
    this.root = {};    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    
    for (var letter of word) {
        if (node[letter] === undefined) node[letter] = {}
        node = node[letter];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    
    for (var letter of word) {
        if (node[letter]) {
            node = node[letter]
        } else {
            return false 
        }
    }
    
    return node && node.isEnd === true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root; 
    
    for (var letter of prefix) {
        if (node[letter]) {
            node = node[letter]
        } else {
            return false 
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */