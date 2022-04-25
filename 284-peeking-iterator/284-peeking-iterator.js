/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.database = []
    this.pointer = 0
    
    while (iterator.hasNext()) {
        this.database.push(iterator.next())
    }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (this.hasNext) return this.database[this.pointer]
    return false
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    let nextValue = this.database[this.pointer]
    this.pointer += 1
    return nextValue
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this.pointer < this.database.length
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */