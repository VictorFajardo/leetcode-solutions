
var MyQueue = function() {
    this.stack = [] //4,5,6
    this.temp = [] //3,2,1
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.temp.length) {
        while (this.stack.length) {
            this.temp.push(this.stack.pop())
        }
    }
    return this.temp.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.temp.length) {
        while (this.stack.length) {
            this.temp.push(this.stack.pop())
        }
    }
    return this.temp[this.temp.length - 1]
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.temp.length
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */