class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null    
        this.tail = null
        this.size = 0
    }
    
    add(node) {
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    
    remove(node) {
        if (node.next) {
            node.prev.next = node.next
            node.next.prev = node.prev    
            this.size--
        } else this.removeTail()
    }
    
    moveToHead(node) {
        this.remove(node)
        this.head.prev = node
        node.next = this.head
        this.head = node
        this.size++
    }
    
    getTailKey() {
        return this.tail.key
    }
    
    removeTail() {
        this.tail = this.tail.prev
        this.tail.next = null
        this.size--
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.list = new DLL()
    this.map = {}
    this.capacity = capacity
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key] !== undefined) {
        if (key !== this.list.head.key) this.list.moveToHead(this.map[key])
        return this.list.head.value
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = new Node(key, value)
    this.list.add(node)
    if (this.map[key] !== undefined) {
        this.list.remove(this.map[key])
        delete this.map[key]
    }
    else if (this.capacity < this.list.size) {
        delete this.map[this.list.getTailKey()]
        this.list.removeTail()
    }
    this.map[key] = node
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */