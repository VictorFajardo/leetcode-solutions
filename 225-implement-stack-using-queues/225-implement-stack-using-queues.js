
var MyStack = function() {
    this.q1 = new Queue()
    this.q2 = new Queue()
    this.topValue = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.enqueue(x)
    this.topValue = x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.q1.size() > 1) {
        let value = this.q1.dequeue() 
        this.topValue = value
        this.q2.enqueue(value)        
    }
    let newQ = this.q2
    this.q2 = this.q1
    this.q1 = newQ
    return this.q2.dequeue()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topValue
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.isEmpty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */