
var FreqStack = function() {
    this.stack = new MaxPriorityQueue({compare: (e1, e2) => {
        if (e1.priority !== e2.priority) return e2.priority - e1.priority
        return e2.order - e1.order
    }})
    this.store = {}
    this.order = 0
    
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    if (val in this.store) this.store[val]++
    else this.store[val] = 1
    this.stack.enqueue({element: val, order: this.order, priority: this.store[val]})
    this.order++
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let { priority, element } = this.stack.dequeue()
    this.store[element]--
    
    return element
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */