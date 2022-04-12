
var FreqStack = function() {
    this.stack = []
    this.temp = []
    this.frequency = {}
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.stack.push(val)
    if (val in this.frequency) this.frequency[val]++
    else this.frequency[val] = 1    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxFrequency = -1
    let maxFrequencyNumber = -1
    
    // time: O(n)
    for (let i = this.stack.length - 1; i >= 0; i--) {
        let number = this.stack[i]
        let frequency = this.frequency[number]
        if (frequency > maxFrequency) {
            maxFrequency = frequency
            maxFrequencyNumber = number
        }
    }
    
    if (maxFrequency > 1) this.frequency[maxFrequencyNumber]--
    else delete this.frequency[maxFrequencyNumber]
    
    // looking for the maxFrequencyNumber
    while (this.stack.length) {
        let current = this.stack.pop()
        if (current === maxFrequencyNumber) break
        else this.temp.push(current)
    }
    
    
    // restoring this.stack
    while (this.temp.length) {
        let current = this.temp.pop()
        this.stack.push(current)
    }
    
    return maxFrequencyNumber
    
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */