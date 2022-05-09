class TrieNode {
    constructor() {
        this.links = {}
        this.isWord = false
    }
    
    get(char) {
        return this.links[char]
    }
    
    set(char) {
        this.links[char] = new TrieNode()
    }
    
    setEnd() {
        this.isWord = true
    }
    
    isEnd() {
        return this.isWord
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word, node = this.root) {
        for (let char of word) {
            if (!node.get(char)) {
                node.set(char)
            }
            node = node.get(char)
        }
        node.isWord = true
    }

    search(word) {
        let node = this.startsWith(word)
        return node && node.isEnd()

    }

    startsWith(prefix) {
        let node = this.root
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix.charAt(i)
            if (!node.get(char)) {
                return false
            }
            node = node.get(char)
        }
        return node
    }
}